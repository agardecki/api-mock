module.exports =  function (req, res, next) {
    if (req.params.id !== '999') {
  // Continue to JSON Server router
      next()
    } else {
      res.status(404).jsonp({
      error: "Not found"
    })
  }
}
