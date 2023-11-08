import {React, useState, useRef, useEffect} from 'react';
import * as Styled from './player.styled';
import {VolumeContent} from '../volumeContent/volumeContent';
import {ProgressBar} from '../ProgressBar/progressBar';
import {TrackPlayInfo} from '../trackPlay/trackPlay';


export function PlayerControls({currentTrack, isLoading}) {

    // const [isPaused, setIsPaused] = useState (false);
    const [isRepeated, setIsRepeated] = useState (false);
    const[isShuffled, setIsShuffled] = useState (false);
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.4);

    useEffect (() =>{
    const ref = audioRef.current;
    const timeUpdateEvent = () => {
        if(ref.currentTime && ref.duration) {
            setCurrentTime(ref.currentTime);
            setDuration(ref.duration);
        }
        else{
            setCurrentTime(0);
            setDuration(0);
        }
    
    }
   
    ref.addEventListener("timeupdate", timeUpdateEvent);
    return () => {
        ref.removeEventListener("timeupdate", timeUpdateEvent);
    }
    },[])

    useEffect (() =>{
        audioRef.current.volume = volume
},[volume])
    


const setRepeat = ()=>{
    if (!isRepeated){
        setIsRepeated(true);   
    }
    else{
        setIsRepeated(false);
    }
}

const setShuffle = ()=>{
    if (!isShuffled){
        setIsShuffled(true);   
    }
    else{
        setIsShuffled(false);
    }
}

