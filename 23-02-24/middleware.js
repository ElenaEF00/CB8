const auth = (req, res, next) => {
  const username = req.query.username;

  if (username !== "admin") {
    res.status(401).send("Non mi pare tu sia admin! :(");
  }

  next();
};

module.exports = auth;
