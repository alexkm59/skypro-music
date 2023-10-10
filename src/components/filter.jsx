import React, {useState} from 'react';
import '../components/filter.css';


function FilterList(activeFilter){
  
  if (activeFilter === 'author'){
    return (
   <div className="modal">
      <div className="modal__content">
        <a href="#" className='modal__content_text'>Nero</a>
        <a href="#" className='modal__content_text'>Hero</a>
        <a href="#" className='modal__content_text'>Третий</a>
        <a href="#" className='modal__content_text'>Nero</a>
        <a href="#" className='modal__content_text'>Hero</a>
        <a href="#" className='modal__content_text'>Третий</a>
      </div>
    </div> )
    }
    if (activeFilter === 'year'){
      return(
      <div className="modal">
        <div className="modal__content">
          <a href="#" className='modal__content_text'>1998</a>
          <a href="#" className='modal__content_text'>2000</a>
          <a href="#" className='modal__content_text'>2023</a>
        </div>
      </div>
        )
      }  
      if (activeFilter === 'genre'){
        return(
        <div className="modal">
          <div className="modal__content">
            <a href="#" className='modal__content_text'>Рок</a>
            <a href="#" className='modal__content_text'>Хип-хоп</a>
            <a href="#" className='modal__content_text'>Поп-музыка</a>
            <a href="#" className='modal__content_text'>Техно</a>
            <a href="#" className='modal__content_text'>Инди</a>
          </div>
        </div>
          )
        }  



}

 export function Filter(){

  const  [activeFilter, setActiveFilter] = useState();
  
  return(
    <div className="centerblock__filter filter">
              <div className="filter__title">Искать по:</div>
              
              <div className="filter__button button-author _btn-text" 
              onClick={()=>( activeFilter !== 'author' ? setActiveFilter('author'): setActiveFilter())}> исполнителю 
              {activeFilter === 'author' && FilterList(activeFilter)}
              </div>


              <div className="filter__button button-year _btn-text"
               onClick={()=>( activeFilter !== 'year' ? setActiveFilter('year'): setActiveFilter())}> году выпуска
              {activeFilter === 'year' && FilterList(activeFilter)}
              </div>
              
              <div className="filter__button button-genre _btn-text" onClick={()=>( activeFilter !== 'genre' ? setActiveFilter('genre'): setActiveFilter())}>жанру
              {activeFilter === 'genre' && FilterList(activeFilter)}
              </div>
    
    </div>
)

}

export default Filter
