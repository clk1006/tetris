import Head from 'next/head';
import RoleBadge from "../../components/RoleBadge";
import styles from '../../styles/Home.module.css';
import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faAnchor,
    faAngleLeft,
    faBook,
    faCirclePlay,
    faCode,
    faCodeBranch,
    faEllipsis,
    faExternalLink,
    faPlay,
    faPuzzlePiece,
    faQuestion
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
                    <div className="menu-icons">
                        <a href="." className="menu-icon nav-back">
                            <FontAwesomeIcon className="icon" icon={faAngleLeft}/>
                        </a>
                        <div className="menu-icon" onClick={handleToggle}>
                            <FontAwesomeIcon className="icon" icon={faEllipsis}/>
                        </div>
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
                            by the computer science class 2021/2022 of the Eimsbütteler Modell.</p>
                        <p>The project is a self-developed creation based on the puzzle-like computer game Tetris,
                            which can be used by both human and artificial agents.</p>

                        <hr/>

                        <h2>References</h2>

                        <p>Please read through the following reference-boxes. They contain all relevant information you need to know about this API and how to use it.</p>

                        <div className="ref-container">
                            <div className="block">
                                <a href="./docs/docs">
                                    <div className="reference-box">
                                        <FontAwesomeIcon className="ref-box-icon" icon={faQuestion}></FontAwesomeIcon>
                                        <h2>What does this API provide?</h2>
                                        <p>Here you will find everything that is provided by the API.</p>
                                    </div>
                                </a>

                                <a href="https://colab.research.google.com/drive/1IkQt0nKpuxtva8Mg8FE_icRb2A2MyrL3?usp=sharing"
                                   target="_blank" rel="noreferrer">
                                    <div className="reference-box">
                                        <FontAwesomeIcon className="ref-box-icon" icon={faCode}></FontAwesomeIcon>
                                        <h2>How can I use the API to create my own AI/algorithm? <FontAwesomeIcon
                                            size="xs"
                                            icon={faExternalLink}/></h2>
                                        <p>We found it appropriate to use Python (i.e. in <a
                                            href="https://colab.research.google.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-link">Google Colab <FontAwesomeIcon
                                            size="xs" icon={faExternalLink}/></a>) for such a project. Click here to
                                            get redirected to a prepared template to help you get started.</p>
                                    </div>
                                </a>

                                <a href="../">
                                    <div className="reference-box">
                                        <FontAwesomeIcon className="ref-box-icon" icon={faPlay}></FontAwesomeIcon>
                                        <h2>How can I play the front-end version via client in browser?</h2>
                                        <p>Click here to get redirected to the index page, on which you can play the
                                            front-end version of the game.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="block">
                                <a href="./docs/access-api">
                                    <div className="reference-box">
                                        <FontAwesomeIcon className="ref-box-icon" icon={faAnchor}></FontAwesomeIcon>
                                        <h2>How can I &#39;hook up&#39; my own Algorithm/AI with the server to remotely
                                            control a custom game?</h2>
                                        <p>Here you will find a guide to access a (or the main) server instance for your
                                            Algorithm/AI.</p>
                                    </div>
                                </a>

                                <a href="https://tetris-em.herokuapp.com"
                                   target="_blank" rel="noreferrer">
                                    <div className="reference-box">
                                        <FontAwesomeIcon className="ref-box-icon" icon={faPuzzlePiece}></FontAwesomeIcon>
                                        <h2>tetris-em.herokuapp.com <FontAwesomeIcon
                                            size="xs"
                                            icon={faExternalLink}/></h2>
                                        <p>This link redirects you to the <b>new</b> API server.</p>
                                    </div>
                                </a>

                                <a href="https://tetris-em.vercel.app"
                                   target="_blank" rel="noreferrer">
                                    <div className="reference-box">
                                        <FontAwesomeIcon className="ref-box-icon" icon={faPuzzlePiece}></FontAwesomeIcon>
                                        <h2>tetris-em.vercel.app <FontAwesomeIcon
                                            size="xs"
                                            icon={faExternalLink}/></h2>
                                        <p>This link redirects you to the <b>old</b> API server.</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <hr/>

                        <h2>Team</h2>

                        <p>This is a project by the S4 computer science class 2021/2022 of the Eimsbütteler Modell.</p>

                        <ul>
                            <li>
                                <RoleBadge role="author infra" name="Caspar Levin Kiehn" roletype="api" ghname="clk1006"/>
                            </li>
                            <li>
                                <RoleBadge role="author infra" name="Jamil Osoria Peralta" roletype="web" ghname="bananeira"/>
                            </li>
                            <li>
                                <RoleBadge role="ai infra" name="Felix Eberle"/>
                            </li>
                            <li>
                                <RoleBadge role="ai infra" name="Tang"/>
                            </li>
                            <li>
                                <RoleBadge role="infra" name="Furkan Is"/>
                            </li>
                            <li>
                                <RoleBadge role="management" name="Paul-Felix Korm"/>
                            </li>
                            <li>
                                <RoleBadge role="management" name="Elsa"/>
                            </li>
                            <li>
                                <RoleBadge role="ai" name="Ben"/>
                            </li>
                            <li>
                                <RoleBadge role="ai" name="Theo"/>
                            </li>
                            <li>
                                <RoleBadge role="ai" name="Viktor Sersik"/>
                            </li>
                            <li>
                                <RoleBadge role="ai" name="Ole"/>
                            </li>
                            <li>
                                <RoleBadge role="ai" name="Felix H."/>
                            </li>
                            <li>
                                <RoleBadge role="ai" name="Lin"/>
                            </li>
                            <li>
                                <RoleBadge role="ai" name="Dam Huyen My"/>
                            </li>
                            <li>
                                <RoleBadge role="ai" name="Raul Ketil Meyer-Larsen"/>
                            </li>
                            <li>
                                <RoleBadge role="ai" name="Felix Mohrhagen"/>
                            </li>
                            <li>
                                <RoleBadge role="theory" name="Henrik"/>
                            </li>
                            <li>
                                <RoleBadge role="theory" name="Paul"/>
                            </li>
                        </ul>

                        <hr/>

                        <h2>License</h2>
                        <p className="license"><a href="https://github.com/clk1006/tetris/blob/main/LICENSE"
                                                  className="text-link"
                                                  target="_blank" rel="noreferrer">GNU GPL Version 3 <FontAwesomeIcon
                            size="xs" icon={faExternalLink}/></a>, 29 June 2007</p>
                    </div>
                    
                    <div className="screen-container device-warning">
                        <h2>Sorry, there is nothing to see here :/</h2>
                        <p className="error">Please use a device with a bigger display. This application is not designed for small medias.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};