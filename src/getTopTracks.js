export async function getTopTracks(id, token) {
  // Make a call using the token
  try {
    const res = await fetch(
      `https://api.spotify.com/v1/artists/${id}/top-tracks?market=NL`,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    )
    const data = await res.json()
    return data.tracks
  } catch (error) {
    throw new Error('something went wrong')
  }
}
