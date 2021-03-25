import React, { useState, useEffect } from 'react'

const TopTracks = (props) => {
  const [topTracks, setTopTracks] = useState('')

  function getTopTracks() {
    // Make a call using the token
    fetch(
      `https://api.spotify.com/v1/artists/${props.item.artists[0].id}/top-tracks?market=NL`,
      {
        headers: {
          Authorization: 'Bearer ' + props.token,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setTopTracks(data.tracks)
      })
  }

  useEffect(() => {
    getTopTracks()
  }, [props.item])

  return (
    <>
      <div className='top-track-list'>
        <h2>Top Track for {props.item.artists[0].name}</h2>
        <ul>{topTracks && topTracks.map((track) => <li>{track.name}</li>)}</ul>
      </div>
    </>
  )
}

export default TopTracks
