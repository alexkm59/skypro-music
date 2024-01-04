import React, {useState} from 'react';
import * as Styled from './filter.styled'
import { useSelector, useDispatch } from "react-redux";

// функция поиска уникальных значений в массиве
function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

function FilterList(activeFilter, allTracks){
  
  function addFilter(element) {
    console.log(`Выбрали элемент ${element}`);
    
  }

  if (activeFilter === 'author'){
       const tracksAuthors = [];
       for (let i = 0; i < allTracks.length; i++) {
      tracksAuthors.push(allTracks[i].author)
  }
  const unicTracksAuthors = unique(tracksAuthors);
  
 

        return (
      <Styled.Modal >
           <Styled.ModalContent >
            { unicTracksAuthors.map((element)=> {
             return( 
              
             
                  <Styled.ModalContentText key={element} href="#"  > {element} onClick = {addFilter(element)} </ Styled.ModalContentText>
            
                 )
            })}
            {/* <Styled.ModalContentText href="#" >Nero</Styled.ModalContentText>
            <Styled.ModalContentText href="#" >Третий</Styled.ModalContentText>
            <Styled.ModalContentText href="#" >Nero</Styled.ModalContentText>
            <Styled.ModalContentText href="#" >Hero</Styled.ModalContentText>
            <Styled.ModalContentText href="#" >Третий</Styled.ModalContentText> */}
          </Styled.ModalContent>
        </Styled.Modal> )
    
  }


    if (activeFilter === 'year'){
      const tracksYears = [];
       for (let i = 0; i < allTracks.length; i++) {
        let year = String (allTracks[i].release_date).slice(0,4)
        
        tracksYears.push(year);
  }
  const unicTracksYears = unique(tracksYears);
  
      return(
      <Styled.Modal>
        <Styled.ModalContent>
        { unicTracksYears.map((element)=> {
             return( <Styled.ModalContentText key={element} href="#" >{element}</Styled.ModalContentText>
             
             
             )
            })}
        </Styled.ModalContent>
      </Styled.Modal>
        )
      }

      if (activeFilter === 'genre'){
        const tracksGenre = [];
       for (let i = 0; i < allTracks.length; i++) {
        tracksGenre.push(allTracks[i].genre)
  }
  const unicGanre = unique(tracksGenre);
  
  
        return(
        <Styled.Modal>
          <Styled.ModalContent>
          { unicGanre.map((element)=> {
             return( <Styled.ModalContentText key={element} href="#" >{element}</Styled.ModalContentText> )
            })}
          </Styled.ModalContent>
        </Styled.Modal>
          )
        }  

}


 export function Filter(){
  const  [activeFilter, setActiveFilter] = useState();
  
  const allTracks = useSelector((state) => state.player.tracks);

  


  return(
    <Styled.CenterblockFilter>
              <Styled.FilterTitle>Искать по:</Styled.FilterTitle>
              
              <Styled.FilterButton
              onClick={()=>( activeFilter !== 'author' ? setActiveFilter('author'): setActiveFilter())}> исполнителю 
              {activeFilter === 'author' && FilterList(activeFilter, allTracks)}
              </Styled.FilterButton>

              <Styled.FilterButton
               onClick={()=>( activeFilter !== 'year' ? setActiveFilter('year'): setActiveFilter())}> году выпуска
              {activeFilter === 'year' && FilterList(activeFilter, allTracks)}
              </Styled.FilterButton>
              
              <Styled.FilterButton 
               onClick={()=>( activeFilter !== 'genre' ? setActiveFilter('genre'): setActiveFilter())}>жанру
              {activeFilter === 'genre' && FilterList(activeFilter, allTracks)}
              </Styled.FilterButton>
    
    </Styled.CenterblockFilter>
)

}


