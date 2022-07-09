import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  //Data Layer ke ander se jo bhi chahiye hoga vo curly ke andar
  //Dispatch for updating value and all
  const[{user,token,playlists}, dispatch] = useDataLayerValue();

  useEffect(()=> {
    const hash = getTokenFromUrl();
    window.location.hash=""; //REMOVES ACCESS TOKEN FROM URL
    const _token=hash.access_token;

    if(_token){
    //giving api the token
    spotify.setAccessToken(_token);

    dispatch({
      type: 'SET_TOKEN',
      token: _token,
    });

    //getting user
    spotify.getMe().then((user)=> {
      dispatch({
        type: 'SET_USER',
        user:user,
      });
    });

    spotify.getUserPlaylists().then((playlists)=> {
      dispatch({
        type: 'SET_PLAYLISTS',
        playlists: playlists,
      });
    });

    spotify.getPlaylist('7cXAQEDQW0XeWUSFD9Keox').then((response)=> {
      dispatch({
        type: 'SET_DISCOVER_WEEKLY',
        discover_weekly: response,
      });
    })

    spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
  } 
  }, [token, dispatch]);

  // console.log(token);
  // console.log(playlists);
  // console.log(user);

  return (
    <> 
      <div> 
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
      </div>
      
    </>
  );
}

export default App;
