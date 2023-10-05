import React, {useState} from 'react';
import '../components/filter.css';

function FilterList(activeFilter){
  
  if (activeFilter === 'author'){
    return(
      <ul>
        <li>Антонов</li>
        <li>Жуков</li>
        <li>Газманов</li>
      </ul>
    )
  }
  if (activeFilter === 'year'){
    return(
      <ul>
        <li>1998</li>
        <li>2000</li>
        <li>2023</li>
      </ul>
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
              <div className="filter__button button-genre _btn-text" onClick={()=>setActiveFilter('genre')}>жанру</div>
    
    </div>
)

}
export default Filter