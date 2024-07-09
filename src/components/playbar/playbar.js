import React, { useEffect, useState } from 'react';
import "./playbar.css";
import Playbar_Buttons from './playbar_buttons';
import { MdOutlineDynamicFeed, MdOutlineFavoriteBorder, MdLibraryMusic } from 'react-icons/md';
import { FaGripfire } from 'react-icons/fa'
import { BsFillMusicPlayerFill } from 'react-icons/bs'
import { GoSignOut } from 'react-icons/go'
import apiClient from '../../spotify';



export default function Playbar() {

    const [image, setImage] = useState(
        "https://i.pinimg.com/736x/e0/d5/d9/e0d5d99b5ac52b413d8cd5b33713b364.jpg"
      );
      useEffect(() => {
        apiClient.get("me").then((response) => {
          setImage(response.data.images[0].url);
        });
      }, []);
  return (
    <div class="playbar_container">
      <img 
        src={image}
        class="profile_img"
        alt="profile"
        />
        {/* <div>
            <Playbar_Buttons title="Feed" to="/feed" icon={<MdOutlineDynamicFeed/>}/>
            
        </div>
        <div>
            <Playbar_Buttons title="Trending" to="/trending" icon={<FaGripfire/>}/>
            
        </div> */}
        <div>
            <Playbar_Buttons title="Player" to="/player" icon={<BsFillMusicPlayerFill/>}/>
            
        </div>
        {/* <div>
            <Playbar_Buttons title="Favorites" to="/favorites" icon={<MdOutlineFavoriteBorder/>}/>
            
        </div> */}
        <div>
            <Playbar_Buttons title="Library" to="/Library" icon={<MdLibraryMusic/>}/>
            
        </div>
        <div>
            <Playbar_Buttons title="Sign_Out" to="/" icon={<GoSignOut/>}/>
        </div>
    </div>
  )
}
