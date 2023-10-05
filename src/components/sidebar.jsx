import React, {useState} from 'react';
import '../components/sidebar.css';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
export function Sidebar (props) {
    const  [isLoading, setLoading] = useState(false);
    setTimeout(()=>{
      setLoading(true)
    },4000)
return(
    
                <div className="sidebar__item">
                  <SkeletonTheme baseColor="#313131" highlightColor="#fff" height={150} width={250}>
                  {/* <a className="sidebar__link" href="#"> */}
                  {isLoading ? <a className="sidebar__link" href="#"> <img className="sidebar__img" src={props.img} alt="day's playlist"/></a> : <Skeleton/> }
                  </SkeletonTheme>
                    {/* <img className="sidebar__img" src={props.img} alt="day's playlist"/> */}
                  {/* </a> */}
                </div>
                
)

}
export default Sidebar