import React, {useState, useEffect} from 'react';
// import '../components/PlaylistContent/playListContent.css';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as Styled from './playListContent.styled';
import {getPlayList} from '../../api'

export function PlayListContent ({isLoading, setLoading, setCurrentTrack}) {


const [allTracks, setAllTracks] = useState ([1,2,3,4,5,6,7,8,9]);
const [error, setError] = useState (null);

useEffect(()=>{
  setLoading(true)
  getPlayList().then((lists)=>{
    setAllTracks(lists);
    
  }).catch((error)=> setError(error.message)).finally(()=>setLoading(false));
}, []);
if(error){
  return(
    <div>
      Ошибка при получении треков: {error}
    </div>
  )
}
console.log({setLoading});
return(
  <>
  {allTracks.map((oneTrack) => {
    
    return(
                  <Styled.PlaylistItem key={oneTrack.id}>
                    <Styled.PlaylistTrack className="track">
                      <Styled.TrackTitle>
                      
                        <Styled.TrackTitleImage >
                          {!isLoading ? <Styled.TrackTitleSvg className="track__title-svg" alt="music">
                            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                          </Styled.TrackTitleSvg> : <Skeleton/> }
                          
                        </Styled.TrackTitleImage>
                        <div className="track__title-text">

                        <SkeletonTheme baseColor="#313131" highlightColor="#fff" height={20} width={356}>
                          {!isLoading ? <Styled.TrackTitleLink onClick={()=> setCurrentTrack(oneTrack)} >{oneTrack.name} <Styled.TrackTitleSpan ></Styled.TrackTitleSpan></Styled.TrackTitleLink> : <Skeleton/> }
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

