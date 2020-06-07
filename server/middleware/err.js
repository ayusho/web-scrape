module.exports = function () {
    return function (err, req, res, next) {
        console.log(err);
        res.send(500);
    }
}