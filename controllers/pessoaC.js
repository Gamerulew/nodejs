var pessoa = require('../config/pessoaSchema');
var controlador = {
	cadastrar: async (req,res,next)=>{
		var parametros = req.body;
		parametros.imagem = req.file.filename;
		await pessoa.create(parametros,(err)=>{
			if(err) throw err;
		});
		res.send(req.file);
	},
	buscar: async (req,res,next)=>{
		var i = await pessoa.find();
		res.send(i);
	}
}
module.exports = controlador;