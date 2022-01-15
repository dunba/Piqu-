import React from "react";
import { useInRouterContext } from "react-router-dom";
import Avatar from 'avataaars'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import '../css/centerheader.css'
import { useState } from "react";
import { Piece } from 'avataaars';

const RightSideHeader = () => {
  const [isPanelOpened, setIsPanelOpened] = useState(false)

  const handlePanel = () => {
    !isPanelOpened ? setIsPanelOpened(true) : setIsPanelOpened(false);
  }

  const date = new Date();
  const today = date.toDateString();
  const user = {
    name: "Dunba Tehinse",
    displayName: "Dunba",
    avatar: "https://dummyimage.com/50x50/000000/fff",
    online: true,
  };
  return (
    <div className="rightsidepopup" onClick={handlePanel}>
      <div className="popupheader">
        <KeyboardArrowUpIcon />
        <div>
          <Avatar
            style={{ width: '3em', height: '3em' }}
            avatarStyle='Circle'
            topType='ShortHairDreads01'
            accessoriesType='Sunglasses'
            hairColor='Black'
            facialHairType='Blank'
            clotheType='Hoodie'
            clotheColor='Gray01'
            eyeType='Default'
            eyebrowType='RaisedExcitedNatural'
            mouthType='Default'
            skinColor='Black'
          />
        </div>

        <div>Good Morning {user.displayName}</div>
        <div>Today is {today}</div>
        <NotificationsActiveIcon />
      </div>
      {isPanelOpened ?
        <div >
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
            <li>Five</li>
            <li>Six</li>
            <li>Seven</li>
            <li>Eight</li>
            <li>Nine</li>
            <li>Ten</li>
          </ul>

        </div> : ''}


    </div>

  );
};

export default RightSideHeader;
