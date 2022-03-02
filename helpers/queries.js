const insertUrl = 'INSERT INTO UrlShortener.url (original_url, new_url) VALUES (?, ?)'; 
const getUrl = 'SELECT * FROM UrlShortener.url WHERE new_url = ?';

module.exports = {
  insertUrl,
  getUrl
}