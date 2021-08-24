// Main entry point of your app
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
  // Actions

  const addStreamChannel = event => {
    // Prevent the page from redirecting
    event.preventDefault()

    const {value} = event.target.elements.name
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
      </div>
    </div>
  )
}

export default Home