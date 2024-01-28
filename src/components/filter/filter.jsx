import React, {useState} from 'react';
import * as Styled from './filter.styled'
import { useSelector, useDispatch } from "react-redux";
import { allTrakcksLoading, filtredTrakcksLoading, setSortFilter, toggleAuthorFilter, toggleGenreFilter } from '../../store/actions/creators';


// функция поиска уникальных значений в массиве
const unique = (arr) => {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}



 export const Filter = () => {
  const [activeFilter, setActiveFilter] = useState();
  const [activeFilterAuthor, setActiveFilterAuthor] = useState([]);
  const [activeFilterGenre, setActiveFilterGenre] = useState([]);
  const [activeSort, setActiveSort] = useState([]);
  const allTracks = useSelector((state) => state.player.tracks);
  
  const isAuthorFilterActive = useSelector(state => state.player.isAuthorFilterActive);
  const isGenreFilterActive = useSelector(state => state.player.isGenreFilterActive);
  const resultFilterTracks = useSelector(state => state.player.filtredTracks);
  const dispatch = useDispatch(); 
  console.log(activeFilterAuthor);
  console.log(activeFilterGenre);
  const isSerchActive = useSelector((state) => state.player.isSearchActive);
  const searchTracks = useSelector((state)=>state.player.searchTracks);

// функция фильтрации
const setAuthorGanreFilter = (activeFilterAuthor, activeFilterGenre) => {
  
  let workTracksArr = [];
  
  console.log(resultFilterTracks);
  if(resultFilterTracks.length > 0){
    // workTracksArr = resultFilterTracks;
    workTracksArr = allTracks;
  }
  else{
     workTracksArr = allTracks;
  }

  console.log(workTracksArr);
  if(activeFilterAuthor.length > 0){ 
    
    let NewAllTracks = [];

    for (let i = 0; i < activeFilterAuthor.length; i++) {
      for(let j = 0; j <  workTracksArr.length; j++){
        if( workTracksArr[j].author === activeFilterAuthor[i]){
         NewAllTracks.push(workTracksArr[j]);
        }
      }
    }
    
      console.log(NewAllTracks);
      dispatch (filtredTrakcksLoading({NewAllTracks}));
      workTracksArr = NewAllTracks;
  }


    if(activeFilterGenre.length > 0){
      
      let NewAllTracks = [];
      for (let i = 0; i < activeFilterGenre.length; i++) {
        for(let j = 0; j < workTracksArr.length; j++){
          if(workTracksArr[j].genre === activeFilterGenre[i]){
            NewAllTracks.push(workTracksArr[j])
          }
        }
      }
      
        console.log(`NewAllTracks ${NewAllTracks}`);
        dispatch (filtredTrakcksLoading({NewAllTracks}));
        workTracksArr = NewAllTracks;
    }
    //  console.log(isSerchActive);
    
    //  if(isSerchActive){
    //   console.log(`зашли в поиск по поиску`);
    //   let NewAllTracks = [];
    //   console.log(searchTracks.length);
    //     for (let i = 0; i < searchTracks.length; i++) {
    //       console.log(workTracksArr[i]);
    //       if (searchTracks[i]?.id === workTracksArr[i]?.id){
    //           NewAllTracks.push(searchTracks[i])
    //       }
    //     }
    //   console.log(NewAllTracks);
    //     dispatch (filtredTrakcksLoading({NewAllTracks}));
    //     // workTracksArr = NewAllTracks;

    // }

    
  }



  const FilterList = (activeFilter, allTracks, activeFilterAuthor, setActiveFilterAuthor, activeFilterGenre, setActiveFilterGenre, activeSort, setActiveSort) =>{
  

    const handleAddFilter = (element, activeFilter, activeFilterAuthor, setActiveFilterAuthor, activeFilterGenre, setActiveFilterGenre, activeSort, setActiveSort) => {
      const activeFilterAuthorArr = activeFilterAuthor;
      const activeFilterGenreArr = activeFilterGenre;
      const activeSortArr = [];
      
      switch(activeFilter){
          case "author" : {
            activeFilterAuthorArr.push(element);
            setActiveFilterAuthor(activeFilterAuthorArr);
            console.log(`activeFilterAuthor ${activeFilterAuthor}`);
            break;
          }
          case "genre" : {
            activeFilterGenreArr.push(element);
            setActiveFilterGenre(activeFilterGenreArr);
            console.log(`activeFilterGenre ${activeFilterGenre}`);
            break;
          }  
          case "year" : {
            console.log(element);
            activeSortArr.push(element);
            setActiveSort(activeSortArr);
            console.log(`activeSort = ${activeSort}`);
            // добавить вызов диспатч сортировки по годам
            dispatch(setSortFilter(activeSortArr));
            break;
          }  
      
      
      
      
      }
    // ПРОБА
      if (activeFilterAuthor){
        if (activeFilterAuthor.length === 0 ) {
          dispatch(toggleAuthorFilter(false));
        }
        else{
          dispatch(toggleAuthorFilter(true));
        }
       
      }
    

    setAuthorGanreFilter(activeFilterAuthor, activeFilterGenre);
    
    if (activeFilterGenre){
      console.log(`зашли в добавление фильтра по жанру`);
      if (activeFilterGenre.length === 0 ) {
        dispatch(toggleGenreFilter(false));
      }
      else{
        dispatch(toggleGenreFilter(true));
      }
        
      setAuthorGanreFilter(activeFilterAuthor, activeFilterGenre);
    }
// КОНЕЦ ПРОБЫ
    
    
    }
    
   const handleRemoveFilter = (element, activeFilter, activeFilterAuthor, setActiveFilterAuthor, activeFilterGenre, setActiveFilterGenre, activeSort, setActiveSort) => {
      const activeFilterAuthorArr = activeFilterAuthor;
      const activeFilterGenreArr = activeFilterGenre;
      
      if(activeFilter === 'author' && activeFilterAuthorArr.indexOf(element)>= 0){
        const activeFilterAuthorIndex = activeFilterAuthorArr.indexOf(element);
        console.log(`activeFilterAuthorIndex ${activeFilterAuthorIndex}`);
      
          if (activeFilterAuthorIndex !== -1) {
            activeFilterAuthorArr.splice(activeFilterAuthorIndex, 1);
            setActiveFilterAuthor (activeFilterAuthorArr);
            console.log(`activeFilterAuthor ${activeFilterAuthor}`);
          }
      }
      
      if(activeFilter === 'genre' && activeFilterGenreArr.indexOf(element)>= 0){
        const activeFilterGenreIndex = activeFilterGenreArr.indexOf(element);
        console.log(`activeFilterGenreIndex ${activeFilterGenreIndex}`);
      
          if (activeFilterGenreIndex !== -1) {
            activeFilterGenreArr.splice(activeFilterGenreIndex, 1);
            setActiveFilterGenre (activeFilterGenreArr);
            console.log(`activeFilterGenre ${activeFilterGenre}`);
          
          }
      }


  if (activeFilterAuthor){
    if (activeFilterAuthor.length === 0 ) {
    dispatch(toggleAuthorFilter(false));  
    }
    else{
    dispatch(toggleAuthorFilter(true));
    }
  setAuthorGanreFilter(activeFilterAuthor, activeFilterGenre);
  }

if (activeFilterGenre){
  if (activeFilterGenre.length === 0 ) {
  dispatch(toggleGenreFilter(false));
  }
else{
  dispatch(toggleGenreFilter(true));
}
}





    }
  
    
    // Функция обработки фильтров
    const addFilter = (element, activeFilter, activeFilterAuthor, setActiveFilterAuthor, activeFilterGenre, setActiveFilterGenre, activeSort, setActiveSort) => {
     
          console.log(`activeFilter 193 stroka ${activeFilter}`);
          

        if (activeFilter === 'author' && activeFilterAuthor) {
          // includes возвращает true или false
          const isInFilter = activeFilterAuthor.includes(element);
          
          isInFilter ? handleRemoveFilter(element, activeFilter, activeFilterAuthor, setActiveFilterAuthor, activeFilterGenre, setActiveFilterGenre, activeSort, setActiveSort) : handleAddFilter(element, activeFilter, activeFilterAuthor, setActiveFilterAuthor, activeFilterGenre, setActiveFilterGenre, activeSort, setActiveSort);
      
        }
        // Фильтр для жанра
        if (activeFilter === 'genre' && activeFilterGenre) {
          // includes возвращает true или false
          const isInFilter = activeFilterGenre.includes(element);
          
          isInFilter ? handleRemoveFilter(element, activeFilter, activeFilterAuthor, setActiveFilterAuthor, activeFilterGenre, setActiveFilterGenre, activeSort, setActiveSort) : handleAddFilter(element, activeFilter, activeFilterAuthor, setActiveFilterAuthor, activeFilterGenre, setActiveFilterGenre, activeSort, setActiveSort);
        }

        // Сортировка
        if (activeFilter === 'year' && activeSort) {
          // includes возвращает true или false
          const isInFilter = activeSort.includes(element);
          
          isInFilter ? handleRemoveFilter(element, activeFilter, activeFilterAuthor, setActiveFilterAuthor, activeFilterGenre, setActiveFilterGenre, activeSort, setActiveSort) : handleAddFilter(element, activeFilter, activeFilterAuthor, setActiveFilterAuthor, activeFilterGenre, setActiveFilterGenre, activeSort, setActiveSort);
        }
             

      }
// Конец Функция обработки фильтров
// Функция проверки наложен ли фильтр
      const checkInFiltr = (element, activeFilter, activeFilterAuthor, setActiveFilterAuthor, activeFilterGenre, setActiveFilterGenre, activeSort, setActiveSort) => {
        
        console.log(activeFilterAuthor);
        if (activeFilter === 'author' && activeFilterAuthor) {
          // includes возвращает true или false
          const isInFiltr = activeFilterAuthor.includes(element);
          console.log(`isInFiltr ${isInFiltr}`);
          return isInFiltr;
        }
        if (activeFilter === 'genre' && activeFilterGenre) {
          // includes возвращает true или false
          const isInFiltr = activeFilterGenre.includes(element);
          console.log(`isInFiltr ${isInFiltr}`);
          return isInFiltr;
        }
        if (activeFilter === 'year' && activeSort) {
          // includes возвращает true или false
          const isInFiltr = activeSort.includes(element);
          console.log(`isInFiltr ${isInFiltr}`);
          return isInFiltr;
        }



        }
// Конец функции проверки наложен ли фильтр
  


    if (activeFilter === 'author'){
      console.log(activeFilter);
         const tracksAuthors = [];
         for (let i = 0; i < allTracks.length; i++) {
        tracksAuthors.push(allTracks[i].author)
    }
    const unicTracksAuthors = unique(tracksAuthors);
          return (
            <>
        <Styled.Modal >
             <Styled.ModalContent>
              
              { unicTracksAuthors.map((element)=> {
               return( 
                (checkInFiltr(element, activeFilter, activeFilterAuthor, setActiveFilterAuthor, activeFilterGenre, setActiveFilterGenre)) ? 
                    (
                    <Styled.ModalContentTextColor key={element}  onClick = {() => addFilter(element, activeFilter, activeFilterAuthor, setActiveFilterAuthor, activeFilterGenre, setActiveFilterGenre)}>{element} 
                        {/* <Styled.ModalContentNumber>1</Styled.ModalContentNumber> */}
                    </Styled.ModalContentTextColor>
                    
                    
                    ) : 
                    (<Styled.ModalContentText  key={element}  onClick = {() => { 
                      addFilter(element, activeFilter, activeFilterAuthor, setActiveFilterAuthor, activeFilterGenre, setActiveFilterGenre)
                      
                    }} > {element}  </ Styled.ModalContentText>)
                  
                   )
              })}
              
              
            </Styled.ModalContent>
            
          </Styled.Modal> 
        
          
          </>
          )
      
    }
  
  
      if (activeFilter === 'year'){
        const tracksYears = ['По-умолчанию', 'Сначала новые', 'Сначала старые'];
    //      for (let i = 0; i < allTracks.length; i++) {
    //       let year = String (allTracks[i].release_date).slice(0,4)
          
    //       tracksYears.push(year);
    // }
    const unicTracksYears = unique(tracksYears);
    
        return(
        <Styled.Modal>
          <Styled.ModalContent>
          { unicTracksYears.map((element)=> {
              //  return( <Styled.ModalContentText key={element} href="#" >{element}</Styled.ModalContentText>)
              return( 
                (checkInFiltr(element, activeFilter, activeFilterAuthor, setActiveFilterAuthor, activeFilterGenre, setActiveFilterGenre, activeSort, setActiveSort) ) ?
                (
                  <Styled.ModalContentTextColor key={element}  onClick = {() => addFilter(element, activeFilter, activeFilterAuthor, setActiveFilterAuthor, activeFilterGenre, setActiveFilterGenre, activeSort, setActiveSort)}>{element} 
                      {/* <Styled.ModalContentNumber>1</Styled.ModalContentNumber> */}
                  </Styled.ModalContentTextColor>
                  ):
                (<Styled.ModalContentText key={element}  onClick = {() => { 
                  addFilter(element, activeFilter, activeFilterAuthor, setActiveFilterAuthor, activeFilterGenre, setActiveFilterGenre, activeSort, setActiveSort)
                  
                }} >{element}</Styled.ModalContentText> ))
              
              
              })}
          </Styled.ModalContent>
        </Styled.Modal>
          )
        }
  
        if (activeFilter === 'genre'){
          console.log(activeFilter);
          const tracksGenre = [];
         for (let i = 0; i < allTracks.length; i++) {
          tracksGenre.push(allTracks[i].genre)
          }
    const unicGanre = unique(tracksGenre);
    
    
          return(
          <Styled.Modal>
            <Styled.ModalContent>
            { unicGanre.map((el)=> {
               return( 
                (checkInFiltr(el, activeFilter, activeFilterAuthor, setActiveFilterAuthor, activeFilterGenre, setActiveFilterGenre) ) ?
                (
                  <Styled.ModalContentTextColor key={el}  onClick = {() => addFilter(el, activeFilter, activeFilterAuthor, setActiveFilterAuthor, activeFilterGenre, setActiveFilterGenre)}>{el} 
                      {/* <Styled.ModalContentNumber>1</Styled.ModalContentNumber> */}
                  </Styled.ModalContentTextColor>
                  ):
                (<Styled.ModalContentText key={el}  onClick = {() => { 
                  addFilter(el, activeFilter, activeFilterAuthor, setActiveFilterAuthor, activeFilterGenre, setActiveFilterGenre)
                  
                }} >{el}</Styled.ModalContentText> ))
               
               
              //  <Styled.ModalContentText key={element} href="#" >{element}</Styled.ModalContentText> )
              })}
            </Styled.ModalContent>
          </Styled.Modal>
            )
          }  
  
  }


  return(
    <Styled.CenterblockFilter>
              <Styled.FilterTitle>Искать по:</Styled.FilterTitle>
              <>
              <Styled.FilterButton
              onClick={()=>( activeFilter !== 'author' ? setActiveFilter('author'): setActiveFilter())}> исполнителю 
              {activeFilter === 'author' && FilterList(activeFilter, allTracks, activeFilterAuthor, setActiveFilterAuthor, activeFilterGenre, setActiveFilterGenre)}
              {/* <Styled.ModalContentNumber>1</Styled.ModalContentNumber> */}
              </Styled.FilterButton>
              {(activeFilterAuthor.length > 0) ? (<Styled.ModalContentNumber>{activeFilterAuthor.length}</Styled.ModalContentNumber>) : (null)}
              </>

              <>
              <Styled.FilterButton
               onClick={()=>( activeFilter !== 'year' ? setActiveFilter('year'): setActiveFilter())}> году выпуска
              {activeFilter === 'year' && FilterList(activeFilter, allTracks, activeFilterAuthor, setActiveFilterAuthor, activeFilterGenre, setActiveFilterGenre, activeSort, setActiveSort)}
              </Styled.FilterButton>
              </>
              {(activeSort == 'Сначала старые' || activeSort == 'Сначала новые') ? (<Styled.ModalContentNumber>{1}</Styled.ModalContentNumber>) : (null)}
              <>
              <Styled.FilterButton 
               onClick={()=>( activeFilter !== 'genre' ? setActiveFilter('genre'): setActiveFilter())}>жанру
              {activeFilter === 'genre' && FilterList(activeFilter, allTracks, activeFilterAuthor, setActiveFilterAuthor, activeFilterGenre, setActiveFilterGenre)}
              </Styled.FilterButton>
              {(activeFilterGenre.length > 0) ? (<Styled.ModalContentNumber>{activeFilterGenre.length}</Styled.ModalContentNumber>) : (null)}
              </>
    </Styled.CenterblockFilter>
)

}


