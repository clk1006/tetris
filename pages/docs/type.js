import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
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
                <meta name="description" content="Generated by create next app"/>
            </Head>

            <main className={styles.main}>
                <div className={`nav-bar ${isActive ? "active" : ""}`}>
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
                        <a className="opt-link current" href="../docs">
                            <div className="menu-opt">
                                <FontAwesomeIcon className="icon" icon={faBook}/>
                                <span>Docs</span>
                            </div>
                        </a>
                        <a className="opt-link secondary" href="../docs/gameId">
                            <div className="menu-opt">
                                <span>gameId</span>
                            </div>
                        </a>
                        <a className="opt-link secondary" href="../docs/seed">
                            <div className="menu-opt">
                                <span>seed</span>
                            </div>
                        </a>
                        <a className="opt-link secondary" href="../docs/type">
                            <div className="menu-opt">
                                <span>type</span>
                            </div>
                        </a>
                        <a className="opt-link action-btn" href="../">
                            <div className="menu-opt">
                                <FontAwesomeIcon className="icon" icon={faCirclePlay}/>
                                <span>Play Tetris</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="container">
                    <div className="content-block">
                        <h1>type</h1>
                        <hr></hr>
                        <h2>Format</h2>
                        <p>The parameter type must be passed in by appending them to the originated adress
                            accordingly:</p>
                        <p className="code-field">api/api?type</p>
                        <hr></hr>
                        <h2>Requests</h2>
                        <p></p>
                        <p>Without passing a request, the parameter type returns the default case, which issues status
                            code <span className="tag">400</span>.</p>
                        <ul>
                            <li>
                                <p><span className="tag">getState</span>
                                    Returns a list containing 5 relevant objects concatenated, including:
                                    <br></br>
                                    <span className='tag'>score</span>, which returns a value as an <span className='tag'>int</span>.
                                    <br></br>
                                    <span className='tag'>tiles</span>, which returns an <span className='tag'>Array</span> containing all tiles in order from bottom left to top right, regarding wrapped tile order.
                                    <br></br>
                                    <span className='tag'>current block</span>, which returns an <span className='tag'>Array</span> containing the <span className='tag'>block type id (int)</span> including
                                    <ul>
                                        <li>
                                            id: <span className='tag'>0</span>
                                            <br></br>
                                            <p className='code-field'>
                                                [1, 1, 1, 1]
                                            </p>
                                        </li>
                                        <li>
                                            id: <span className='tag'>1</span>
                                            <br></br>
                                            <p className='code-field'>
                                                [0, 1, 0],
                                                <br></br>
                                                [1, 1, 1]
                                            </p>
                                        </li>
                                        <li>
                                            id: <span className='tag'>2</span>
                                            <br></br>
                                            <p className='code-field'>
                                                [1, 1, 0],
                                                <br></br>
                                                [0, 1, 1]
                                            </p>
                                        </li>
                                        <li>
                                            id: <span className='tag'>3</span>
                                            <br></br>
                                            <p className='code-field'>
                                                [0, 1, 1],
                                                <br></br>
                                                [1, 1, 0]
                                            </p>
                                        </li>
                                        <li>
                                            id: <span className='tag'>4</span>
                                            <br></br>
                                            <p className='code-field'>
                                                [1, 0, 0],
                                                <br></br>
                                                [1, 1, 1]
                                            </p>
                                        </li>
                                        <li>
                                            id: <span className='tag'>5</span>
                                            <br></br>
                                            <p className='code-field'>
                                                [0, 0, 1],
                                                <br></br>
                                                [1, 1, 1]
                                            </p>
                                        </li>
                                        <li>
                                            id: <span className='tag'>6</span>
                                            <br></br>
                                            <p className='code-field'>
                                                [1, 1],
                                                <br></br>
                                                [1, 1]
                                            </p>
                                        </li>
                                    </ul>
                                    , <span className='tag'>block type id (int)</span>.
                                    <br></br>
                                    <span className='tag'>game state</span>, which returns an <span className='tag'>Array</span> containing all tiles in order from bottom left to top right, regarding wrapped tile order.
                                </p>
                            </li>
                            <li>
                                <p><span className="tag">endTurn</span>
                                    Description here
                                </p>
                            </li>
                            <li>
                                <p><span className="tag">moveLeft</span>
                                    Description here
                                </p>
                            </li>
                            <li>
                                <p><span className="tag">moveRight</span>
                                    Description here
                                </p>
                            </li>
                            <li>
                                <p><span className="tag">rotLeft</span>
                                    Description here
                                </p>
                            </li>
                            <li>
                                <p><span className="tag">rotRight</span>
                                    Description here
                                </p>
                            </li>
                            <li>
                                <p><span className="tag">getId</span>
                                    Description here
                                </p>
                            </li>
                            <li>
                                <p><span className="tag">reset</span>
                                    Description here
                                </p>
                            </li>
                        </ul>
                        <hr></hr>
                        <h2>Usage</h2>
                        <p>To send a certain request, it must be appended to the origin format.</p>
                        <p>The example format shown below is to be used for every request:</p>
                        <p className="code-field">
                            api/api?type=getState<br/>
                            &#47;&#47;Returns:
                            [0,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],&#123;&#34;
                            type&#34;:0,&#34;pos&#34;:4,&#34;rot&#34;:0,&#34;movesLeft&#34;:10&#125;,0,false]
                        </p>
                    </div>
                </div>

            </main>
        </div>
    );
};