'use strict'
const Project = use("App/Models/Project")
const AuthorizationService = use("App/Services/AuthorizationService")


class ProjectController {
    async index({ auth }) {
        const user = await auth.getUser()
        return await user.projects().fetch()
    }

    async show({ auth, params }) {
        const user = await auth.getUser()
        const { id } = params
        const project = await Project.find(id)


        return project
    }

    async create({ request, auth }) {
        const user = await auth.getUser()
        const { title } = request.all()
        const project = new Project()
        project.fill({
            title
        })
        await user.projects().save(project)
        return project
    }

    async destroy({ request, response, auth, params }) {
        const user = await auth.getUser()
        const { id } = params
        const project = await Project.find(id)
        AuthorizationService.verifyPermission(project, user)
        await project.delete()
        return project
    }
    async update({ request, response, auth, params }) {
        const user = await auth.getUser()
        const { id } = params
        const project = await Project.find(id)
        AuthorizationService.verifyPermission(project, user)
        project.merge(request.only("title"))
        await project.save()
        return project
    }
}

module.exports = ProjectController
