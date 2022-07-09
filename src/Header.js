import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from './DataLayer';

function Header() {
    const[{user}, dispatch] = useDataLayerValue();

  return (
    <div className='header'>
        <div className='header_left'>
            <SearchIcon/>
            <input
            placeholder='Search for Artists, Songs and Playlists'
            type="text"
            />
        </div>
        <div className='header_right'>
            <Avatar src={user?.images[0]?.url} alt="AB"/>
            {/* ? se error nii aaiga, jb naam load hoga tb display ho jaiga */}
            <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header