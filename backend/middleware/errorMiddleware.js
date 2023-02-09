const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    console.log(statusCode);
    res.status(statusCode);
    res.json({ message: err.message, stack: err.stack });
};

module.exports = { errorHandler };
