import {React} from 'react';
import * as Styled from './progressBar.styled'

export function ProgressBar({currentTrack, currentTime, audioRef, duration}) {
    
   const onChangeCurrentTime = (newTime) => {
    audioRef.current.currentTime = newTime;
   }
    
    {console.log(currentTrack.duration_in_seconds)}  
    return (
      <Styled.ProgressInput
      
      type="range"
        min={0}
        max={duration}
        
        value={currentTime}
        step={0.01}
        onChange={(event) => onChangeCurrentTime(event.target.value)}
        $color="#b672ff"
      />
    );
  }

  