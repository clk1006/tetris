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

let state_temp = [0, Array(200).fill(0), { type: 0, pos: 0, rot: 0 }, 0]
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
  const [started,setStarted] = useState(false);
  useEffect(() => {
    contextTiles = refTiles.current.getContext('2d');
    contextCurr = refCurr.current.getContext('2d');
  }, []);

  useEffect(() => {
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
    Array(40).fill(0).forEach((_,i)=>{
      contextCurr.fillStyle = BLOCK_BASE;
      contextCurr.roundRect(
        31*(i%10) ,
        4*BLOCK_SIZE-(31 * (Math.floor(i / 10)+1))+8,
        BLOCK_SIZE,
        BLOCK_SIZE,
        2
      ).fill();
    })
  }, [state]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Tetris</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;700;900&family=Roboto+Mono:wght@300;400&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <div className="container">
          <div className="block">
            <div className="screen-container">
              <canvas height={4*BLOCK_SIZE+6} width={10*BLOCK_SIZE+18} ref={refCurr} />
            </div>
            <div className="screen-container">
              <canvas height={20*BLOCK_SIZE+39} width={10*BLOCK_SIZE+18} ref={refTiles} />
            </div>
          </div>
          <div className="block">
            <div className="screen-container">
              <Image width="122" height="122" src={
                state[3]==0?pic0:state[3]==1?pic1:state[3]==2?pic2:state[3]==3?pic3:state[3]==4?pic4:state[3]==5?pic5:pic6
              }/>
            </div>
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
                      <span className="output binding-drop">S, Enter</span>
                      <span> — Drop block</span>
                    </div>
                  </div>
                </div>
                {
                  started || <button className="start-btn">&#9654; Start</button>
                }
                {
                  started && <button className="restart-btn">&#8635; Restart</button>
                }
              </div>
            </div>
          </div>   
        </div>
      </main>
    </div>
  );
}