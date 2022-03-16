const generateFormatUrl = () => {
  const generatorUrl = Math.random().toString(16).substring(2);
  return generatorUrl;
};

module.exports = {
  generateFormatUrl
}