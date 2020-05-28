var express = require('express');
var router = express.Router();
var multer = require('multer');
var storage = require('../config/multer');
var upload = multer({storage});
var controladorPessoa = require('../controllers/pessoaC');
router.get('/', (req, res, next)=> {
  res.render('pessoa');
});
router.get('/cadastro',(req,res,next)=>{
	res.render('pessoa');
});
router.post('/cadastro',upload.single('imagem'),controladorPessoa.cadastrar);
router.get('/:id',controladorPessoa.buscar);

module.exports = router;
