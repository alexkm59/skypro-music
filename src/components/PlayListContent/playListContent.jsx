import React, {useState, useEffect} from 'react';
// import '../components/PlaylistContent/playListContent.css';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as Styled from './playListContent.styled';
import {getPlayList} from '../../api';
import { useSelector } from "react-redux";
import { playerSelector } from "../../store/selectors/index";
import { useDispatch } from "react-redux";
import {nextTrack, setCurrentTrack} from "../../store/actions/creators/index"




export function PlayListContent ({isLoading, setLoading, isPlaying, setIsPlaying}) {


const [allTracks, setAllTracks] = useState ([1,2,3,4,5,6,7,8,9]);
const [error, setError] = useState (null);

const dispatch = useDispatch();

const currentTrack = useSelector((state) => state.player.currentTrack.content);
const isCurrentTrackPlaying = useSelector((state) => state.player.isPlayingTrack);



useEffect(()=>{
  setLoading(true)
  getPlayList().then((lists)=>{
    setAllTracks(lists);
    let trackIds = []
    lists.forEach(function(item, i, arr){
    trackIds.push(item.id)
  
    })
    dispatch(nextTrack(trackIds, lists))


  }).catch((error)=> setError(error.message)).finally(()=>setLoading(false));
}, []);
if(error){
  return(
    <div>
      Ошибка при получении треков: {error}
    </div>
  )
}




const handleCurrentTrackId = (oneTrack) => {
  const isPlayingTrack = true;
  dispatch (setCurrentTrack(oneTrack.id, oneTrack, isPlayingTrack));
    
}


  const setPlayItemImage = (oneTrack) => {
    
    if (isLoading){
      return <Skeleton/>;
    }

    if((isCurrentTrackPlaying == true) && (currentTrack.id == oneTrack.id)){
      return <Styled.BlinkingDot  alt="music"> </Styled.BlinkingDot>
       
    }
    if((isCurrentTrackPlaying == false) && (currentTrack.id == oneTrack.id)){
      return <Styled.PauseDot  /> 
       
    }
    else{
      return <Styled.TrackTitleSvg className="track__title-svg" alt="music"> <use xlinkHref="img/icon/sprite.svg#icon-note"></use> </Styled.TrackTitleSvg>;

    }
   
    }
    


return(
  <>
  {allTracks.map((oneTrack) => {
    
    return(
      
                  <Styled.PlaylistItem key={oneTrack.id}>
                    <Styled.PlaylistTrack  className="track">
                      <Styled.TrackTitle>
                      
                        <Styled.TrackTitleImage >
                          
{/* вызываем отрисовку значка позиции трека */}
{setPlayItemImage (oneTrack)}

                                               
                           
                          
                          
                        </Styled.TrackTitleImage>
                        <div className="track__title-text">

{/* Задаем текущий трек */}
                        <SkeletonTheme baseColor="#313131" highlightColor="#fff" height={20} width={356}>
                          {!isLoading ? <Styled.TrackTitleLink  onClick={()=> {
                            setIsPlaying (true);
                            // setCurrentTrack(oneTrack);
                            
                            handleCurrentTrackId(oneTrack);
                            
                          }}                  

                             >{oneTrack.name} <Styled.TrackTitleSpan ></Styled.TrackTitleSpan></Styled.TrackTitleLink> : <Skeleton/> }
                          </SkeletonTheme>
                        
                        </div>
                      </Styled.TrackTitle>
  
                      <Styled.TrackAuthor className="track__author">
                      <SkeletonTheme baseColor="#313131" highlightColor="#fff" enableAnimation>
                          {!isLoading ? <Styled.TrackAuthorLink  href="http://">{oneTrack.author}</Styled.TrackAuthorLink> : <Skeleton height={20} width={272}/> }
                          </SkeletonTheme>
                           
                      </Styled.TrackAuthor>
                      <Styled.TrackAlbum >
                      <SkeletonTheme baseColor="#313131" highlightColor="#fff" height={20} width={250}>
                          {!isLoading ? <Styled.TrackAlbumLink className="track__album-link" href="http://">{oneTrack.album}</Styled.TrackAlbumLink> : <Skeleton/> }
                          </SkeletonTheme>
                        
                      </Styled.TrackAlbum>
                      <div className="track__time">
                        <Styled.TrackTimeSvg className="track__time-svg" alt="time">
                          <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                        </Styled.TrackTimeSvg>
                        
                        <Styled.TrackTimeText className="track__time-text"> {!isLoading ? ((oneTrack.duration_in_seconds/60).toFixed(2)) : '0.00'}</Styled.TrackTimeText>
                     
                      </div>
                    </Styled.PlaylistTrack>
                  </Styled.PlaylistItem>
  
  )
  
  })}
 </>
)
 

}

