const axios = require('axios').default;
const qs = require('qs');
const encode = require('nodejs-base64-encode');

const clientId = process.env.CLIENT_ID;
const secretId = process.env.SECRET_ID;

const loginUrl = 'https://accounts.spotify.com/api/token';

const _encodeBasicAuth = () => {
  const basic = `${clientId}:${secretId}`;

  return encode.encode(basic, 'base64');
}

const getBearerToken = () => {
  const data = qs.stringify({
    'grant_type': 'client_credentials' 
  });

  const config = {
    method: 'post',
    url: loginUrl,
    headers: { 
      'Authorization': `Basic ${_encodeBasicAuth()}`, 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
  };

  return axios(config);
}

module.exports = { getBearerToken };
