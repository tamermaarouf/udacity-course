const logger = (req, res, next) => {
    let url = req.url;
    console.log(`${url} was visited`);
    next();
};
export default logger;
