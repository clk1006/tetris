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
                        <h1>How to visualize your project</h1>

                        <hr/>

                        <p>There are <b>2 ways</b> in which you can visualize your work.</p>
                        <p>For both of them to work, you must of course use the functions/requests provided by the API accordingly.</p>

                        <hr/>

                        <h2>1. Let your program play via the server that provides the API</h2>
                        <p>If you want to hook up your project with the server that provides the API, you will need to send the requests to the originated server. The current URL to that server is:</p>
                        <p className='code-field'>https://tetris-em.vercel.app</p>
                        <p>Further important is that you use a custom gameID that is unique. It is recommended that you follow the logics of the template, so that each started game of yours is assigned a unique ID. The assigned ID will need to be printed in order to access the gameID manually.</p>
                        <p>As soon as you are able to get an insight in your gameID, you will be able to observe the requests visually, that are send to the server. For that, you will need to append the gameID to the originated server in your browser manually as following:</p>
                        <p className='code-field'>https://tetris-em.vercel.app?<span className='syntax parameter'>gameID</span>=<span className='syntax request'>id</span></p>
                    </div>
                </div>
            </main>
        </div>
    );
};