import React, {useState} from 'react';
import '../components/sidebar.css';
import Skeleton from 'react-loading-skeleton';
import '../components/trackPlay.css';
export function TrackPlayInfo (props){
    
    const  [isLoading, setLoading] = useState(false);
    setTimeout(()=>{
      setLoading(true)
    },4000)

return(
<div className="track-play__contain">
                <div className="track-play__image">
                  {isLoading ? <svg className="track-play__svg" alt="music"><use xlinkHref="img/icon/sprite.svg#icon-note"></use></svg> : <Skeleton/> }
                    </div>
                    <div className="track-play__author">
                    {isLoading ? <a className="track-play__author-link" href="http://">{props.author}</a> : <Skeleton/> }
                    </div>
                    <div className="track-play__album">
                    {isLoading ? <a className="track-play__album-link" href="http://">{props.album}</a> : <Skeleton/> }
                    </div>
                </div>

) 

}
export default TrackPlayInfo
