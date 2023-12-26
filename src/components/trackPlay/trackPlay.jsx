import React from 'react';
import Skeleton from 'react-loading-skeleton';
import * as Styled from "./trackPlay.styled"
import { useSelector } from "react-redux";

export function TrackPlayInfo ({isLoading}){
    
  const currentTrack = useSelector((state) => state.player.currentTrack.content);    


return(
  <>
  {currentTrack ? (
    <Styled.TrackPlayContain>
    <Styled.TrackPlayImage>
      {!isLoading ? <Styled.TrackPlaySvg alt="music"><use xlinkHref="img/icon/sprite.svg#icon-note"></use></Styled.TrackPlaySvg> : <Skeleton/> }
    </Styled.TrackPlayImage>
    <Styled.TrackPlayAuthor>
      {!isLoading ? <Styled.TrackPlayAuthorLink href="http://">{currentTrack.author}</Styled.TrackPlayAuthorLink> : <Skeleton/> }
    </Styled.TrackPlayAuthor>
    <Styled.TrackPlayAlbum >
      {!isLoading ? <Styled.TrackPlayAlbumLink  href="http://">{currentTrack.album}</Styled.TrackPlayAlbumLink> : <Skeleton/> }
    </Styled.TrackPlayAlbum>
</Styled.TrackPlayContain>

  ) : null}
  
  </>

) 

}

