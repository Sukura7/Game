
var express = require('express');
var router = express.Router();

const SessionModel = require('../models/session')


function renderIndex(req, res, next){
    console.log('renderIndex..')
    res.render('index')
}

router.get('/', renderIndex);
router.get('/game', renderIndex);


router.get('/instanceInstruction', function (req, res, next) {
    res.render('instanceInstructions')
});

router.get('/shortInstruction', function (req, res, next) {
    res.render('shortInstructions')
});

router.post('/createSession', (req, res, next) => {
    let o = req.body;
    SessionModel.upsert(o.session_id, o).then(() => {
        res.send({success: true, data: o});
    });
})
router.get('/instancePlay', function (req, res, next) {
    const query = req.query || {};
    SessionModel
        .get(query.session_id)
        .then((o) => {
            res.render('instancePlay', {users: o});
        })
});
router.get('/shortPlay', function (req, res, next) {
    res.render('shortPlay')
});
router.get('/instanceResult', function (req, res, next) {
    res.render('instanceResult')
});
router.post('/Result', function (req, res, next) {
    let user = req.body;
    SessionModel.upsert(user.session_id, user).then(() => {
        res.send({success: true, data: user});
    });
});
router.get('/wait', function (req, res, next) {
    res.render('wait')
});
router.get('/shortAnswer', function (req, res, next) {
    res.render('shortAnswer')
});
router.get('/shortScore', function (req, res, next) {
    res.render('shortScore')
});
router.get('/showResult', function (req, res, next) {
    SessionModel
        .get()
        .then((o) =>{
            res.render('result', {users: o});
        })
});
module.exports = router;