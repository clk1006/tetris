import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBook, faCirclePlay, faCodeBranch, faEllipsis} from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    const [gameID, setGameID] = useState(0)
    const [isActive, toggleActive] = useState(true);
    const [inputErrorState, setInputErrorState] = useState(false);

    const handleToggle = () => {
        toggleActive(!isActive);
    };

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
                        <FontAwesomeIcon className="icon" icon={faEllipsis}/>
                    </div>
                    <div className="menu-opts">
                        <a className="opt-link" href="https://github.com/clk1006/tetris" target="_blank"
                           rel="noreferrer">
                            <div className="menu-opt">
                                <FontAwesomeIcon className="icon" icon={faCodeBranch}/>
                                <span>GitHub</span>
                            </div>
                        </a>
                        <a className="opt-link" href="https://tetrisui.vercel.app/docs" target="_blank"
                           rel="noreferrer">
                            <div className="menu-opt">
                                <FontAwesomeIcon className="icon" icon={faBook}/>
                                <span>Docs</span>
                            </div>
                        </a>
                        <a className="opt-link action-btn" href="https://tetrisui.vercel.app" target="_blank"
                           rel="noreferrer">
                            <div className="menu-opt">
                                <FontAwesomeIcon className="icon" icon={faCirclePlay}/>
                                <span>Front-end Game</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="container">
                    <div className="screen-container">
                        <h2>Please enter your gameID</h2>
                        <div className="inline-block">
                            <input className="input-field" type="text" placeholder="id" onChange = {
                                e => {
                                    let input = parseInt(e.target.value) || false;

                                    if (input === false) {
                                        setInputErrorState(true);
                                    } else {
                                        setGameID(input)
                                        setInputErrorState(false);
                                    }
                                    
                                }
                            }/>
                            <a className='action-btn' disabled={inputErrorState} href={
                                "game?gameId=" + gameID
                            }>Go to game</a>
                        </div>
                        {
                            inputErrorState &&
                            <p className="error">Please enter an integer as an integer.</p>
                        }
                    </div>
                </div>
            </main>
        </div>
    );
}