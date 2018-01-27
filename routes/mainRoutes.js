var express = require('express')
var router = express.Router()


router.get('/', function(req, res) {
    res.redirect('/about')
})

router.get('/about', function(req, res) {
    res.render('about', {
        page: 'about'
    })
})

router.get('/portfolio', function(req, res) {
    res.render('portfolio', {
        page: 'portfolio'
    })
})

router.get('/hire-me', function(req, res) {
    res.render('hire-me', {
        page: 'hire-me'
    })
})

module.exports = router
