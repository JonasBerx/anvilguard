const router = require('express').Router();
const Article = require('../models/Article')

function isAuthorized(req, res, next) {
  if (req.user) {
    console.log("Logged in.");
    next();
  }
  else {
    console.log("Not logged in");
    res.redirect('/')
  }
}


router.get('/', (req, res, next) => {
  // TODO get all articles in db
  const articles = Article.find()
  res.render('index', { title: 'Express' });
});


router.post('/create', async (req, res) => {
  try {
    const articleTitle = req.body.articleTitle
    const articleContent = req.body.articleContent
    const articleAuthor = req.body.articleAuthor

    const newArticle = await Article.create({
      articleTitle: articleTitle,
      articleContent: articleContent,
      articleAuthor: articleAuthor,
    })

    const savedArticle = await newArticle.save();
    res.send(savedArticle)

  } catch (error) {
    console.log(error);
    res.send(error)
  }
});


module.exports = router
