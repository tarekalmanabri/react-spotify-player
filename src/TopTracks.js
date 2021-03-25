import React, { useState, useEffect } from 'react'
import { getTopTracks } from './getTopTracks'

const TopTracks = (props) => {
  const [topTracks, setTopTracks] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    getTopTracks(props.item.artists[0].id, props.token)
      .then((data) => {
        setTopTracks(data)
      })
      .catch((error) => {
        setError(error)
      })
  }, [props.item])

  return (
    <>
      <div className='top-track-list'>
        <h2>Top Track for {props.item.artists[0].name}</h2>
        {error && <p>{error}</p>}
        <ul>{topTracks && topTracks.map((track) => <li>{track.name}</li>)}</ul>
      </div>
    </>
  )
}

export default TopTracks
