//Express default error handler returns a HTML document, we cam customise the express error handler to return JSON or stack using the middleware, however it acceps 4 parameters (err,req,res,next)

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};
