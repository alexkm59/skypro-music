import  styled  from 'styled-components';

export const loginPage = styled.div`
width: 100vw;
  height: 100vh;
  background-color: #383838;
  display: flex;
`
export const loginBox = styled.div`
    width: 366px;
height: 439px;
flex-shrink: 0;
border-radius: 12px;
background: #FFF;
margin: auto;

`
export const loginBoxLogo = styled.img`
   /* width: 58px;
   height:21px; */
   padding: 42px 113px 42px 113px;
`
export const loginBoxInputArea = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    
`
export const loginInput = styled.div`
    height: 70px;
    width: 278px;
    text-align: left;
    vertical-align: bottom;
    align-content: center;
    align-items: center;
    border: 1px solid;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const loginBoxInput = styled.input`
    height: 28px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid;
    border-color:#D0CECE;
    text-align: left;
    display: block;
    /* vertical-align: bottom; */
    
`
export const loginBoxButton = styled.div`
   width: 278px;
   height:124px;
   margin: auto;
   margin-top: 22px;
   display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const loginButton = styled.div`
    height: 52px;
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.054px;
    
    border: 1px solid #ffffff;
    padding: 12px 20px;
    border-radius: 6px;
    background: var(--palette-purple-90, #580EA2);
    text-align: center;
    
    
    &:hover{
      background: #3F007D;

    }
    &:active{
      
background: var(--palette-purple-100, #271A58);
    }
    `
    export const registratButton = styled.div`
    height: 52px;
    color: #000;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.054px;
    
border: 1px solid #D0CECE;
    
padding: 12px 20px;
    border-radius: 6px;
    background: #FFF;
    text-align: center;
    
    &:hover{
      
background: var(--palette-gray-10, #F4F5F6);

    }
    &:active{
      
      background: #D9D9D9;
    }
    `