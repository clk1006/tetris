import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faBook,
    faCirclePlay, faCode,
    faCodeBranch,
    faEllipsis,
    faExternalLink,
    faExternalLinkSquare, faQuestion,
    faAnchor
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
                <meta name="description" content="Generated by create next app"/>
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
                        <a className="opt-link" href="docs">
                            <div className="menu-opt">
                                <FontAwesomeIcon className="icon" icon={faBook}/>
                                <span>Docs</span>
                            </div>
                        </a>
                        <a className="opt-link action-btn" href="./">
                            <div className="menu-opt">
                                <FontAwesomeIcon className="icon" icon={faCirclePlay}/>
                                <span>Play Tetris</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="container">
                    <div className="content-block">
                        <h1>Docs</h1>

                        <hr/>

                        <h2>Description</h2>
                        <p>This project was created in the course of the teaching unit &#34;AI&#34; in the 4th semester
                            by the computer science class 20/21/22 of the Eimsbütteler Modell.</p>
                        <p>The project is based on a modified version of the puzzle-like computer game Tetris without a
                            real-time factor, which can be used by both human and artificial agents. </p>

                        <hr/>

                        <h2>Links</h2>

                        <div className="ref-container">
                            <a href="./docs/docs">
                                <div className="reference-box">
                                    <FontAwesomeIcon className="ref-box-icon" icon={faQuestion}></FontAwesomeIcon>
                                    <h2>What does this project provide?</h2>
                                    <p>Here you will be redirected to the documentation, where all available parameters of the API are listed and explained.</p>
                                </div>
                            </a>

                            <a href="https://colab.research.google.com/drive/1IkQt0nKpuxtva8Mg8FE_icRb2A2MyrL3?usp=sharing"
                               target="_blank" rel="noreferrer">
                                <div className="reference-box">
                                    <FontAwesomeIcon className="ref-box-icon" icon={faCode}></FontAwesomeIcon>
                                    <h2>How can I use the given API to create my own AI/algorithm?</h2>
                                    <p>We found it appropriate to use Python (i.e. in <a
                                        href="https://colab.research.google.com/" target="_blank" rel="noreferrer">Google Colab <FontAwesomeIcon
                                        size="xs" icon={faExternalLink}/></a>) for such a project. For this, we have prepared a template to help you get started.</p>
                                </div>
                            </a>

                            <a href="../">
                                <div className="reference-box">
                                    <FontAwesomeIcon className="ref-box-icon" icon={faCirclePlay}></FontAwesomeIcon>
                                    <h2>How can I play the front-end version via client?</h2>
                                    <p>Click here to get redirected to the index page, on which you can play the front-end version of our game.</p>
                                </div>
                            </a>

                            <a href="">
                                <div className="reference-box">
                                    <FontAwesomeIcon className="ref-box-icon" icon={faAnchor}></FontAwesomeIcon>
                                    <h2>How can I 'hook up' my own Algorithm/AI with the server to observe it playing?</h2>
                                    <p>Here you will find a small comprehensive guide to 'hook up' your Algorithm/AI and watch it playing.</p>
                                </div>
                            </a>
                        </div>

                        <hr/>

                        <h2>License</h2>
                        <p className="license"><a href="https://github.com/clk1006/tetris/blob/main/LICENSE"
                                                  target="_blank" rel="noreferrer">GNU GPL Version 3 <FontAwesomeIcon
                            size="xs" icon={faExternalLink}/></a>, 29 June 2007</p>
                        <p className="license">Copyright (C) 2007 Free Software Foundation, Inc. <a
                            href="https://fsf.org/" target="_blank" rel="noreferrer">https://fsf.org/ <FontAwesomeIcon
                            size="xs" icon={faExternalLink}/></a></p>
                    </div>
                </div>
            </main>
        </div>
    );
};