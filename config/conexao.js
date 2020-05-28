var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://pedro:g21bxy.com@cluster0-qthqr.mongodb.net/teste?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true });
mongoose.Promise = global.Promise;
module.exports = mongoose;