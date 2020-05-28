var mongoose = require('./conexao');
var pessoaSchema = new mongoose.Schema({
	email:{
		type:String,
		required:true
	},
	senha:{
		type:String,
		required:true,
		selected:false
	},
	imagem:{
		type:String,
		required:false
	}
});
module.exports = mongoose.model('pessoa',pessoaSchema);