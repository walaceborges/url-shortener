const generateError = require('../helpers/generateError');
const { generateFormatUrl } = require('../helpers/generateShortUrl');
const shortnerModel = require('../models/shortnerModel');

const NOT_FOUND_CODE = 404;
const NOT_FOUND_MESSAGE = 'Product not found';

const postUrlService = async (originalUrl) => {
  const newUrl = generateFormatUrl();
  await shortnerModel.postUrlModel (originalUrl, newUrl);

  return newUrl;
};

const getUrlService = async (newUrl) => {
  const getUrl = shortnerModel.getUrlModel(newUrl);

  return getUrl;
};

module.exports = {
  postUrlService,
  getUrlService
}