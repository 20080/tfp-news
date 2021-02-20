import Navbar from "./Navbar";
import {Link} from "react-router-dom";
const Header = ({newsHead}) => {

    return (
        <header className={'doWidth'}>
        <div className={'main-page-header'}>
            <h1 className={'header-text'}>{newsHead}</h1>
            <div className={'header-links'}>
                <ul>
                    <li><Link to ={'#'}>Stories </Link></li>
                    <li><a href={'#'}>Support </a></li>
                    <li><a href={'#'}>About </a></li>
                </ul>
            </div>
        </div>
            <Navbar/>
        </header>
    )
}

export default Header
