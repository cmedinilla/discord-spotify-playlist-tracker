const axios = require('axios').default;

const playlistId = process.env.PLAYLIST_ID;

const playlistEndpoint = 'https://api.spotify.com/v1/playlists/';
const tracks = '/tracks';

const _getTracks = (url = null, token) => {
  let nextUrl;
  if (url) {
    nextUrl = url;
  }

  const config = {
    method: 'get',
    url: nextUrl || `${playlistEndpoint}${playlistId}${tracks}`,
    headers: { 
      'Authorization': `Bearer ${token}`
    }
  };

  return axios(config);
}

const getPlaylistTracks = async token => {
  let next = 'first';
  let resultTracks = [];
  while (next !== null) {
    if (next === 'first')
      next = null;

    const tracks = await _getTracks(next, token);
    resultTracks = resultTracks.concat(tracks.data.items);
    next = tracks.data.next;
  }

  return resultTracks;
}

module.exports = { getPlaylistTracks };
