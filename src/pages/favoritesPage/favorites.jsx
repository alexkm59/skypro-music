// import React from 'react';
// import * as S from '../not-found/notFound.styled';

// export const Favorites = ()  => {
// return (
// <S.notFoundPage>
//     <h1>Favorites Page</h1>
// </S.notFoundPage>
// )
// }

import {React, useContext, useEffect, useState} from 'react';
import {PlayerControls} from "../../components/Player/player";
import {navMenu} from '../../components/navigation/navigation';
import {search} from '../../components/search/search';
import {Filter} from '../../components/filter/filter';
import {loginArea} from '../../components/LoginArea/loginArea';

import {PlayListContent} from '../../components/PlayListContent/playListContent';
import {Sidebar} from '../../components/sidebar/sidebar';

import { useDispatch, useSelector } from "react-redux";
import { playerSelector } from "../../store/selectors/index";
import { getFavoriteTracks, getTokenAPI } from '../../api';
import { userContext } from '../../Context/auth';
import { allTrakcksLoading, setPage } from '../../store/actions/creators';
// Страница мои треки
export const Favorites = ({isLoading, setLoading, isPlaying, setIsPlaying}) => {
   
   

const currentTrackId = useSelector(state => state.player.id);
const [favoritTracks, setFavoritTracks] = useState ([]);
const [error, setError] = useState (null);

const {user} = useContext(userContext);
const dispatch = useDispatch(); 

dispatch (setPage({newPage: "favorite"}));

useEffect(()=>{
  setLoading(true)
  console.log(user);
  getTokenAPI({userEmail: user.username, userPassword: user.username})
  .then((response)=>{
      console.log(`token ${response.access}`);
      getFavoriteTracks(response.access)
      .then((lists)=>{
        setFavoritTracks(lists)
      console.log(`my favorite tracks ${lists}`);
      // dispatch (allTrakcksLoading({allTracks: lists}));
      
    })
  })

  .catch((error)=> setError(error.message)).finally(()=>setLoading(false));
}, []);
if(error){
  return(
    <div>
      Ошибка при получении треков: {error}
    </div>
  )
}


     return (


<div className="container">
      
        <main className="main">
          {/* ---Компонент навигации--- */}
          {navMenu()}
          {/* ---Компонент навигации конец--- */}
          <div className="main__centerblock centerblock">
            {/* ---Компонент поиска */}
            {search()}
            {/* ---Компонент поиска конец*/}
            
            <h2 className="centerblock__h2">Мои треки</h2>
            {/* ---Компонент фильтра  */}
            {Filter()}
            {/* ---Компонент фильтра конец */}
            <div className="centerblock__content">
              <div className="content__title playlist-title">
                <div className="playlist-title__col col01">Трек</div>
                <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                <div className="playlist-title__col col03">АЛЬБОМ</div>
                <div className="playlist-title__col col04">
                  <svg className="playlist-title__svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                  </svg>
                </div>
              </div>
              {/* ---Компонент плейлиста */}
              <div className="content__playlist playlist">
               
             
              {/* <PlayListContent  /> */}
               
              
              {/* /* ---Компонент плейлиста конец */}
              
              </div>
            </div>
          </div>
          <div className="main__sidebar sidebar">
            {/* ---Компонент логирования */}
            {loginArea()}
            {/* ---Компонент логирования конец*/}
            <div className="sidebar__block">
              <div className="sidebar__list">
                {/* ---Компонент сайдбар начало */}
                <Sidebar img="img/playlist01.png" id="1"/>
                <Sidebar img="img/playlist02.png" id="2"/>
                <Sidebar img="img/playlist03.png" id="3"/>
                {/* ---Компонент сайдбар конец */}
              </div>
            </div>
          </div>
        </main>
        
            {/* {currentTrackId ? <PlayerControls isLoading={isLoading} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>:null} */}
            
        <footer className="footer"></footer>
</div>
     )
}