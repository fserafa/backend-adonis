'use strict'

const Password = use("App/Models/Password");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with passwords
 */
class PasswordController {
  /**
   * Show a list of all passwords.
   * GET passwords
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const passwords = Password.all();

    return passwords;
  }

  /**
   * Render a form to be used for creating a new password.
   * GET passwords/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ params, request, response, view }) {
    const { id } = params.id;
    const data = request.only(["nome", "login", "senha"])

    const password = await Password.create({ ...data, cliente_id: id })

    return password;
  }

  /**
   * Create/save a new password.
   * POST passwords
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ params, request, response }) {
    const { id } = params.id;
    const data = request.only(["nome", "login", "senha"])

    const password = await Password.create({ ...data, cliente_id: id })

    return password;
  }

  /**
   * Display a single password.
   * GET passwords/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const password = await Password.findOrFail(params.id)

    await password.load('cliente')

    return password;
  }

  /**
   * Render a form to update an existing password.
   * GET passwords/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update password details.
   * PUT or PATCH passwords/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {

  }


  /**
   * Delete a password with id.
   * DELETE passwords/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = PasswordController
