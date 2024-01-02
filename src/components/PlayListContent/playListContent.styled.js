import  styled  from 'styled-components';

export const PlaylistItem = styled.div`
    width: 100%;
    
    display: block;
    margin-bottom: 12px;
  `
  export const PlaylistTrack = styled.div`
  display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`
export const TrackTitle = styled.div`
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
    width: 447px;
  `
 export const TrackTitleImage = styled.div`
 width: 51px;
    height: 51px;
    padding: 16px;
    background: #313131;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: 17px;
`
export const TrackTitleSvg = styled.svg`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4e4e4e;
`
export const TrackTitleLink = styled.div`
font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
`
export const TrackTitleSpan = styled.span`
font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4e4e4e;
`
export const TrackAuthor = styled.div`
    width: 321px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
`
export const TrackAuthorLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    text-align: left;
`
export const TrackAlbum = styled.div`
width: 245px;
`
export const TrackAlbumLink = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #696969;
`
export const TrackTimeSvg = styled.svg`
    width: 14px;
    height: 12px;
    margin-right: 17px;
    fill: transparent;
    stroke: #696969;
`
export const TrackTimeText = styled.span`
font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #696969;
` 
export const BlinkingDot = styled.div`
width: 16px;
  height: 16px;
  background-color: #b672ff;
  border-radius: 8px;
  display: block;
  animation: bubble_out 0.6s ease-in-out infinite both;
  @keyframes bubble_out {
  0%,
  to {
    transform: scale(0.5);
  }
  25%{
    transform: scale(0.75);
  }
  
  50% {
    transform: scale(1);
  }
  75%{
    transform: scale(0.75);
  }

}
  `
export const PauseDot = styled.div`
  width: 12px;
  height: 12px;
  background-color: #b672ff;
  border-radius: 8px;
  display: block;`