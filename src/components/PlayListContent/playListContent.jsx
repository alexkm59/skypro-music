import React, {useState, useEffect} from 'react';
// import '../components/PlaylistContent/playListContent.css';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as Styled from './playListContent.styled';
import {getFavoriteTracks, getPlayList, likeTrackApi, deleteLikeTrackApi} from '../../api';
import { useSelector } from "react-redux";
import { playerSelector } from "../../store/selectors/index";
import { useDispatch } from "react-redux";
import {favoriteTrakcksLoading, nextTrack, setCurrentTrack} from "../../store/actions/creators/index"
import { useNavigate } from 'react-router-dom';




export function PlayListContent ({isLoading, setLoading, isPlaying, setIsPlaying, baseAllTracks}) {

// const [allTracks, setAllTracks] = useState ([1,2,3,4,5,6,7,8,9]);
// const [error, setError] = useState (null);
const navigate = useNavigate();
const dispatch = useDispatch();

const currentTrack = useSelector((state) => state.player.currentTrack.content);
const isCurrentTrackPlaying = useSelector((state) => state.player.isPlayingTrack);
// const baseAllTracks = useSelector((state) => state.player.tracks);
const favoriteTracks = useSelector((state) => state.player.favoriteTracks);
const userAccessToken = useSelector((state) => state.player.accessToken);


const currentPage = useSelector((state) => state.player.currentPage);
const [allTracks, setAllTracks] = useState ([1,2,3,4,5,6,7,8,9]);
let currentTracksList = [];



const handleCurrentTrackId = (oneTrack) => {
  const isPlayingTrack = true;
  // dispatch (setCurrentTrack(oneTrack.id, oneTrack, isPlayingTrack, allTracks));
  dispatch (setCurrentTrack(oneTrack.id, oneTrack, isPlayingTrack, baseAllTracks));
}


  const setPlayItemImage = (oneTrack) => {
    

    if (isLoading){
      return <Skeleton/>;
    }

    if((isCurrentTrackPlaying == true) && (currentTrack?.id == oneTrack?.id)){
      return <Styled.BlinkingDot  alt="music"> </Styled.BlinkingDot>
       
    }
    if((isCurrentTrackPlaying == false) && (currentTrack?.id == oneTrack?.id)){
      return <Styled.PauseDot  /> 
       
    }
    else{
      return <Styled.TrackTitleSvg className="track__title-svg" alt="music"> <use xlinkHref="img/icon/sprite.svg#icon-note"></use> </Styled.TrackTitleSvg>;

    }
   
    }

    const getFavoriteTracksList = () =>{
      getFavoriteTracks(userAccessToken)
      .then((response) => {
        if(response.status === 401){
            navigate("/login")         
            return
        }
        else{
            
            return response.json()
        }

    })
        .then((list) => {
        //   setFavoritTracks(lists)
        console.log(`my favorite tracks ${JSON.stringify(list)}`);
          dispatch(favoriteTrakcksLoading({allfavoriteTracks: list}));
        
      })
    }

    
    
const handleLike = (oneTrackId) => {

  likeTrackApi(userAccessToken, oneTrackId)
  .then((response) => {
    if(response.status === 401){
        navigate("/login")         
        return
    }
    else{
        
        return response.json()
    }

})
  .then(getFavoriteTracksList)


}

const handleDislike = (oneTrackId) => {

  deleteLikeTrackApi(userAccessToken, oneTrackId)
  .then((response) => {
    if(response.status === 401){
        navigate("/login")         
        return
    }
    else{
        
        return response.json()
    }
})
  .then(getFavoriteTracksList)
//   .then((response) => {  
//     response.json()
//     console.log(response.json());
//   })
//   .then((list) => {
//     //   setFavoritTracks(lists)
//     console.log(`my favorite tracks ${JSON.stringify(list)}`);
//       dispatch(favoriteTrakcksLoading({allfavoriteTracks: list}));

//  })
}
const toggleLike = (oneTrackId) =>{
  let favoriteTracksId = []
  for (let i = 0; i < favoriteTracks.length; i++) {
    favoriteTracksId.push(favoriteTracks[i].id)
  }
// includes возвращает true или false
  const isLiked = favoriteTracksId.includes(oneTrackId);

   isLiked ? handleDislike(oneTrackId) : handleLike(oneTrackId);
}

// проверяем лайкнут или нет трек для отрисовки значка лайка
const likedTrackCheck =(oneTrackId) =>{
  let favoriteTracksId = []
  for (let i = 0; i < favoriteTracks.length; i++) {
    favoriteTracksId.push(favoriteTracks[i].id)
  }
  const isLikedId = favoriteTracksId.includes(oneTrackId);
  return isLikedId;
}





return(
  <>
  {
    
  baseAllTracks.map((oneTrack) => {
    
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
                        <Styled.TrackTimeSvg className="track__time-svg" alt="time" onClick={()=> {
                            toggleLike(oneTrack.id);
                            
                          }}>
                           
                          {likedTrackCheck(oneTrack.id) ? (<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 16 14" fill="none">
  <path d="M8.02203 12.7031C13.9025 9.20312 16.9678 3.91234 13.6132 1.47046C11.413 -0.13111 8.95392 1.14488 8.02203 1.95884H8.00052H8.00046H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00046H8.00052H8.02203Z" fill="#B672FF"/>
  <path d="M8.00046 1.95884H8.02203C8.95392 1.14488 11.413 -0.13111 13.6132 1.47046C16.9678 3.91234 13.9025 9.20312 8.02203 12.7031H8.00046M8.00052 1.95884H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00052" stroke="#B672FF"/>
</svg>):(<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 14" fill="none">
  <path d="M8.00046 1.95884H8.02203C8.95392 1.14488 11.413 -0.13111 13.6132 1.47046C16.9678 3.91234 13.9025 9.20312 8.02203 12.7031H8.00046M8.00052 1.95884H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00052" stroke="#ACACAC"/>
</svg>)}

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

