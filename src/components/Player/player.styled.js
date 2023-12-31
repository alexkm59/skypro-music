import styled from 'styled-components';

export const PlayerControls = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding: 0 27px 0 31px;

`
export const PlayerBtn = styled.div`
    padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: ${(props) => (props.btnPrev ? "23px" : "0")};
`
export const PlayerBtnPrevSvg = styled.svg`
    width: 15px;
    height: 14px; 
`
export const PlayerBtnPlaySvg = styled.svg`
    width: 22px;
    height: 20px;
    fill: #d9d9d9;
`
export const PlayerBtnNext = styled(PlayerBtn)`
    margin-right: 28px;
    fill: #a53939;
`
export const PlayerBtnNextSvg = styled.svg`
    width: 15px;
    height: 14px;
    fill: inherit;
    stroke: #d9d9d9;
`
export const PlayerBtnRepeatSvg = styled.svg`
    width: 18px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`
export const PlayerBtnShuffle = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

`