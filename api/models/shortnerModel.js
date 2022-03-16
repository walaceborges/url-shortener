const connection = require('../helpers/connection');
const { insertUrl, getUrl } = require('../helpers/queries');
const { transformCamelCase } = require('../helpers/serializer');

const postUrlModel = async (originalUrl, newUrl) => {
  const query = insertUrl;
  await connection.execute(query, [originalUrl, newUrl]);
};

const getUrlModel = async (newUrl) => {
  const query = getUrl;
  const [result] = await connection.execute(query, [newUrl]);

  return transformCamelCase(result);
};

module.exports = {
  postUrlModel,
  getUrlModel
}