export default function handleError(err, req, res, next) {
  res.status(500);
  res.json({
    error: "500 internal error",
    message: "server error",
  });
}
