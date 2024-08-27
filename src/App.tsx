import { useEffect, useState } from "react";
import { accessToken } from "./spotify/script"

function App() {
  let data = accessToken
  console.log(data, 'data');

  const [songData, setSongData] = useState(null)

  useEffect(() => {
    fetch(
      "https://api.spotify.com/v1/search?q=smell%20like%20a%20teen%20spirit&type=track&limit=1",{
        headers:{
          Authorization : `Bearer ${accessToken}`
        }
      }
    ).then((response)=>response.json())
     .then((data)=>setSongData(data.tracks.items[0]))
  },[])
  console.log(songData,'songData is showing');
  
  return (
    <>
      <h1>Hello World</h1>
      {songData?(
        <div>
          <h1>{songData.name}</h1>
          <p>{songData.artists[0].name}</p>
          <img src={songData.album.images[0].url} alt="Album Cover" />
          <source src={songData.preview_url} type="audio/ogg"/>
          <p>It is loaded</p>
          <source src={songData.preview_url} type="audio/mp3"/>
        </div>
      ):(
        <p>...Loading</p>
      )}
    </>
  )
}

export default App
