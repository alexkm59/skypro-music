
import {React} from 'react';
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
import { useSelector } from "react-redux";
import { playerSelector } from "../../store/selectors/index";

export const MinePage =({isLoading, setLoading, isPlaying, setIsPlaying}) => {
   
const currentTrack = useSelector(playerSelector);


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
                <Sidebar img="img/playlist01.png" id="1"/>
                <Sidebar img="img/playlist02.png" id="2"/>
                <Sidebar img="img/playlist03.png" id="3"/>
                {/* ---Компонент сайдбар конец */}
              </div>
            </div>
          </div>
        </main>
        
            {currentTrack ? <PlayerControls isLoading={isLoading} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>:null}
            
        <footer className="footer"></footer>
</div>
     )
}