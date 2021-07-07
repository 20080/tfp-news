import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import Storybox from "./Storybox";
const Header = ({newsHead}) => {

    return (
        <header className={'doWidth'}>
        <div className={'main-page-header'}>
            <h1><Link className={'header-text'} to={'/'}>{newsHead}</Link></h1>
            <div className={'header-links'}>
                <ul>
                    <li><Link to ={'#'}>Stories </Link></li>
                    <li><Link to={'#'}>Support </Link></li>
                    <li><Link to={'#'}>About </Link></li>
                </ul>
            </div>
        </div>
            <Navbar/>
            <Storybox/>
        </header>
    )
}

export default Header
