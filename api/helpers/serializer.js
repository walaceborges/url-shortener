const transformCamelCase = (array) =>
  array.map((elem) => ({
    id: elem.id,
    originalUrl: elem.original_url,
    newUrl: elem.new_url,
  }))

module.exports = {
  transformCamelCase
};