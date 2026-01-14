export default function routeNotFound(req, res, next) {
  res.status(404);
  res.json({
    error: "404 not found",
    message: "Route not found",
  });
}
