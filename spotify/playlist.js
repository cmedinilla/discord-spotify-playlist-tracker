const axios = require('axios').default;

const playlistId = process.env.PLAYLIST_ID;

const playlistEndpoint = 'https://api.spotify.com/v1/playlists/';

const getPlaylist = token => {
  var config = {
    method: 'get',
    url: `${playlistEndpoint}${playlistId}`,
    headers: { 
      'Authorization': `Bearer ${token}`
    }
  };

  return axios(config);
}

module.exports = { getPlaylist };
