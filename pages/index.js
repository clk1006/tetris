import Head from 'next/head'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import pic0 from '../public/tetris0.png'
import pic1 from '../public/tetris1.png'
import pic2 from '../public/tetris2.png'
import pic3 from '../public/tetris3.png'
import pic4 from '../public/tetris4.png'
import pic5 from '../public/tetris5.png'
import pic6 from '../public/tetris6.png'
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBook,
  faCirclePlay,
  faCodeBranch,
  faEllipsis,
  faRedo
} from '@fortawesome/free-solid-svg-icons'

import getShape from "../lib/getShape"
import rotateArray from "../lib/rotateArray"

let state_temp = [0, Array(200).fill(0), { type: 0, pos: 0, rot: 0 }, 0]
const DIMENSIONS=[10,20]
const BLOCK_SIZE = 29
const BLOCK_COLORS = ["#327AB8", "#3AD9A7", "#FFC247", "#9951B3", "#CD4C4C"];
const BLOCK_BASE = "rgba(214, 215, 224)"
const BACKGROUND = "rgb(252, 249, 249)"
let contextTiles,contextCurr;

const getNeighbours = (tiles) => {
  return Array(tiles.reduce((a, b) => Math.max(a, b), 0))
    .fill(0)
    .map((_, id) => {
      id++;
      let neighbours = [];

      tiles.forEach((tileID, index) => {
        if (tileID == id) {
          for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
              if (
                0 <= (index % 10) + i < 10 &&
                0 <= Math.floor(index / 10) + j < 20 &&

                tiles[index + i + 10 * j] != tileID
              ) {
                neighbours.push(tiles[index + i + 10 * j]);
              }
            }
          }
        }
      });

      return neighbours;
    });
};
export default function Home() {
  const refTiles = useRef();
  const refCurr = useRef();
  const [state, setState] = useState(state_temp);
  const [gameState,setGameState] = useState(false);
  const [reload,setReload] = useState(0);
  useEffect(() => {
    if(gameState==1){
      contextTiles = refTiles.current.getContext('2d');
      contextCurr = refCurr.current.getContext('2d');
    }
  }, [gameState]);
  useEffect(async()=>{
    setState((await axios.get(`${location.origin}/api/api?type=getState`)).data)
    console.log(state)
  }, [reload])
  useEffect(() => {
    if(gameState==1){
      CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
        if (w < 2 * r) r = w / 2;
        if (h < 2 * r) r = h / 2;
        this.beginPath();
        this.moveTo(x+r, y);
        this.arcTo(x+w, y,   x+w, y+h, r);
        this.arcTo(x+w, y+h, x,   y+h, r);
        this.arcTo(x,   y+h, x,   y,   r);
        this.arcTo(x,   y,   x+w, y,   r);
        this.closePath();
        return this;
      }
      let tiles = state[1];
      let colors = [BLOCK_BASE];
  
      getNeighbours(tiles).forEach((neighbours, id) => {
        id++;
        neighbours = neighbours.filter((x) => x < id);
        colors.push(
          BLOCK_COLORS.filter(
            (x) => neighbours.reduce((a, b) => (a == colors[b] ? 0 : a), x) != 0
          )[0]
        );
      });
      
      contextTiles.fillStyle=BACKGROUND
      contextTiles.fillRect(0,0,10*BLOCK_SIZE+18,20*BLOCK_SIZE+38)
      tiles.forEach((id, i) => {
        contextTiles.fillStyle = colors[id];
        contextTiles.roundRect(
          31*(i%10) ,
          20*BLOCK_SIZE-(31 * (Math.floor(i / 10)+1))+41,
          BLOCK_SIZE,
          BLOCK_SIZE,
          2
        ).fill();
      });
      let tilesCurr=Array(40).fill(0)
      let shape=getShape(state[2])
      let posY=shape.length-1
      shape.forEach((row,y)=>row.forEach((v,x)=>{
        if(v==1){
          tilesCurr[(state[2].pos+x)+10*(posY-y)]=state[2].type+1
        }
      }))
      tilesCurr.forEach((v,i)=>{
        contextCurr.fillStyle = v==0 ? BLOCK_BASE : BLOCK_COLORS[v-1];
        contextCurr.roundRect(
          31*(i%10) ,
          4*BLOCK_SIZE-(31 * (Math.floor(i / 10)+1))+8,
          BLOCK_SIZE,
          BLOCK_SIZE,
          2
        ).fill();
      })
    }
  }, [state,gameState]);

  const [isActive, toggleActive] = useState(true);

  const handleToggle = () => {
    toggleActive(!isActive);
  };

  const handleKeyDown=(event)=>{
    let kc=event.keyCode
    let type
    if(kc==65||kc==37){
      type="moveLeft"
    }
    else if(kc==68||kc==39){
      type="moveRight"
    }
    else if(kc==81){
      type="rotLeft"
    }
    else if(kc==69){
      type="rotRight"
    }
    else if(kc==83||kc==40){
      type="endTurn"
    }
    axios.get(`${location.origin}/api/api?type=${type}`)
    setReload(reload+1)
  }

  const handleKeyUp=(event)=>{

  }

  useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('keyup', handleKeyUp);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('keyup', handleKeyUp);
		};
	});
  return (
    <div className={styles.container}>
      <Head>
        <title>Tetris</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;700;900&family=Roboto+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      
      <main className={styles.main}>
        <div className={`nav-bar ${isActive ? "" : "active"}`}>
          <div className="menu-icon" onClick={handleToggle}>
            <FontAwesomeIcon className="icon" icon={faEllipsis} />
          </div>
          <div className="menu-opts">
            <a className="opt-link" href="https://github.com/clk1006/tetris" target="_blank" rel="noreferrer">
              <div className="menu-opt">
                <FontAwesomeIcon className="icon" icon={faCodeBranch} />
                <span>GitHub</span>
              </div>
            </a>
            <a className="opt-link" href="docs">
              <div className="menu-opt">
                <FontAwesomeIcon className="icon" icon={faBook} />
                <span>Docs</span>
              </div>
            </a>
            <a className="opt-link play-btn" href="./">
              <div className="menu-opt">
                <FontAwesomeIcon className="icon" icon={faCirclePlay} />
                <span>Play Tetris</span>
              </div>
            </a>
          </div>
        </div>

        <div className="container">
          {
            gameState > 0 &&
            <div className="block">
              <div className="screen-container">
                <canvas height={4*BLOCK_SIZE+6} width={DIMENSIONS[0]*BLOCK_SIZE+2*(DIMENSIONS[0]-1)} ref={refCurr} />
              </div>
              <div className="screen-container">
                <canvas height={DIMENSIONS[1]*BLOCK_SIZE+2*[DIMENSIONS[1]-1]} width={DIMENSIONS[0]*BLOCK_SIZE+2*(DIMENSIONS[0]-1)} ref={refTiles} />
              </div>
            </div>
          }
          <div className="block">
            {
              gameState > 0 &&
              <div className="screen-container">
                <h2>Next block</h2>
                <Image className="image-box" width="122" height="122" src={
                  state[3]==0?pic0:state[3]==1?pic1:state[3]==2?pic2:state[3]==3?pic3:state[3]==4?pic4:state[3]==5?pic5:pic6
                }/>
              </div>
            }
            
            {
              gameState > 0&&
              <div className="screen-container">
                <div className="nextElement-block"></div>
                <div className="info-block">
                  <div className="info-container">
                    <h2>Statistics</h2>

                    <div className="stats-container">
                      <div className="stat-container">
                        <span>Current score: </span>
                        <span className="output output-score">OUTPUT</span>
                      </div>
                      <div className="stat-container">
                        <span>Current high-score: </span>
                        <span className="output output-high-score">OUTPUT</span>
                      </div>
                      <div className="stat-container">
                        <span>Current seed: </span>
                        <span className="output output-seed">OUTPUT</span>
                      </div>
                      <div className="stat-container">
                        <span>Moves left: </span>
                        <span className="output moves-left">OUTPUT</span>
                      </div>
                    </div>

                    <h2>Bindings</h2>

                    <div className="bindings-container">
                      <div className="binding-container">
                        <span className="output output-binding-mleft">A, Left</span>
                        <span> — Move left</span>
                      </div>
                      <div className="binding-container">
                        <span className="output output-binding-mright">D, Right</span>
                        <span> — Move right</span>
                      </div>
                      <div className="binding-container">
                        <span className="output output-binding-rleft">Q</span>
                        <span> — Rotate left</span>
                      </div>
                      <div className="binding-container">
                        <span className="output output-binding-rright">E</span>
                        <span> — Rotate right</span>
                      </div>
                      <div className="binding-container">
                        <span className="output binding-drop">S, Down</span>
                        <span> — Drop block</span>
                      </div>
                    </div>
                  </div>
                  <button className="restart-btn btn">
                    <div className="btn-emblem">
                      <FontAwesomeIcon className="icon" icon={faRedo} />
                    </div>
                  Restart</button>
                </div>
              </div>
            }
            {
              gameState == 0 &&
              <div className="screen-container">
                <div className="nextElement-block"></div>
                <div className="info-block">
                  <div className="info-container">
                    <h1>Play Tetris</h1>

                    <p>Click on the start button below to start tetris via client.</p>

                    <h2>Bindings</h2>

                    <div className="bindings-container">
                      <div className="binding-container">
                        <span className="output output-binding-mleft">A, Left</span>
                        <span> — Move left</span>
                      </div>
                      <div className="binding-container">
                        <span className="output output-binding-mright">D, Right</span>
                        <span> — Move right</span>
                      </div>
                      <div className="binding-container">
                        <span className="output output-binding-rleft">Q</span>
                        <span> — Rotate left</span>
                      </div>
                      <div className="binding-container">
                        <span className="output output-binding-rright">E</span>
                        <span> — Rotate right</span>
                      </div>
                      <div className="binding-container">
                        <span className="output binding-drop">S, Down</span>
                        <span> — Drop block</span>
                      </div>
                    </div>
                  </div>

                  <button className="start-btn btn" onClick={(event)=>{
                    setGameState(1);
                  }}>
                    <div className="btn-emblem">
                      <FontAwesomeIcon icon={faCirclePlay} />
                    </div>
                  Start</button>
                </div>
              </div>
            }
          </div>
        </div>

        {
          gameState==2 &&
          <div className="pop-up-frame">
            {/* Exception for clients running out of tiles */}
            <div className="game-fail-popup screen-container">
              <h2>Game over</h2>
              <p className="error">You&#39ve reached the end of the game field, but you can surely perform better next time.</p>
              <div className="stat-container">
                <span>Your score: </span>
                <span className="output output-score">OUTPUT</span>
              </div>
              <div className="stat-container">
                <span>Your high-score: </span>
                <span className="output output-high-score">OUTPUT</span>
              </div>
              <p>You may try again via the button below.</p>
              <button className="restart-btn btn" onClick={
                setGameState(1)
              }>
                <div className="btn-emblem">
                  <FontAwesomeIcon icon={faRedo} />
                </div>
              Restart</button>
            </div>
          </div>
        }
      </main>
    </div>
  );
}