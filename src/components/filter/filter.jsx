import React, {useState} from 'react';
import * as Styled from './filter.styled'

function FilterList(activeFilter){
  
  if (activeFilter === 'author'){
    return (
   <Styled.Modal>
      <Styled.ModalContent>
        <Styled.ModalContentText href="#" >Nero</Styled.ModalContentText>
        <Styled.ModalContentText href="#" >Третий</Styled.ModalContentText>
        <Styled.ModalContentText href="#" >Nero</Styled.ModalContentText>
        <Styled.ModalContentText href="#" >Hero</Styled.ModalContentText>
        <Styled.ModalContentText href="#" >Третий</Styled.ModalContentText>
      </Styled.ModalContent>
    </Styled.Modal> )
    }
    if (activeFilter === 'year'){
      return(
      <Styled.Modal>
        <Styled.ModalContent>
          <Styled.ModalContentText href="#" >1998</Styled.ModalContentText>
          <Styled.ModalContentText href="#" >2000</Styled.ModalContentText>
          <Styled.ModalContentText href="#" >2023</Styled.ModalContentText>
        </Styled.ModalContent>
      </Styled.Modal>
        )
      }  
      if (activeFilter === 'genre'){
        return(
        <Styled.Modal>
          <Styled.ModalContent>
            <Styled.ModalContentText href="#" >Рок</Styled.ModalContentText>
            <Styled.ModalContentText href="#" >Хип-хоп</Styled.ModalContentText>
            <Styled.ModalContentText href="#" >Поп-музыка</Styled.ModalContentText>
            <Styled.ModalContentText href="#" >Техно</Styled.ModalContentText>
            <Styled.ModalContentText href="#" >Инди</Styled.ModalContentText>
          </Styled.ModalContent>
        </Styled.Modal>
          )
        }  



}

 export function Filter(){

  const  [activeFilter, setActiveFilter] = useState();
  
  return(
    <Styled.CenterblockFilter>
              <Styled.FilterTitle>Искать по:</Styled.FilterTitle>
              
              <Styled.FilterButton
              onClick={()=>( activeFilter !== 'author' ? setActiveFilter('author'): setActiveFilter())}> исполнителю 
              {activeFilter === 'author' && FilterList(activeFilter)}
              </Styled.FilterButton>


              <Styled.FilterButton
               onClick={()=>( activeFilter !== 'year' ? setActiveFilter('year'): setActiveFilter())}> году выпуска
              {activeFilter === 'year' && FilterList(activeFilter)}
              </Styled.FilterButton>
              
              <Styled.FilterButton 
               onClick={()=>( activeFilter !== 'genre' ? setActiveFilter('genre'): setActiveFilter())}>жанру
              {activeFilter === 'genre' && FilterList(activeFilter)}
              </Styled.FilterButton>
    
    </Styled.CenterblockFilter>
)

}


