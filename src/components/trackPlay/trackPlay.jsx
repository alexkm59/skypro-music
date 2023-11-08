import React from 'react';
import Skeleton from 'react-loading-skeleton';
import * as Styled from "./trackPlay.styled"
export function TrackPlayInfo ({currentTrack, isLoading}){
    
    // const  [isLoading, setLoading] = useState(false);
    // setTimeout(()=>{
    //   setLoading(true)
    // },4000)


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

