var express = require('express');
var router = express.Router();

var person = require('./users');

router.get('/', function(req, res, next) {
    res.render('../views//index.html', {
        users: person.get()
    });
});

router.get('/getPerson', function(req, res, next) {
    res.send(person.get());
});

router.post('/reg', function(req, res, next) {
    var id = req.body.id;
    person.del(req.body.id);
    res.send({
        success: true,
        id
    });
});
router.post('/add', function(req, res, next) {
    var name = req.body.name;
    person.add(name);
    res.send({
        success: true,
        name
    });
});

router.get('/reset', function(res, res, next) {
    person.reset();
    res.send({
        success: true
    });
});

module.exports = router;
