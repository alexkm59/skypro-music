import React, {useState} from 'react';
import * as Styled from './filter.styled'
import { useSelector, useDispatch } from "react-redux";
import { allTrakcksLoading, filtredTrakcksLoading, toggleFilterActive } from '../../store/actions/creators';


// функция поиска уникальных значений в массиве
const unique = (arr)=> {
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
  const  [activeFilter, setActiveFilter] = useState();
  const [activeFilterAuthor, setActiveFilterAuthor] = useState([])
  const allTracks = useSelector((state) => state.player.tracks);
  const dispatch = useDispatch(); 
  console.log(activeFilterAuthor);

  const FilterList = (activeFilter, allTracks, activeFilterAuthor, setActiveFilterAuthor) =>{
  


    const handleAddFilter = (element, activeFilter, activeFilterAuthor, setActiveFilterAuthor) => {
      const activeFilterAuthorArr = activeFilterAuthor;
      activeFilterAuthorArr.push(element);
      setActiveFilterAuthor (activeFilterAuthorArr);
      console.log(`activeFilterAuthor ${activeFilterAuthor}`);
      
    }
    
   const handleRemoveFilter = (element, activeFilter, activeFilterAuthor, setActiveFilterAuthor) => {
      const activeFilterAuthorArr = activeFilterAuthor;
      
      
      if(activeFilterAuthorArr.indexOf(element)>= 0){
        const activeFilterAuthorIndex = activeFilterAuthorArr.indexOf(element);
        console.log(`activeFilterAuthorIndex ${activeFilterAuthorIndex}`);
      
      
      if (activeFilterAuthorIndex !== -1) {
        activeFilterAuthorArr.splice(activeFilterAuthorIndex, 1);
      }
    }
      setActiveFilterAuthor (activeFilterAuthorArr);
      console.log(`activeFilterAuthor ${activeFilterAuthor}`);
    }
  
    
    
    const addFilter = (element, activeFilter, activeFilterAuthor, setActiveFilterAuthor) => {
     
      console.log(`activeFilter ${activeFilter}`);
      
    

    if (activeFilterAuthor) {
      // includes возвращает true или false
      const isInFilter = activeFilterAuthor.includes(element);
      
      isInFilter ? handleRemoveFilter(element, activeFilter, activeFilterAuthor, setActiveFilterAuthor) : handleAddFilter(element, activeFilter, activeFilterAuthor, setActiveFilterAuthor);
  
      

      if (activeFilterAuthor.length === 0){
        dispatch(toggleFilterActive(false));
      }
      else{
        dispatch(toggleFilterActive(true));
      }


      const NewAllTracks = []
      for (let i = 0; i < activeFilterAuthor.length; i++) {
        for(let j = 0; j < allTracks.length; j++){
          if(allTracks[j].author === activeFilterAuthor[i]){
            NewAllTracks.push(allTracks[j])
          }
        }
    }
      
    console.log(`NewAllTracks ${NewAllTracks}`);
    dispatch (filtredTrakcksLoading({NewAllTracks}));
    }
      
      }

      const checkInFiltr = (element, activeFilter, activeFilterAuthor, setActiveFilterAuthor) => {
        
        console.log(activeFilterAuthor);
        if (activeFilterAuthor) {
          // includes возвращает true или false
          const isInFiltr = activeFilterAuthor.includes(element);
          console.log(`isInFiltr ${isInFiltr}`);
          return isInFiltr;
        }
        
        }
    
  
    if (activeFilter === 'author'){
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
                (checkInFiltr(element, activeFilter, activeFilterAuthor, setActiveFilterAuthor)) ? 
                    (<>
                    <Styled.ModalContentTextColor key={element}  onClick = {() => addFilter(element, activeFilter, activeFilterAuthor, setActiveFilterAuthor)}>{element} 
                        {/* <Styled.ModalContentNumber>1</Styled.ModalContentNumber> */}
                    </Styled.ModalContentTextColor>
                    
                    </>
                    ) : 
                    (<Styled.ModalContentText  key={element}  onClick = {() => { 
                      addFilter(element, activeFilter, activeFilterAuthor, setActiveFilterAuthor)
                      
                    }} > {element}  </ Styled.ModalContentText>)
                  
                   )
              })}
              {/* <Styled.ModalContentText href="#" >Nero</Styled.ModalContentText>
              <Styled.ModalContentText href="#" >Третий</Styled.ModalContentText>
              <Styled.ModalContentText href="#" >Nero</Styled.ModalContentText>
              <Styled.ModalContentText href="#" >Hero</Styled.ModalContentText>
              <Styled.ModalContentText href="#" >Третий</Styled.ModalContentText> */}
              
            </Styled.ModalContent>
            
          </Styled.Modal> 
        
          
          </>
          )
      
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


  return(
    <Styled.CenterblockFilter>
              <Styled.FilterTitle>Искать по:</Styled.FilterTitle>
              <>
              <Styled.FilterButton
              onClick={()=>( activeFilter !== 'author' ? setActiveFilter('author'): setActiveFilter())}> исполнителю 
              {activeFilter === 'author' && FilterList(activeFilter, allTracks, activeFilterAuthor, setActiveFilterAuthor)}
              {/* <Styled.ModalContentNumber>1</Styled.ModalContentNumber> */}
              </Styled.FilterButton>
              {(activeFilterAuthor.length > 0) ? (<Styled.ModalContentNumber>{activeFilterAuthor.length}</Styled.ModalContentNumber>) : (null)}
              </>


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


