import React from 'react';
import * as Styled from './loginArea.styled'

export function loginArea () {
return(
<Styled.sidebarPersonal >
              <Styled.sidebarPersonalName >Sergey.Ivanov</Styled.sidebarPersonalName>
              <Styled.sidebarIcon >
                <svg alt="logout">
                  <use xlinkHref="img/icon/sprite.svg#logout"></use>
                </svg>
              </Styled.sidebarIcon>
</Styled.sidebarPersonal>

)

}