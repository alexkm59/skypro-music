
import {React, useEffect, useState} from 'react';
import {PlayerControls} from "../../components/Player/player";
import {navMenu} from '../../components/navigation/navigation';
import {search} from '../../components/search/search';
import {Filter} from '../../components/filter/filter';
import {loginArea} from '../../components/LoginArea/loginArea';
// import {VolumeContent} from '../../components/volumeContent/volumeContent';
import {PlayListContent} from '../../components/PlayListContent/playListContent';
import {Sidebar} from '../../components/sidebar/sidebar';
// import {TrackPlayInfo} from '../../components/trackPlay/trackPlay';
// import{ProgressBar} from "../../components/ProgressBar/progressBar"
import { useDispatch, useSelector } from "react-redux";
import { playerSelector } from "../../store/selectors/index";
import { getPlayList } from '../../api';
import { allTrakcksLoading, filtredTrakcksLoading, setCurrentTrack, setPage } from '../../store/actions/creators';

// Функция фильтра для Сначала старые
const sortFunctionOlfFirst =(Arr)=>{
  let sortArray1 = [...Arr];
  let sortArray2 = [];
  sortArray2 = sortArray1.sort(function (a, b){
      if(a.release_date && b.release_date){
        return ((a.release_date).slice(0,4) - (b.release_date).slice(0,4));
      }    
    })
return sortArray2;
}

// Функция фильтра для Сначала новые
const sortFunctionNewFirst =(Arr)=>{
  let sortArray1 = [...Arr];
  let sortArray2 = [];
  sortArray2 = sortArray1.sort(function (a, b){
      if(a.release_date && b.release_date){
        return ((b.release_date).slice(0,4) - (a.release_date).slice(0,4));
      }    
    })
return sortArray2;
}


