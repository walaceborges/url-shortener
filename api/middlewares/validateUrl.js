const URL_REGEX_PATTERN = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

const validateUrl = (req, res, next) => {
  const { body: { originalUrl } } = req;
  const isUrlValid = URL_REGEX_PATTERN.test(originalUrl);

  if (!req.body.originalUrl) return res.status(400).json({ error: 'Bad Request: body must contain the following format: { url: "example.com" }' })

  if (!isUrlValid) return res.status(400).json({ error: 'Invalid URL. Try again.' })

  next();
}

module.exports = validateUrl;