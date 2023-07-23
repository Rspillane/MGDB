// Twitch API Client Secret 0prlklfvnroo00m1xsr3ipa8ebvde2
// Twitch API Client ID sgukfvdo3to7ptty3fbhv5wqjvm5bu
// I need to remove this file from the public repo
// These fetch function as in a separate file to ensure they aren't available on the client
  import { NextResponse } from 'next/server'
 
  //Use getch function to get my auth token from the twitch api
  export async function POST() {
    const res = await fetch('https://id.twitch.tv/oauth2/token?client_id=sgukfvdo3to7ptty3fbhv5wqjvm5bu&client_secret=0prlklfvnroo00m1xsr3ipa8ebvde2&grant_type=client_credentials', {
      method: 'POST',
    })
   
  const data = await res.json()
  console.log(data)
  
  //second fetch method to use that auth access token to request specific data from an endpoint
  const games = await fetch('https://api.igdb.com/v4/games', {
    method: 'POST',
    headers: {
      'Client-ID': 'sgukfvdo3to7ptty3fbhv5wqjvm5bu',
      'Authorization': `Bearer ${data.access_token}`
    },
    body: "fields name,cover.image_id,summary,genres,platforms; where rating > 95; limit 100;"
    
    // body: JSON.stringify({ time: new Date().toISOString() }),
  })

    const gameResponse = await games.json()
    console.log(gameResponse)
    return NextResponse.json({games: gameResponse})
  }
