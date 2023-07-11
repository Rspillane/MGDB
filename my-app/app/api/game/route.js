// Twitch API Client Secret 0prlklfvnroo00m1xsr3ipa8ebvde2
// Twitch API Client ID sgukfvdo3to7ptty3fbhv5wqjvm5bu

  import { NextResponse } from 'next/server'
 
  export async function POST() {
    const res = await fetch('https://id.twitch.tv/oauth2/token?client_id=sgukfvdo3to7ptty3fbhv5wqjvm5bu&client_secret=0prlklfvnroo00m1xsr3ipa8ebvde2&grant_type=client_credentials', {
      method: 'POST',
    })
   
    const data = await res.json()
    console.log(data)

    const games = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST',
      headers: {
        'Client-ID': 'sgukfvdo3to7ptty3fbhv5wqjvm5bu',
        'Authorization': `Bearer ${data.access_token}`
      },
      body: "fields name,genres;"
      // body: JSON.stringify({ time: new Date().toISOString() }),
    })
    const gamesResponse = await games.json()
    console.log(gamesResponse)
    return NextResponse.json({games: gamesResponse})
  }