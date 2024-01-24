import React from 'react';
import * as Styled from './search.styled';
import { useDispatch, useSelector } from "react-redux";
import { filtredTrakcksLoading, sertchTraks } from '../../store/actions/creators';
export function search () {
  const allTracks = useSelector((state) => state.player.tracks);
  const dispatch = useDispatch();

 
  // Функция поиска
const sertchFinction = (str) =>{
  let sertchTracksName=[];
  for (let i = 0; i < allTracks?.length; i++){
    if(allTracks[i].name.toLowerCase().includes(str)){
      sertchTracksName.push(allTracks[i].name.toLowerCase());
    }
  }
  console.log(sertchTracksName);
  

  if(sertchTracksName.length > 0){
    
    let checkArrayTracks = allTracks;
    let NewAllTracks = [];
console.log(checkArrayTracks);
    for (let i = 0; i < sertchTracksName.length; i++) {
      for(let j = 0; j < checkArrayTracks.length; j++){
        if(checkArrayTracks[j].name.toLowerCase() == sertchTracksName[i].toLowerCase()){
          NewAllTracks.push(checkArrayTracks[j])
        }
      }
    }
    
      console.log(NewAllTracks);
      dispatch (sertchTraks({NewAllTracks}));

  }

  

}



  return(
    <Styled.CenterblockSearch >
              <Styled.SearchSvg>
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
              </Styled.SearchSvg>
              <Styled.SearchText type="search" placeholder="Поиск" name="search" onInput={(event)=> sertchFinction(event.target.value)}/>
            </Styled.CenterblockSearch>
)

}