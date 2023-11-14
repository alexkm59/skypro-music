import React, {useContext} from 'react';
import * as Styled from './loginArea.styled';
import {userContext} from "../../Context/auth";
import {useNavigate} from 'react-router-dom';

export function loginArea () {

  const {user} = useContext(userContext);
  const navigate = useNavigate();
return(
<Styled.sidebarPersonal >
              <Styled.sidebarPersonalName >{user.username}</Styled.sidebarPersonalName>
              <Styled.sidebarIcon onClick={()=>{
                delete localStorage.currentUserId;
                delete localStorage.currentUserName;
                delete localStorage.currentUserEmail;
                
                navigate("/login")}}>
                <svg alt="logout">
                  <use xlinkHref="img/icon/sprite.svg#logout"></use>
                </svg>
              </Styled.sidebarIcon>
</Styled.sidebarPersonal>

)

}