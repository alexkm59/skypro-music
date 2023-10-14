import React, {useState} from 'react';
// import '../components/PlaylistContent/playListContent.css';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as Styled from './playListContent.styled';

export function PlayListContent (props) {

const  [isLoading, setLoading] = useState(false);
setTimeout(()=>{
  setLoading(true)
},4000)
  return(
                <Styled.PlaylistItem >
                  <Styled.PlaylistTrack className="track">
                    <Styled.TrackTitle>
                    
                      <Styled.TrackTitleImage >
                        {isLoading ? <Styled.TrackTitleSvg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </Styled.TrackTitleSvg> : <Skeleton/> }
                        
                      </Styled.TrackTitleImage>
                      <div className="track__title-text">
                      <SkeletonTheme baseColor="#313131" highlightColor="#fff" height={20} width={356}>
                        {isLoading ? <Styled.TrackTitleLink href="http://">{props.trackName} <Styled.TrackTitleSpan></Styled.TrackTitleSpan></Styled.TrackTitleLink> : <Skeleton/> }
                        </SkeletonTheme>
                      </div>
                    </Styled.TrackTitle>

                    <Styled.TrackAuthor className="track__author">
                    <SkeletonTheme baseColor="#313131" highlightColor="#fff" height={20} width={272}>
                        {isLoading ? <Styled.TrackAuthorLink  href="http://">{props.trackAuthor}</Styled.TrackAuthorLink> : <Skeleton/> }
                        </SkeletonTheme>
                         
                    </Styled.TrackAuthor>
                    <Styled.TrackAlbum >
                    <SkeletonTheme baseColor="#313131" highlightColor="#fff" height={20} width={250}>
                        {isLoading ? <Styled.TrackAlbumLink className="track__album-link" href="http://">{props.album}</Styled.TrackAlbumLink> : <Skeleton/> }
                        </SkeletonTheme>
                      
                    </Styled.TrackAlbum>
                    <div className="track__time">
                      <Styled.TrackTimeSvg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </Styled.TrackTimeSvg>
                      
                      <Styled.TrackTimeText className="track__time-text"> {isLoading ? props.trackTime : '0.00'}</Styled.TrackTimeText>
                   
                    </div>
                  </Styled.PlaylistTrack>
                </Styled.PlaylistItem>

                // <div className="playlist__item">
                //   <div className="playlist__track track">
                //     <div className="track__title">
                //       <div className="track__title-image">
                //         <svg className="track__title-svg" alt="music">
                //           <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                //         </svg>
                //       </div>
                //       <div className="track__title-text">
                //         <a className="track__title-link" href="http://"
                //           >Elektro <span className="track__title-span"></span
                //         ></a>
                //       </div>
                //     </div>
                //     <div className="track__author">
                //       <a className="track__author-link" href="http://"
                //         >Dynoro, Outwork, Mr. Gee</a
                //       >
                //     </div>
                //     <div className="track__album">
                //       <a className="track__album-link" href="http://">Elektro</a>
                //     </div>
                //     <div className="track__time">
                //       <svg className="track__time-svg" alt="time">
                //         <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                //       </svg>
                //       <span className="track__time-text">2:22</span>
                //     </div>
                //   </div>
                // </div>

                // <div className="playlist__item">
                //   <div className="playlist__track track">
                //     <div className="track__title">
                //       <div className="track__title-image">
                //         <svg className="track__title-svg" alt="music">
                //           <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                //         </svg>
                //       </div>
                //       <div className="track__title-text">
                //         <a className="track__title-link" href="http://"
                //           >I’m Fire <span className="track__title-span"></span
                //         ></a>
                //       </div>
                //     </div>
                //     <div className="track__author">
                //       <a className="track__author-link" href="http://"
                //         >Ali Bakgor</a
                //       >
                //     </div>
                //     <div className="track__album">
                //       <a className="track__album-link" href="http://">I’m Fire</a>
                //     </div>
                //     <div className="track__time">
                //       <svg className="track__time-svg" alt="time">
                //         <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                //       </svg>
                //       <span className="track__time-text">2:22</span>
                //     </div>
                //   </div>
                // </div>

                // <div className="playlist__item">
                //   <div className="playlist__track track">
                //     <div className="track__title">
                //       <div className="track__title-image">
                //         <svg className="track__title-svg" alt="music">
                //           <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                //         </svg>
                //       </div>
                //       <div className="track__title-text">
                //         <a className="track__title-link" href="http://"
                //           >Non Stop
                //           <span className="track__title-span">(Remix)</span></a
                //         >
                //       </div>
                //     </div>
                //     <div className="track__author">
                //       <a className="track__author-link" href="http://"
                //         >Стоункат, Psychopath</a
                //       >
                //     </div>
                //     <div className="track__album">
                //       <a className="track__album-link" href="http://">Non Stop</a>
                //     </div>
                //     <div className="track__time">
                //       <svg className="track__time-svg" alt="time">
                //         <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                //       </svg>
                //       <span className="track__time-text">4:12</span>
                //     </div>
                //   </div>
                // </div>

                // <div className="playlist__item">
                //   <div className="playlist__track track">
                //     <div className="track__title">
                //       <div className="track__title-image">
                //         <svg className="track__title-svg" alt="music">
                //           <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                //         </svg>
                //       </div>
                //       <div className="track__title-text">
                //         <a className="track__title-link" href="http://"
                //           >Run Run
                //           <span className="track__title-span"
                //             >(feat. AR/CO)</span
                //           ></a
                //         >
                //       </div>
                //     </div>
                //     <div className="track__author">
                //       <a className="track__author-link" href="http://"
                //         >Jaded, Will Clarke, AR/CO</a
                //       >
                //     </div>
                //     <div className="track__album">
                //       <a className="track__album-link" href="http://">Run Run</a>
                //     </div>
                //     <div className="track__time">
                //       <svg className="track__time-svg" alt="time">
                //         <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                //       </svg>
                //       <span className="track__time-text">2:54</span>
                //     </div>
                //   </div>
                // </div>

                // <div className="playlist__item">
                //   <div className="playlist__track track">
                //     <div className="track__title">
                //       <div className="track__title-image">
                //         <svg className="track__title-svg" alt="music">
                //           <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                //         </svg>
                //       </div>
                //       <div className="track__title-text">
                //         <a className="track__title-link" href="http://"
                //           >Eyes on Fire
                //           <span className="track__title-span"
                //             >(Zeds Dead Remix)</span
                //           ></a
                //         >
                //       </div>
                //     </div>
                //     <div className="track__author">
                //       <a className="track__author-link" href="http://"
                //         >Blue Foundation, Zeds Dead</a
                //       >
                //     </div>
                //     <div className="track__album">
                //       <a className="track__album-link" href="http://"
                //         >Eyes on Fire</a
                //       >
                //     </div>
                //     <div className="track__time">
                //       <svg className="track__time-svg" alt="time">
                //         <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                //       </svg>
                //       <span className="track__time-text">5:20</span>
                //     </div>
                //   </div>
                // </div>

                // <div className="playlist__item">
                //   <div className="playlist__track track">
                //     <div className="track__title">
                //       <div className="track__title-image">
                //         <svg className="track__title-svg" alt="music">
                //           <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                //         </svg>
                //       </div>
                //       <div className="track__title-text">
                //         <a className="track__title-link" href="http://"
                //           >Mucho Bien
                //           <span className="track__title-span"
                //             >(Hi Profile Remix)</span
                //           ></a
                //         >
                //       </div>
                //     </div>
                //     <div className="track__author">
                //       <a className="track__author-link" href="http://"
                //         >HYBIT, Mr. Black, Offer Nissim, Hi Profile</a
                //       >
                //     </div>
                //     <div className="track__album">
                //       <a className="track__album-link" href="http://">Mucho Bien</a>
                //     </div>
                //     <div className="track__time">
                //       <svg className="track__time-svg" alt="time">
                //         <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                //       </svg>
                //       <span className="track__time-text">3:41</span>
                //     </div>
                //   </div>
                // </div>

                // <div className="playlist__item">
                //   <div className="playlist__track track">
                //     <div className="track__title">
                //       <div className="track__title-image">
                //         <svg className="track__title-svg" alt="music">
                //           <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                //         </svg>
                //       </div>
                //       <div className="track__title-text">
                //         <a className="track__title-link" href="http://"
                //           >Knives n Cherries
                //           <span className="track__title-span"></span
                //         ></a>
                //       </div>
                //     </div>
                //     <div className="track__author">
                //       <a className="track__author-link" href="http://">minthaze</a>
                //     </div>
                //     <div className="track__album">
                //       <a className="track__album-link" href="http://"
                //         >Captivating</a
                //       >
                //     </div>
                //     <div className="track__time">
                //       <svg className="track__time-svg" alt="time">
                //         <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                //       </svg>
                //       <span className="track__time-text">1:48</span>
                //     </div>
                //   </div>
                // </div>

                // <div className="playlist__item">
                //   <div className="playlist__track track">
                //     <div className="track__title">
                //       <div className="track__title-image">
                //         <svg className="track__title-svg" alt="music">
                //           <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                //         </svg>
                //       </div>
                //       <div className="track__title-text">
                //         <a className="track__title-link" href="http://"
                //           >Knives n Cherries
                //           <span className="track__title-span"></span
                //         ></a>
                //       </div>
                //     </div>
                //     <div className="track__author">
                //       <a className="track__author-link" href="http://">minthaze</a>
                //     </div>
                //     <div className="track__album">
                //       <a className="track__album-link" href="http://"
                //         >Captivating</a
                //       >
                //     </div>
                //     <div className="track__time">
                //       <svg className="track__time-svg" alt="time">
                //         <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                //       </svg>
                //       <span className="track__time-text">1:48</span>
                //     </div>
                //   </div>
                // </div>
                // <div className="playlist__item">
                //   <div className="playlist__track track">
                //     <div className="track__title">
                //       <div className="track__title-image">
                //         <svg className="track__title-svg" alt="music">
                //           <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                //         </svg>
                //       </div>
                //       <div className="track__title-text">
                //         <a className="track__title-link" href="http://"
                //           >Knives n Cherries
                //           <span className="track__title-span"></span
                //         ></a>
                //       </div>
                //     </div>
                //     <div className="track__author">
                //       <a className="track__author-link" href="http://">minthaze</a>
                //     </div>
                //     <div className="track__album">
                //       <a className="track__album-link" href="http://"
                //         >Captivating</a
                //       >
                //     </div>
                //     <div className="track__time">
                //       <svg className="track__time-svg" alt="time">
                //         <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                //       </svg>
                //       <span className="track__time-text">1:48</span>
                //     </div>
                //   </div>
                // </div>
                // <div className="playlist__item">
                //   <div className="playlist__track track">
                //     <div className="track__title">
                //       <div className="track__title-image">
                //         <svg className="track__title-svg" alt="music">
                //           <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                //         </svg>
                //       </div>
                //       <div className="track__title-text">
                //         <a className="track__title-link" href="http://"
                //           >Knives n Cherries
                //           <span className="track__title-span"></span
                //         ></a>
                //       </div>
                //     </div>
                //     <div className="track__author">
                //       <a className="track__author-link" href="http://">minthaze</a>
                //     </div>
                //     <div className="track__album">
                //       <a className="track__album-link" href="http://"
                //         >Captivating</a
                //       >
                //     </div>
                //     <div className="track__time">
                //       <svg className="track__time-svg" alt="time">
                //         <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                //       </svg>
                //       <span className="track__time-text">1:48</span>
                //     </div>
                //   </div>
                // </div>
                // <div className="playlist__item">
                //   <div className="playlist__track track">
                //     <div className="track__title">
                //       <div className="track__title-image">
                //         <svg className="track__title-svg" alt="music">
                //           <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                //         </svg>
                //       </div>
                //       <div className="track__title-text">
                //         <a className="track__title-link" href="http://"
                //           >Knives n Cherries
                //           <span className="track__title-span"></span
                //         ></a>
                //       </div>
                //     </div>
                //     <div className="track__author">
                //       <a className="track__author-link" href="http://">minthaze</a>
                //     </div>
                //     <div className="track__album">
                //       <a className="track__album-link" href="http://"
                //         >Captivating</a
                //       >
                //     </div>
                //     <div className="track__time">
                //       <svg className="track__time-svg" alt="time">
                //         <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                //       </svg>
                //       <span className="track__time-text">1:48</span>
                //     </div>
                //   </div>
                // </div>
                // <div className="playlist__item">
                //   <div className="playlist__track track">
                //     <div className="track__title">
                //       <div className="track__title-image">
                //         <svg className="track__title-svg" alt="music">
                //           <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                //         </svg>
                //       </div>
                //       <div className="track__title-text">
                //         <a className="track__title-link" href="http://"
                //           >Knives n Cherries
                //           <span className="track__title-span"></span
                //         ></a>
                //       </div>
                //     </div>
                //     <div className="track__author">
                //       <a className="track__author-link" href="http://">minthaze</a>
                //     </div>
                //     <div className="track__album">
                //       <a className="track__album-link" href="http://"
                //         >Captivating</a
                //       >
                //     </div>
                //     <div className="track__time">
                //       <svg className="track__time-svg" alt="time">
                //         <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                //       </svg>
                //       <span className="track__time-text">1:48</span>
                //     </div>
                //   </div>
                // </div>
                // <div className="playlist__item">
                //   <div className="playlist__track track">
                //     <div className="track__title">
                //       <div className="track__title-image">
                //         <svg className="track__title-svg" alt="music">
                //           <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                //         </svg>
                //       </div>
                //       <div className="track__title-text">
                //         <a className="track__title-link" href="http://"
                //           >Knives n Cherries
                //           <span className="track__title-span"></span
                //         ></a>
                //       </div>
                //     </div>
                //     <div className="track__author">
                //       <a className="track__author-link" href="http://">minthaze</a>
                //     </div>
                //     <div className="track__album">
                //       <a className="track__album-link" href="http://"
                //         >Captivating</a
                //       >
                //     </div>
                //     <div className="track__time">
                //       <svg className="track__time-svg" alt="time">
                //         <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                //       </svg>
                //       <span className="track__time-text">1:48</span>
                //     </div>
                //   </div>
                // </div>

                // <div className="playlist__item">
                //   <div className="playlist__track track">
                //     <div className="track__title">
                //       <div className="track__title-image">
                //         <svg className="track__title-svg" alt="music">
                //           <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                //         </svg>
                //       </div>
                //       <div className="track__title-text">
                //         <a className="track__title-link" href="http://"
                //           >How Deep Is Your Love
                //           <span className="track__title-span"></span
                //         ></a>
                //       </div>
                //     </div>
                //     <div className="track__author">
                //       <a className="track__author-link" href="http://"
                //         >Calvin Harris, Disciples</a
                //       >
                //     </div>
                //     <div className="track__album">
                //       <a className="track__album-link" href="http://"
                //         >How Deep Is Your Love</a
                //       >
                //     </div>
                //     <div className="track__time">
                //       <svg className="track__time-svg" alt="time">
                //         <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                //       </svg>
                //       <span className="track__time-text">3:32</span>
                //     </div>
                //   </div>
                // </div>

                // <div className="playlist__item">
                //   <div className="playlist__track track">
                //     <div className="track__title">
                //       <div className="track__title-image">
                //         <svg className="track__title-svg" alt="music">
                //           <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                //         </svg>
                //       </div>
                //       <div className="track__title-text">
                //         <a className="track__title-link" href="http://"
                //           >Morena <span className="track__title-span"></span
                //         ></a>
                //       </div>
                //     </div>
                //     <div className="track__author">
                //       <a className="track__author-link" href="http://">Tom Boxer</a>
                //     </div>
                //     <div className="track__album">
                //       <a className="track__album-link" href="http://"
                //         >Soundz Made in Romania</a
                //       >
                //     </div>
                //     <div className="track__time">
                //       <svg className="track__time-svg" alt="time">
                //         <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                //       </svg>
                //       <span className="track__time-text">3:36</span>
                //     </div>
                //   </div>
                // </div>

                // <div className="playlist__item">
                //   <div className="playlist__track track">
                //     <div className="track__title">
                //       <div className="track__title-image">
                //         <svg className="track__title-svg" alt="music">
                //           <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                //         </svg>
                //       </div>
                //       <div className="track__title-text">
                //         <a className="track__title-link" href="http://">
                //           <span className="track__title-span"></span
                //         ></a>
                //       </div>
                //     </div>
                //     <div className="track__author">
                //       <a className="track__author-link" href="http://"></a>
                //     </div>
                //     <div className="track__album">
                //       <a className="track__album-link" href="http://"></a>
                //     </div>
                //     <div className="track__time">
                //       <svg className="track__time-svg" alt="time">
                //         <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                //       </svg>
                //       <span className="track__time-text"></span>
                //     </div>
                //   </div>
                // </div>
              /* </div> */
)

}

