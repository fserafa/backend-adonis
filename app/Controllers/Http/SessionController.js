'use strict'

class SessionController {
    async store({ request, auth }) {
        const { login, password } = request.only([
            'login',
            'password'
        ])

        const { token } = await auth.attempt(login, password);

        return { token };
    }

}

module.exports = SessionController
