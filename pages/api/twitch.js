// This is where all the logic for your Twitch API will live!
export default async (req, res) => {
  try {
    if(req.method === 'POST'){
      const {data} = req.body
      res.status(200).json({data})
    }
  } catch(error){
    console.warn(error.message)
    res.status(500).send()
  }
}

//Actions
const getTwitchAccesToken = async () => {
  console.log('GETTING ACCES TOKEN...')

  const path = `https://id.twitch.tv/oauth2/token?client_id=${porcess.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_SECRET_ID}&grant_type=client_credentials`

  const response = await fetch(path, {
    method: 'POST'
  })

  if (response) {
    const json = await response.json()
    return json.access_token
  }
}

