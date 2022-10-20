const mongoose = require('mongoose')
var autoIncrement = require('mongoose-auto-increment');

const CounterSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 }
})

var ArticleSchema = mongoose.Schema({
  articleTitle: { type: String, required: true },
  articleContent: { type: String, required: true },
  articleAuthor: { type: String }
});

autoIncrement.initialize(mongoose.connection);
CounterSchema.plugin(autoIncrement.plugin, 'Article');
const Article = module.exports = mongoose.model('Article', ArticleSchema)
