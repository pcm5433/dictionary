import {Routes, Route, Link} from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <>
            <header id='header'>
                <h1><Link to="/">FRONT-END</Link></h1>
                <div id='icon_wrap'>
                <Link to="/write"><div className='window_write'></div></Link>
                    <div className='window_re'></div>
                    <div className='window_x'></div>
                </div>
            </header>
            <div id='adress_wrap'>
                <div>
                    <p>http://www.chaemin-s-front-end.com</p>
                </div>
            </div>
        </>
    )
}

export default Header;