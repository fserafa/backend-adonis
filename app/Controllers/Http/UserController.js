'use strict'

const User = use("App/Models/User");

class UserController {
    async index() {
        const users = User.all();

        return users;
    }

    async create({ request }) {
        const data = request.only(["name", "login", "password"])

        const user = await User.create(data)

        return user;
    }
}

module.exports = UserController
