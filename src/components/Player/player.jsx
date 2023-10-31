import React from 'react';
import * as Styled from './player.styled'


export function PlayerControls() {
    return(
    <Styled.PlayerControls>
        <Styled.PlayerBtn btnPrev={true} >
            <Styled.PlayerBtnPrevSvg alt="prev">
                <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
            </Styled.PlayerBtnPrevSvg>
        </Styled.PlayerBtn>
        <Styled.PlayerBtn btnPrev={true} className="_btn">
            <Styled.PlayerBtnPlaySvg alt="play">
                <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
            </Styled.PlayerBtnPlaySvg>
        </Styled.PlayerBtn>
        <Styled.PlayerBtnNext >
            <Styled.PlayerBtnNextSvg alt="next">
                <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
            </Styled.PlayerBtnNextSvg>
        </Styled.PlayerBtnNext>
        <Styled.PlayerBtn btnPrev={true} className="_btn-icon">
            <Styled.PlayerBtnRepeatSvg alt="repeat">
                <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
            </Styled.PlayerBtnRepeatSvg>
        </Styled.PlayerBtn>
        <Styled.PlayerBtnShuffle className="_btn-icon">
            <Styled.PlayerBtnRepeatSvg alt="shuffle">
                <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
            </Styled.PlayerBtnRepeatSvg>
        </Styled.PlayerBtnShuffle>
    </Styled.PlayerControls>

    );

}
                