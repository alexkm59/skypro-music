import React from 'react';
import * as Styled from './search.styled';
export function search () {
return(
    <Styled.CenterblockSearch >
              <Styled.SearchSvg>
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
              </Styled.SearchSvg>
              <Styled.SearchText type="search" placeholder="Поиск" name="search"/>
            </Styled.CenterblockSearch>
)

}