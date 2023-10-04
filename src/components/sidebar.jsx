import React from 'react';
import '../components/sidebar.css';

export function Sidebar (props) {

return(
    
                <div className="sidebar__item">
                  <a className="sidebar__link" href="#">
                    <img
                      className="sidebar__img"
                      src={props.img}
                      alt="day's playlist"
                    />
                  </a>
                </div>
                
    
)

}
export default Sidebar