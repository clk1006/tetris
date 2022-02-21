import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faCirclePlay,
  faCodeBranch,
  faEllipsis
} from '@fortawesome/free-solid-svg-icons';

export default function Docs() {
    const [isActive, toggleActive] = useState(true);

    const handleToggle = () => {
        toggleActive(!isActive);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Tetris</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            
            <main className={styles.main}>
                <div className={`nav-bar ${isActive ? "active" : ""}`}>
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
                        <a className="opt-link current" href="../docs">
                            <div className="menu-opt">
                                <FontAwesomeIcon className="icon" icon={faBook} />
                                <span>Docs</span>
                            </div>
                        </a>
                        <a className="opt-link" href="../docs/gameId">
                            <div className="menu-opt secondary">
                                <span>gameId</span>
                            </div>
                        </a>
                        <a className="opt-link" href="../docs/seed">
                            <div className="menu-opt secondary">
                                <span>seed</span>
                            </div>
                        </a>
                        <a className="opt-link" href="../docs/type">
                            <div className="menu-opt secondary">
                                <span>type</span>
                            </div>
                        </a>
                        <a className="opt-link play-btn" href="../">
                            <div className="menu-opt">
                                <FontAwesomeIcon className="icon" icon={faCirclePlay} />
                                <span>Play Tetris</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="container">
                    <div className="content-block">
                        <h1>type</h1>
                        <hr></hr>
                    </div>
                </div>
                
            </main>
        </div>      
    );
};