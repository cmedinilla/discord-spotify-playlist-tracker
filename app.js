const { getBearerToken, getPlaylist } = require('./spotify');

const run = async () => {
  try {
    const token = await getBearerToken();
    const playlist = await getPlaylist(token.data.access_token);
    console.log(playlist.data);
  } catch (error) {
    console.error(error);
  }
};

run();