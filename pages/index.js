// Main entry point of your app
import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
  //State
  const [favoriteChannels, setFavoriteChannels] = useState([])

  // Actions
  const addStreamChannel = async event => {
    // Prevent the page from redirecting
    event.preventDefault()

    const { value } = event.target.elements.name

    if (value) {

      // Call Twitch Search API
      const path = `https://${window.location.hostname}`


      const response = await fetch(`${path}/api/twitch`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: value })
      })
      setFavoriteChannels(prevState => [...prevState, value])
      event.target.elements.name.value = ""
    }
  }

  //Render methods
  const renderForm = () => {
    return (
      <div className={styles.formContainer}>
        <form onSubmit={addStreamChannel}>
          <input id='name' placeholder='Twitch Channel Name' type='text' required />
          <button type='sumbit'>Add Streamer</button>
        </form>

      </div>
    )
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>🎥 Personal Twitch Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.inputContainer}>
        {renderForm()}
        <div>{favoriteChannels.join(', ')}</div>
      </div>
    </div>
  )
}

export default Home