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




// const FilterList = (activeFilter, allTracks, activeFilterAuthor, setActiveFilterAuthor) =>{
  


//   function handleAddFilter (element, activeFilter) {
//     const activeFilterAuthorArr = activeFilterAuthor;
//     activeFilterAuthorArr.push(element);
//     setActiveFilterAuthor (activeFilterAuthorArr);
//     console.log(`activeFilterAuthor ${activeFilterAuthorArr}`);
//   }
  
//   function handleRemoveFilter (element, activeFilter, activeFilterAuthor, setActiveFilterAuthor) {
//     const activeFilterAuthorArr = activeFilterAuthor;
//     activeFilterAuthorArr.push(element);
//     setActiveFilterAuthor (activeFilterAuthorArr);
//     console.log(`activeFilterAuthor ${activeFilterAuthor}`);
//   }

  
  
//   const addFilter = (element, activeFilter, activeFilterAuthor, setActiveFilterAuthor) => {
//     console.log(`Выбрали элемент ${element}`);
    
//     // for (let i = 0; i < activeFilterAuthor.length; i++) {
//     //   favoriteTracksId.push(favoriteTracks[i].id)
//     // }
//   // includes возвращает true или false
//   if (activeFilterAuthor) {
//     const isInFiltre = activeFilterAuthor.includes(element);
    
//     isInFiltre ? handleRemoveFilter(element, activeFilter) : handleAddFilter(element, activeFilter);

//   }
    
//     }
  

//   if (activeFilter === 'author'){
//        const tracksAuthors = [];
//        for (let i = 0; i < allTracks.length; i++) {
//       tracksAuthors.push(allTracks[i].author)
//   }
//   const unicTracksAuthors = unique(tracksAuthors);
  
 

//         return (
//       <Styled.Modal >
//            <Styled.ModalContent >
//             { unicTracksAuthors.map((element)=> {
//              return( 
              
             
//                   <Styled.ModalContentText key={element} href="#" onClick = {() => addFilter(element, activeFilter, activeFilterAuthor, setActiveFilterAuthor)} > {element}  </ Styled.ModalContentText>
            
//                  )
//             })}
//             {/* <Styled.ModalContentText href="#" >Nero</Styled.ModalContentText>
//             <Styled.ModalContentText href="#" >Третий</Styled.ModalContentText>
//             <Styled.ModalContentText href="#" >Nero</Styled.ModalContentText>
//             <Styled.ModalContentText href="#" >Hero</Styled.ModalContentText>
//             <Styled.ModalContentText href="#" >Третий</Styled.ModalContentText> */}
//           </Styled.ModalContent>
//         </Styled.Modal> )
    
//   }


//     if (activeFilter === 'year'){
//       const tracksYears = [];
//        for (let i = 0; i < allTracks.length; i++) {
//         let year = String (allTracks[i].release_date).slice(0,4)
        
//         tracksYears.push(year);
//   }
//   const unicTracksYears = unique(tracksYears);
  
//       return(
//       <Styled.Modal>
//         <Styled.ModalContent>
//         { unicTracksYears.map((element)=> {
//              return( <Styled.ModalContentText key={element} href="#" >{element}</Styled.ModalContentText>
             
             
//              )
//             })}
//         </Styled.ModalContent>
//       </Styled.Modal>
//         )
//       }

//       if (activeFilter === 'genre'){
//         const tracksGenre = [];
//        for (let i = 0; i < allTracks.length; i++) {
//         tracksGenre.push(allTracks[i].genre)
//   }
//   const unicGanre = unique(tracksGenre);
  
  
//         return(
//         <Styled.Modal>
//           <Styled.ModalContent>
//           { unicGanre.map((element)=> {
//              return( <Styled.ModalContentText key={element} href="#" >{element}</Styled.ModalContentText> )
//             })}
//           </Styled.ModalContent>
//         </Styled.Modal>
//           )
//         }  

// }


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


// функция фильтрации
const setAuthorGanreFilter = (activeFilterAuthor, activeFilterGenre) => {
  
    
if(activeFilterAuthor.length > 0 && activeFilterGenre.length == 0){
      console.log(`activeFilterAuthor.length > 0`);
      let checkArrayTracks = [];
      isGenreFilterActive ? ( checkArrayTracks = allTracks) : (checkArrayTracks = allTracks);
       
      let NewAllTracks = [];

      for (let i = 0; i < activeFilterAuthor.length; i++) {
        for(let j = 0; j < checkArrayTracks.length; j++){
          if(checkArrayTracks[j].author === activeFilterAuthor[i]){
            NewAllTracks.push(checkArrayTracks[j])
          }
        }
      }
      
        console.log(`NewAllTracks ${NewAllTracks}`);
        dispatch (filtredTrakcksLoading({NewAllTracks}));

    }
    
    
    if(activeFilterGenre.length > 0 && activeFilterAuthor.length == 0){
      console.log(`activeFilterGenre.length > 0`);
      let checkArrayTracks = [];
      isAuthorFilterActive ? ( checkArrayTracks = allTracks) : (checkArrayTracks = allTracks);
       
      let NewAllTracks = [];
      console.log(checkArrayTracks);
      console.log(isAuthorFilterActive);


      for (let i = 0; i < activeFilterGenre.length; i++) {
        for(let j = 0; j < checkArrayTracks.length; j++){
          if(checkArrayTracks[j].genre === activeFilterGenre[i]){
            NewAllTracks.push(checkArrayTracks[j])
          }
        }
      }
      
        console.log(`NewAllTracks ${NewAllTracks}`);
        dispatch (filtredTrakcksLoading({NewAllTracks}));

    }
          
    if(activeFilterGenre.length > 0 && activeFilterAuthor.length > 0){
      console.log(`activeFilterGenre.length > 0  иии activeFilterAuthor.length >0`);
      let checkArrayTracks = [];
      isGenreFilterActive ? ( checkArrayTracks = allTracks) : (checkArrayTracks = allTracks);
       
      let AuthorNewAllTracks = [];

      for (let i = 0; i < activeFilterAuthor.length; i++) {
        for(let j = 0; j < checkArrayTracks.length; j++){
          if(checkArrayTracks[j].author === activeFilterAuthor[i]){
            AuthorNewAllTracks.push(checkArrayTracks[j])
          }
        }
      }
     
      let NewAllTracks = [];
      for (let i = 0; i < activeFilterGenre.length; i++) {
        for(let j = 0; j < AuthorNewAllTracks.length; j++){
          if(AuthorNewAllTracks[j].genre === activeFilterGenre[i]){
            NewAllTracks.push(AuthorNewAllTracks[j])
          }
        }
        
      }
      
      console.log(`NewAllTracks ${NewAllTracks}`);
      dispatch (filtredTrakcksLoading({NewAllTracks}));

    }
    
    
    if(activeFilterGenre.length == 0 && activeFilterAuthor.length == 0){
      dispatch (filtredTrakcksLoading({allTracks}));

    }





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


