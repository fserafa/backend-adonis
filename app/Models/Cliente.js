'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cliente extends Model {
    passwords() {
        return this.hasMany('App/Models/Password')
    }
}

module.exports = Cliente
