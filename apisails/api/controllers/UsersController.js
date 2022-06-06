/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    getAllUsers: async function (req, res) {
        var misUsuarios = await User.find();
        res.ok(misUsuarios);
    },

    //buscamos parametros
    post: async function (req, res) {
        var params = req.allParams();
        //hacemos validaciones
        if (!params.nombre)
            return req.badRequest('El nombre es necesario');
        var resUsers = await Users.create(params).fetch();
        return res.ok(resUsers);
    },
    put: async function (req, res) {
        var params = req.allParams();
        var id = params.id;

        var resUsers = await Users.update({ id: id }, params).fetch();
        return res.ok(resUsers);
    },
    delete: async function (req, res) {
        var id = req.param('id');
        var resUsers = await Users.destroy({ id: id }).fetch();
        return res.ok(resUsers);
    }
};

