var express = require('express');
var router = express.Router();

router.get('/', (req, res) => res.render('home', { title: 'Home', layout: 'layout' }));
router.get('/about', (req, res) => res.render('about', { title: 'About Me', layout: 'layout' }));
router.get('/projects', (req, res) => res.render('projects', { title: 'Projects', layout: 'layout' }));
router.get('/contact', (req, res) => res.render('contact', { title: 'Contact Me', layout: 'layout' }));

module.exports = router;
