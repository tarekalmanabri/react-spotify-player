import React, { useState, useEffect } from 'react'
import './Player.css'

const Player = (props) => {
  const [topTracks, setTopTracks] = useState()

  const backgroundStyles = {
    backgroundImage: `url(${props.item.album.images[0].url})`,
  }

  const progressBarStyles = {
    width: (props.progress_ms * 100) / props.item.duration_ms + '%',
  }

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
        console.log(data)
        setTopTracks(data.tracks)
      })
  }

  useEffect(() => {
    getTopTracks()
  }, [props.item])

  return (
    <>
      <div className='App'>
        <ul>{topTracks && topTracks.map((track) => <li>{track.name}</li>)}</ul>
      </div>
    </>
  )
}

export default Player
