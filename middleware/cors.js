const ACCEPTED_ORIGINS = [
  "https://localhost:8080",
  "https://localhost:5500",
  "http://127.0.0.1:5500",
];

export function corsMiddleware(req, res, next) {
  const origin = req.headers.origin;

  if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
    res.header("Access-Control-Allow-Origin", origin || "*");
  }

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    return res.sendStatus(200);
  }

  next();
}