export const MinePage =({isLoading, setLoading, isPlaying, setIsPlaying}) => {
const dispatch = useDispatch();  
const [allTracks, setAllTracks] = useState ([1,2,3,4,5,6,7,8,9]);
const [error, setError] = useState (null);
const isAuthorFilterActive = useSelector(state => state.player.isAuthorFilterActive);
const isGenreFilterActive = useSelector(state => state.player.isGenreFilterActive);
const sortFilter = useSelector(state => state.player.sortFilter);
const isSerchActive = useSelector((state) => state.player.isSearchActive);
const searchTracks = useSelector((state)=>state.player.searchTracks);

dispatch (setPage({newPage: "mine"}));

useEffect(()=>{
  setLoading(true)
  getPlayList().then((lists)=>{
    setAllTracks(lists);
    dispatch (allTrakcksLoading({allTracks: lists}));
    
  }).catch((error)=> setError(error.message)).finally(()=>setLoading(false));
}, []);
if(error){
  return(
    <div>
      Ошибка при получении треков: {error}
    </div>
  )
}

let baseAllTracks = []

if(isAuthorFilterActive || isGenreFilterActive){
  //  baseAllTracks = useSelector(state => state.player.filtredTracks);
   const checkAllTracks = useSelector(state => state.player.filtredTracks);
  
   if (isSerchActive){
        
    console.log(`зашли в поиск по поиску`);
    let NewAllTracks = [];
    console.log(searchTracks.length);
      
    if(searchTracks.length > 0){

      for (let i = 0; i < searchTracks.length; i++) {
        for(let j = 0; j <  checkAllTracks.length; j++){
          if( checkAllTracks[j].id === searchTracks[i].id){
           NewAllTracks.push(searchTracks[i]);
          }
        }
      }
      baseAllTracks = NewAllTracks;
    }else{
      baseAllTracks = [];
    }

    console.log(NewAllTracks);
    console.log(baseAllTracks);
      
  
      if(sortFilter == "Сначала старые"){
        baseAllTracks = sortFunctionOlfFirst(NewAllTracks);
      }
      if(sortFilter == "Сначала новые"){
        baseAllTracks = sortFunctionNewFirst(NewAllTracks);
      }

}
else{
  if(sortFilter == "По-умолчанию"){
    baseAllTracks = checkAllTracks;
  }
  
  if(sortFilter == "Сначала старые"){
    baseAllTracks = sortFunctionOlfFirst(checkAllTracks);
  }
  if(sortFilter == "Сначала новые"){
    baseAllTracks = sortFunctionNewFirst(checkAllTracks);
  }

}


  }
else{
  const checkAllTracks = useSelector(state => state.player.tracks);
  if (isSerchActive){
        
          console.log(`зашли в поиск по поиску без фильтров`);
          let NewAllTracks = [];
          console.log(searchTracks.length);
            
          if(searchTracks.length > 0){

            for (let i = 0; i < searchTracks.length; i++) {
              for(let j = 0; j <  checkAllTracks.length; j++){
                if( checkAllTracks[j].id === searchTracks[i].id){
                 NewAllTracks.push(searchTracks[i]);
                }
              }
            }
            baseAllTracks = NewAllTracks;
          }else{
            baseAllTracks = [];
          }
    
          console.log(NewAllTracks);
          console.log(baseAllTracks);
            
        
            if(sortFilter == "Сначала старые"){
              baseAllTracks = sortFunctionOlfFirst(NewAllTracks);
            }
            if(sortFilter == "Сначала новые"){
              baseAllTracks = sortFunctionNewFirst(NewAllTracks);
            }

      }
      else{
        if(sortFilter == "По-умолчанию"){
          baseAllTracks = checkAllTracks;
        }
        
        if(sortFilter == "Сначала старые"){
          baseAllTracks = sortFunctionOlfFirst(checkAllTracks);
        }
        if(sortFilter == "Сначала новые"){
          baseAllTracks = sortFunctionNewFirst(checkAllTracks);
        }

      }


  

      

}



const currentTrackId = useSelector(state => state.player.id);

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
            
            <h2 className="centerblock__h2">Треки</h2>
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
               
               {/* {allTracks.map((oneTrack) => {
               return( */}
              <PlayListContent 
              isLoading={isLoading}
              setLoading={setLoading}
              isPlaying = {isPlaying}
              setIsPlaying = {setIsPlaying}
              baseAllTracks={baseAllTracks}

              />
              {/* )
              })} */}

               {/* <PlayListContent trackName="Guilt" trackAuthor="Nero" album="Weloome Reality" trackTime="4.44" />
               <PlayListContent trackName="Elektro" trackAuthor="Dynoro, Outwork, Mr. Gee" album="Elektro" trackTime="2.22" />
               <PlayListContent trackName="I’m Fire" trackAuthor="Ali Bakgor" album="I’m Fire" trackTime="2.22" />
               <PlayListContent trackName="Non Stop" trackAuthor="Стоункат, Psychopath" album="Weloome Reality" trackTime="4.12" />
               <PlayListContent trackName="Run Run" trackAuthor="Jaded, Will Clarke, AR/CO" album="Run Run" trackTime="2.54" />
               <PlayListContent trackName="Eyes on Fire" trackAuthor="Blue Foundation, Zeds Dead" album="Eyes on Fire" trackTime="5.20" />
               <PlayListContent trackName="Mucho Bien" trackAuthor="HYBIT, Mr. Black, Offer Nissim, Hi Profile" album="Mucho Bien" trackTime="3.41" />
               <PlayListContent trackName="Knives n Cherries" trackAuthor="minthaze" album="Captivating" trackTime="1.48" />
               <PlayListContent trackName="How Deep Is Your Love" trackAuthor="Calvin Harris, Disciples" album="How Deep Is Your Love" trackTime="3.32" />
               <PlayListContent trackName="Morena" trackAuthor="Tom Boxer" album="Soundz Made in Romania" trackTime="3.36" /> */}
              {/* ---Компонент плейлиста конец*/}
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
                {/* <Sidebar img="img/playlist01.png" id="1"/>
                <Sidebar img="img/playlist02.png" id="2"/>
                <Sidebar img="img/playlist03.png" id="3"/> */}

                <Sidebar src="https://skypro-web-developer.github.io/webdev-react-skypro-music-examples/img/playlist-classic.png" id="1"/>
                <Sidebar src="https://skypro-web-developer.github.io/webdev-react-skypro-music-examples/img/playlist-electro.png" id="2"/>
                <Sidebar src="https://skypro-web-developer.github.io/webdev-react-skypro-music-examples/img/playlist-rock.png" id="3"/>
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