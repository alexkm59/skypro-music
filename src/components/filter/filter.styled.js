import  styled  from 'styled-components';

export const CenterblockFilter = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 51px;
`
export const FilterTitle = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin-right: 15px;
`
export const FilterButton = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #ffffff;
    border-radius: 60px;
    padding: 6px 20px;
    &:hover{
      border-color: #d9b6ff;
      color: #d9b6ff;
      cursor: pointer;
    }
    &:active{
      border-color: #ad61ff;
      color: #ad61ff;
      cursor: pointer;
    }
     &:not(:last-child){
       margin-right: 10px;
     }
 `
 export const Modal = styled.div`
 height: 100vh;
 width: 100vw;
 background-color: rgba(0, 0, 0, 0);
 position: fixed;
 padding-top: 16px;

 `
 export const ModalContent = styled.div`
 padding: 34px;
    border-radius: 12px;
    height: 206px;
    width: 10vw;
    display: inline-flex;
    flex-direction: column;
    background: #313131;
    align-items: flex-start;
    gap: 10px;
    // scroll-snap-type: y mandatory;
    overflow-y: scroll;
    position: absolute;
    opacity: 0.8;
    position: relative;
    z-index: 1;
    &::-webkit-scrollbar{
      width: 6px;
      border-radius: 12px;
      z-index: 3;
     }
     &::-webkit-scrollbar-track{
      background-color: #4B4949;
      border-radius: 12px;
      z-index: 3;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #FFF;
      border-radius: 12px;
      height: 50px;
      width: 50px;
      z-index: 10;
    } 
 `
 export const ModalContentText = styled.a`
//  height: 100vh;
//  width: 100vw;
 background-color: rgba(0, 0, 0, 0);
//  position: fixed;
 color: #FFF;
 font-variant-numeric: lining-nums proportional-nums;
 font-family: StratosSkyeng;
 font-size: 20px;
 font-style: normal;
 font-weight: 400;
 line-height: 24px;
 padding-top: 16px;
  &:hover{
  color: #B672FF;
font-variant-numeric: lining-nums proportional-nums;
font-family: StratosSkyeng;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 24px;
text-decoration-line: underline;
}
 `

export const ModalContentTextColor = styled.a`
 background-color: rgba(0, 0, 0, 0);
 color: #B672FF;
 font-variant-numeric: lining-nums proportional-nums;
 font-family: StratosSkyeng;
 font-size: 20px;
 font-style: normal;
 font-weight: 400;
 line-height: 24px;
 padding-top: 16px;
 `
export const ModalContentNumber = styled.div`
    color: white;
    background-color: rgb(173, 97, 255);
    width: 26px;
    height: 26px;
    border-radius: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    right: 23px;
    top: -14px;
    font-family: StratosSkyeng;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 13px;
`
