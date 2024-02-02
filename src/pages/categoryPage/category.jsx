import React from 'react';
import * as S from '../not-found/notFound.styled';
import { useParams } from "react-router-dom";
import { loginArea } from '../../components/LoginArea/loginArea';
import { PlayListContent } from '../../components/PlayListContent/playListContent';
import { navMenu } from '../../components/navigation/navigation';
import { search } from '../../components/search/search';
import { Filter } from '../../components/filter/filter';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../store/actions/creators';

export const Category = ({isLoading, setLoading, isPlaying, setIsPlaying})  => {
 const params = useParams();  
    
 const dispatch = useDispatch(); 

 dispatch (setPage({newPage: "category"}));
 const allTracks = useSelector(state => state.player.tracks);

 let title = null;
 const categoryNumber = Number(params.id);
 let categoryTracks = []
 switch (categoryNumber) {
    case 1: {
            title = "Классическая музыка";
            
            for (let i = 0; i < allTracks.length; i++) {
                if (allTracks[i].genre == title) {
                    categoryTracks.push(allTracks[i])
                }
            }
            console.log(categoryTracks);
            // return categoryTracks;
            break;
        }

       
      case 2: {
        title = "Электронная музыка";
        for (let i = 0; i < allTracks.length; i++) {
            if (allTracks[i].genre == title) {
                categoryTracks.push(allTracks[i])
            }
        }
        // return categoryTracks;
        break;
      }
        case 3: {
        title = "Рок музыка";

        for (let i = 0; i < allTracks.length; i++) {
            if (allTracks[i].genre == title) {
                categoryTracks.push(allTracks[i])
            }
        }
        // return categoryTracks;
        break;
        }  
    }
 
    const hederText = title;
   const categoryTracksList = categoryTracks;
   console.log(categoryTracksList);

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
            
            <h2 className="centerblock__h2">{hederText}</h2>
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
              baseAllTracks={categoryTracksList}
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
              <div className="sidebar__list">
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