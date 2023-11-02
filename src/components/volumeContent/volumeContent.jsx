import React from 'react';
import * as Styled from "./volumeContent.styled"
export function VolumeContent({currentTrack}){
return(
<>
{currentTrack ? (
    <Styled.VolumeContent>
    <Styled.VolumeImage>
      <Styled.VolumeSvg alt="volume">
        <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
      </Styled.VolumeSvg>
    </Styled.VolumeImage>
    <Styled.VolumeProgress className="_btn">
      <Styled.VolumeProgressLine
        className="_btn"
        type="range"
        name="range"
      />
    </Styled.VolumeProgress>
</Styled.VolumeContent>

  ) : null}

</>
    
)

}