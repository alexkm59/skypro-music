import React from 'react';
import * as Styled from "./volumeContent.styled"
import { useSelector } from "react-redux";
import { playerSelector } from "../../store/selectors/index";  

export function VolumeContent({volume, setVolume}){
  
  // const currentTrack = useSelector(playerSelector);
  // console.log(`---> ${currentTrack.id}`);

  const currentTrackId = useSelector(state => state.player.id);
 



  // const currentTrackId = useSelector(state => state.player.currentTrack.content.id);
  // console.log(currentTrackId);

return(
<>
{(currentTrackId) ? (
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
        min={0}
        max={1}

        value={volume}
        step={0.01}
        onChange={(event) => setVolume(event.target.value)}
        
      />
    </Styled.VolumeProgress>
</Styled.VolumeContent>

  ) : null}

</>
    
)

}