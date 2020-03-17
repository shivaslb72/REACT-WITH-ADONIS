'use strict'

const User = use("App/Models/User")
const Mail = use('Mail')


class UserController {
    async login({ request, auth }) {
        const { email, password } = request.all()
        const token = await auth.attempt(email, password)
        return token
    }
    async register({ request }) {
        const { email, password, username } = request.all()
        await User.create({
            email,
            password,
            username,

        })
        await Mail.raw('your otp is 5965', (message) => {
            message.from("shivaslb72@gmail.com")
            message.to("shivaslb72@gmail.com")//jayantha.prabhu@codeinks.com
            message.subject('please verify your OTP')
        })


        return 'Registered successfully'
    }
}

module.exports = UserController

