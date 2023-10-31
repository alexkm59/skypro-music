import {React, useState} from 'react';
// import '../components/PlaylistContent/playListContent.css';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as Styled from './playListContent.styled';

export function PlayListContent ({trackName, trackAuthor, album, trackTime, oneTrack, setCurrentTrack}) {



const  [isLoading, setLoading] = useState(false);
setTimeout(()=>{
  setLoading(true)
},4000)
  return(
                <Styled.PlaylistItem>
                  <Styled.PlaylistTrack className="track">
                    <Styled.TrackTitle>
                    
                      <Styled.TrackTitleImage >
                        {isLoading ? <Styled.TrackTitleSvg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </Styled.TrackTitleSvg> : <Skeleton/> }
                        
                      </Styled.TrackTitleImage>
                      <div className="track__title-text">
                      <SkeletonTheme baseColor="#313131" highlightColor="#fff" height={20} width={356}>
                        {isLoading ? <Styled.TrackTitleLink oneClick = {()=> setCurrentTrack(oneTrack)}>{trackName} <Styled.TrackTitleSpan ></Styled.TrackTitleSpan></Styled.TrackTitleLink> : <Skeleton/> }
                        </SkeletonTheme>
                      </div>
                    </Styled.TrackTitle>

                    <Styled.TrackAuthor className="track__author">
                    <SkeletonTheme baseColor="#313131" highlightColor="#fff" height={20} width={272}>
                        {isLoading ? <Styled.TrackAuthorLink  href="http://">{trackAuthor}</Styled.TrackAuthorLink> : <Skeleton/> }
                        </SkeletonTheme>
                         
                    </Styled.TrackAuthor>
                    <Styled.TrackAlbum >
                    <SkeletonTheme baseColor="#313131" highlightColor="#fff" height={20} width={250}>
                        {isLoading ? <Styled.TrackAlbumLink className="track__album-link" href="http://">{album}</Styled.TrackAlbumLink> : <Skeleton/> }
                        </SkeletonTheme>
                      
                    </Styled.TrackAlbum>
                    <div className="track__time">
                      <Styled.TrackTimeSvg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </Styled.TrackTimeSvg>
                      
                      <Styled.TrackTimeText className="track__time-text"> {isLoading ? ((trackTime/60).toFixed(2)) : '0.00'}</Styled.TrackTimeText>
                   
                    </div>
                  </Styled.PlaylistTrack>
                </Styled.PlaylistItem>

)

}

