import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import * as Styled from './sidebar.styled';

export function Sidebar (props) {
    const  [isLoading, setLoading] = useState(false);
    setTimeout(()=>{
      setLoading(true)
    },3000)
return(
    
                <Styled.SidebarItem>
                  <SkeletonTheme baseColor="#313131" highlightColor="#fff" height={150} width={250}>
                  {/* <a className="sidebar__link" href="#"> */}
                  <Link to={`/category/${props.id}`}>
                  {isLoading ? <Styled.SidebarLink> <Styled.SidebarImg src={props.src} alt="day's playlist"/></Styled.SidebarLink> : <Skeleton/> }
                  </Link>
                  
                  
                  </SkeletonTheme>
                    {/* <img className="sidebar__img" src={props.img} alt="day's playlist"/> */}
                  {/* </a> */}
                </Styled.SidebarItem>
                
)

}
