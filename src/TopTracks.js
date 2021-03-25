import React, { useState, useEffect } from 'react'
import { getTopTracks } from './getTopTracks'

const TopTracks = (props) => {
  const [topTracks, setTopTracks] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    setLoading(true)
    getTopTracks(props.item.artists[0].id, props.token)
      .then((data) => {
        setTopTracks(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [props.item])

  return (
    <>
      <div className='top-track-list'>
        <h2>Top Track for {props.item.artists[0].name}</h2>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ul>{topTracks && topTracks.map((track) => <li>{track.name}</li>)}</ul>
      </div>
    </>
  )
}

export default TopTracks
