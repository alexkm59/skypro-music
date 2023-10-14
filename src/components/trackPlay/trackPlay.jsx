import React, {useState} from 'react';
import Skeleton from 'react-loading-skeleton';
import * as Styled from "./trackPlay.styled"
export function TrackPlayInfo (props){
    
    const  [isLoading, setLoading] = useState(false);
    setTimeout(()=>{
      setLoading(true)
    },4000)

return(
<Styled.TrackPlayContain>
    <Styled.TrackPlayImage>
      {isLoading ? <Styled.TrackPlaySvg alt="music"><use xlinkHref="img/icon/sprite.svg#icon-note"></use></Styled.TrackPlaySvg> : <Skeleton/> }
    </Styled.TrackPlayImage>
    <Styled.TrackPlayAuthor>
      {isLoading ? <Styled.TrackPlayAuthorLink href="http://">{props.author}</Styled.TrackPlayAuthorLink> : <Skeleton/> }
    </Styled.TrackPlayAuthor>
    <Styled.TrackPlayAlbum >
      {isLoading ? <Styled.TrackPlayAlbumLink  href="http://">{props.album}</Styled.TrackPlayAlbumLink> : <Skeleton/> }
    </Styled.TrackPlayAlbum>
</Styled.TrackPlayContain>

) 

}

