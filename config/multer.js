var multer = require('multer');
var uniqid = require('uniqid');
var opcoes = multer.diskStorage({
	destination: function(req,file,cb){
		cb(null,'uploads/');
	},
	filename: function (req,file,cb) {
		var tipo = 'image/jpeg';
		var nome = uniqid();
		if(tipo == 'image/jpeg' || tipo == 'image/jpg'){
			nome += '.jpg';
		}
		if(tipo == 'image/png'){
			nome += '.png';
		}
		cb(null,nome);
	}
});
module.exports = opcoes;