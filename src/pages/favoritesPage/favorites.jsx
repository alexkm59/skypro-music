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
import { allTrakcksLoading, favoriteTrakcksLoading, setPage } from '../../store/actions/creators';
// Страница мои треки
export const Favorites = ({isLoading, setLoading, isPlaying, setIsPlaying}) => {
   
   

const currentTrackId = useSelector(state => state.player.id);
// const [favoritTracks, setFavoritTracks] = useState ([]);
const [error, setError] = useState (null);

const {user} = useContext(userContext);
const dispatch = useDispatch(); 

dispatch (setPage({newPage: "favorite"}));
const favoriteTracks = useSelector(state => state.player.favoriteTracks);
console.log(favoriteTracks);



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
            {/* {Filter()} */}
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
               
             
              <PlayListContent  
              isLoading={isLoading}
              setLoading={setLoading}
              isPlaying = {isPlaying}
              setIsPlaying = {setIsPlaying}
              baseAllTracks={favoriteTracks}
              />
               
              
              {/* /* ---Компонент плейлиста конец */}
              
              </div>
            </div>
          </div>
          <div className="main__sidebar sidebar">
            {/* ---Компонент логирования */}
            {loginArea()}
            {/* ---Компонент логирования конец*/}
            {/* <div className="sidebar__block">
              <div className="sidebar__list"> */}
                {/* ---Компонент сайдбар начало */}
                {/* <Sidebar img="img/playlist01.png" id="1"/>
                <Sidebar img="img/playlist02.png" id="2"/>
                <Sidebar img="img/playlist03.png" id="3"/> */}
                {/* ---Компонент сайдбар конец */}
              {/* </div>
            </div> */}
          </div>
        </main>
        
            {/* {currentTrackId ? <PlayerControls isLoading={isLoading} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>:null} */}
            
        <footer className="footer"></footer>
</div>
     )
}