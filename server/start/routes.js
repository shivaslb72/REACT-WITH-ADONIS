'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post("auth/register", "Usercontroller.register")
  Route.post("auth/login", "Usercontroller.login")

  Route.get("projects", "Projectcontroller.index").middleware("auth")
  Route.get("projects/:id", "Projectcontroller.show").middleware("auth")
  Route.post("projects", "Projectcontroller.create").middleware("auth")
  Route.delete("projects/:id", "Projectcontroller.destroy").middleware("auth")
  Route.patch("projects/:id", "Projectcontroller.update").middleware("auth")

  Route.get("projects/:id/tasks", "TaskController.index").middleware("auth")
  Route.post("projects/:id/tasks", "TaskController.create").middleware("auth")
  Route.delete("tasks/:id", "TaskController.destroy").middleware("auth")
  Route.patch("tasks/:id", "TaskController.update").middleware("auth")

  Route.post('/user', 'UserController.store')




})
  .prefix("api")