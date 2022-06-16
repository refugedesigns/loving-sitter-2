const createError = require("http-errors")

const errorHandler = (error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message, data });
};

const notFound = (req, res, next) => {
    next(createError(404))
}

module.exports = {
    errorHandler,
    notFound
};
