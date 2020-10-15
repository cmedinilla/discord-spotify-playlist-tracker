const { getBearerToken, getPlaylistTracks } = require('./spotify');

const run = async () => {
  try {
    const token = await getBearerToken();
    const playlist = await getPlaylistTracks(token.data.access_token);
    console.log(playlist.length);
  } catch (error) {
    console.error(error);
  }
};

run();