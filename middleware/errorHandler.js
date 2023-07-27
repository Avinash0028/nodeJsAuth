export default async function errorHandler(err, req, res, next) {
    res.status(400).json({ error: true, message: err.message });
    console.log(err.message);
    next();
}