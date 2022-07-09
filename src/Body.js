import React from 'react';
import './Body.css';
import Header from './Header';
import SongRow from './SongRow';
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Body({spotify}) {
  const[{discover_weekly}, dispatch] = useDataLayerValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:7cXAQEDQW0XeWUSFD9Keox`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className='body'>
      <Header spotify={spotify}/>
      <div className='body_info'>
        <img src={discover_weekly?.images[0].url} alt=""/>
        <div className='body_infoText'>
          <strong>Playlists</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className='body_songs'>
        <div className='body_icons'>
          <PlayCircleFilledIcon onClick={playPlaylist} className='body_shuffle'/>
          <FavoriteIcon fontSize='large'/>
          <MoreHorizIcon/>
        </div>
        {discover_weekly?.tracks.items.map((item)=> (
          <SongRow playSong={playSong} track={item.track}/>
        ))}
      </div>
    </div>
  )
}

export default Body