const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = isPlaying ? handleStop : handleStart;

 

  
    return (
        
        <div className="bar">
          <div className="bar__content">
             <ProgressBar audioRef={audioRef} duration={duration} currentTrack={currentTrack} currentTime={currentTime}/>
            <div className="bar__player-block">
              <div className="bar__player player">
                {/* --- Замена плеера на компонент ---- */}
               
                <audio className='audio' controls ref={audioRef} src={currentTrack.track_file} autoPlay={true} loop={isRepeated} >
            <source  type="audio/mpeg" />
          </audio>

            <Styled.PlayerControls>
            <Styled.PlayerBtn btnPrev={true} >
                <Styled.PlayerBtnPrevSvg alt="prev">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </Styled.PlayerBtnPrevSvg>
            </Styled.PlayerBtn>


            <Styled.PlayerBtn btnPrev={true} onClick={()=>togglePlay()} className="_btn">
                <Styled.PlayerBtnPlaySvg  alt="play" >
                    {/* <use xlinkHref="img/icon/sprite.svg#icon-play"></use> */}
                    {isPlaying ? (<svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19" fill="none">
                    <rect width="5" height="19" fill="#D9D9D9"/>
                    <rect x="10" width="5" height="19" fill="#D9D9D9"/>
                    </svg>):(<svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                    <path d="M15 10L-1.01012e-06 0.47372L-1.84293e-06 19.5263L15 10Z" fill="#D9D9D9"/>
                                    </svg>)}
                    
                </Styled.PlayerBtnPlaySvg>
            </Styled.PlayerBtn>


            <Styled.PlayerBtnNext >
                <Styled.PlayerBtnNextSvg alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </Styled.PlayerBtnNextSvg>
            </Styled.PlayerBtnNext>
            <Styled.PlayerBtn btnPrev={true} onClick={()=>setRepeat()} className="_btn-icon">
                <Styled.PlayerBtnRepeatSvg alt="repeat">
                    {/* <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use> */}
                    {isRepeated ? (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 20 18" fill="none" >
                    <path d="M10 3L5 0.113249V5.88675L10 3ZM7 14.5C3.96243 14.5 1.5 12.0376 1.5 9H0.5C0.5 12.5899 3.41015 15.5 7 15.5V14.5ZM1.5 9C1.5 5.96243 3.96243 3.5 7 3.5V2.5C3.41015 2.5 0.5 5.41015 0.5 9H1.5Z" fill="white" stroke="#fff"/>
                    <path d="M10 15L15 17.8868V12.1132L10 15ZM13 3.5C16.0376 3.5 18.5 5.96243 18.5 9H19.5C19.5 5.41015 16.5899 2.5 13 2.5V3.5ZM18.5 9C18.5 12.0376 16.0376 14.5 13 14.5V15.5C16.5899 15.5 19.5 12.5899 19.5 9H18.5Z" fill="white" stroke="#fff"/>
                    </svg>):(<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 20 18" fill="none">
                    <path d="M10 3L5 0.113249V5.88675L10 3ZM7 14.5C3.96243 14.5 1.5 12.0376 1.5 9H0.5C0.5 12.5899 3.41015 15.5 7 15.5V14.5ZM1.5 9C1.5 5.96243 3.96243 3.5 7 3.5V2.5C3.41015 2.5 0.5 5.41015 0.5 9H1.5Z" fill="#696969"/>
                    <path d="M10 15L15 17.8868V12.1132L10 15ZM13 3.5C16.0376 3.5 18.5 5.96243 18.5 9H19.5C19.5 5.41015 16.5899 2.5 13 2.5V3.5ZM18.5 9C18.5 12.0376 16.0376 14.5 13 14.5V15.5C16.5899 15.5 19.5 12.5899 19.5 9H18.5Z" fill="#696969"/>
                    </svg>)}
                    
                </Styled.PlayerBtnRepeatSvg>
            </Styled.PlayerBtn>
            <Styled.PlayerBtnShuffle className="_btn-icon">
                <Styled.PlayerBtnRepeatSvg onClick={()=>setShuffle()} alt="shuffle">
                    {/* <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use> */}
                    {isShuffled ? (<svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 19 18" fill="none">
  <path d="M19 15L14 12.1132V17.8868L19 15ZM9.66317 12.0833L9.20863 12.2916L9.66317 12.0833ZM6.83683 5.91673L6.3823 6.12505L6.83683 5.91673ZM0 3.5H2.29151V2.5H0V3.5ZM6.3823 6.12505L9.20863 12.2916L10.1177 11.8749L7.29137 5.7084L6.3823 6.12505ZM14.2085 15.5H14.5V14.5H14.2085V15.5ZM9.20863 12.2916C10.1047 14.2466 12.0579 15.5 14.2085 15.5V14.5C12.449 14.5 10.8508 13.4745 10.1177 11.8749L9.20863 12.2916ZM2.29151 3.5C4.05105 3.5 5.64918 4.52552 6.3823 6.12505L7.29137 5.7084C6.39533 3.75341 4.44205 2.5 2.29151 2.5V3.5Z" fill="#fff"/>
  <path d="M19 3L14 5.88675V0.113249L19 3ZM9.66317 5.91673L9.20863 5.7084L9.66317 5.91673ZM6.83683 12.0833L6.3823 11.8749L6.83683 12.0833ZM0 14.5H2.29151V15.5H0V14.5ZM6.3823 11.8749L9.20863 5.7084L10.1177 6.12505L7.29137 12.2916L6.3823 11.8749ZM14.2085 2.5H14.5V3.5H14.2085V2.5ZM9.20863 5.7084C10.1047 3.75341 12.0579 2.5 14.2085 2.5V3.5C12.449 3.5 10.8508 4.52552 10.1177 6.12505L9.20863 5.7084ZM2.29151 14.5C4.05105 14.5 5.64918 13.4745 6.3823 11.8749L7.29137 12.2916C6.39533 14.2466 4.44205 15.5 2.29151 15.5V14.5Z" fill="#fff"/>
</svg>):(<svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 19 18" fill="none">
  <path d="M19 15L14 12.1132V17.8868L19 15ZM9.66317 12.0833L9.20863 12.2916L9.66317 12.0833ZM6.83683 5.91673L6.3823 6.12505L6.83683 5.91673ZM0 3.5H2.29151V2.5H0V3.5ZM6.3823 6.12505L9.20863 12.2916L10.1177 11.8749L7.29137 5.7084L6.3823 6.12505ZM14.2085 15.5H14.5V14.5H14.2085V15.5ZM9.20863 12.2916C10.1047 14.2466 12.0579 15.5 14.2085 15.5V14.5C12.449 14.5 10.8508 13.4745 10.1177 11.8749L9.20863 12.2916ZM2.29151 3.5C4.05105 3.5 5.64918 4.52552 6.3823 6.12505L7.29137 5.7084C6.39533 3.75341 4.44205 2.5 2.29151 2.5V3.5Z" fill="#696969"/>
  <path d="M19 3L14 5.88675V0.113249L19 3ZM9.66317 5.91673L9.20863 5.7084L9.66317 5.91673ZM6.83683 12.0833L6.3823 11.8749L6.83683 12.0833ZM0 14.5H2.29151V15.5H0V14.5ZM6.3823 11.8749L9.20863 5.7084L10.1177 6.12505L7.29137 12.2916L6.3823 11.8749ZM14.2085 2.5H14.5V3.5H14.2085V2.5ZM9.20863 5.7084C10.1047 3.75341 12.0579 2.5 14.2085 2.5V3.5C12.449 3.5 10.8508 4.52552 10.1177 6.12505L9.20863 5.7084ZM2.29151 14.5C4.05105 14.5 5.64918 13.4745 6.3823 11.8749L7.29137 12.2916C6.39533 14.2466 4.44205 15.5 2.29151 15.5V14.5Z" fill="#696969"/>
</svg>)}
                </Styled.PlayerBtnRepeatSvg>
            </Styled.PlayerBtnShuffle>
        </Styled.PlayerControls>
                  {/* {PlayerControls}                */}
                {/*--- Замена плеера конец ----*/}
                
                <div className="player__track-play track-play">
                  {/* --- Компонент проигрываемого трека начало */}
                  <TrackPlayInfo
                  currentTrack={currentTrack}
                  isLoading={isLoading}
                  // author="Ты та..." album="Баста" 
                  />
                  
                  {/* <div className="track-play__contain">
                  
                  
                {/* --- Компонент проигрываемого трека конец */}
                 
                  <div className="track-play__like-dis">
                  <div className="track-play__like _btn-icon">
                    <svg className="track-play__like-svg" alt="like">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                  </div>
                  <div className="track-play__dislike _btn-icon">
                    <svg className="track-play__dislike-svg" alt="dislike">
                      <use
                        xlinkHref="img/icon/sprite.svg#icon-dislike"
                      ></use>
                    </svg>
                  </div>
                </div>
                
                  

                </div>
              </div>
              <div className="bar__volume-block volume">
                {/* ---Компонент Volume */}
                <VolumeContent
                currentTrack={currentTrack}
                volume={volume}
                setVolume={setVolume}
                />
                
                {/* ---Компонент Volume конец*/}
              </div>
            </div>
          </div>
        </div>
        
        
    
        
        );

}




     
      


                