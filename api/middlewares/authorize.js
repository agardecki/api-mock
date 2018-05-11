module.exports =  function (req, res, next) {
 if (isAuthorized(req)) { // add your authorization logic here
   next() // continue to JSON Server router
 } else {
   res.status(401).jsonp({
   error: "Unauthorized"
 })
 }
}

function isAuthorized (req) {
  if (req.header('Authorization') != null && req.header('Authorization').indexOf('Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.')!=-1) {
    return true;
  } else {
    return false;
  }
};
