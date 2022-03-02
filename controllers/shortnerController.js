const shortnerService = require('../services/shortnerService');

const postUrlController = async (req, res) => {
  const { originalUrl } = req.body;
  const postUrl = await shortnerService.postUrlService(originalUrl);
  const headerUrl = req.header('host')

  return res.status(201).json({ 
    shortGenerate: postUrl,
    originalUrl: originalUrl,
    newUrl: `${headerUrl}/${postUrl}`
  });
};

const getUrlController = async (req, res) => {
  const { newUrl } = req.params
  const [getUrl]  = await shortnerService.getUrlService(newUrl);
  const resultUrl = `${getUrl.originalUrl}`

  return res.status(301).redirect(resultUrl);
};

module.exports = {
  postUrlController,
  getUrlController
}