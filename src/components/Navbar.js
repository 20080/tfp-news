import {Link} from "react-router-dom";
const Navbar =()=>{
    return(
        <nav className={"navbar"} >
                <div>
                    <ul>
                        <li><Link to='World'>World </Link></li>
                        <li><Link to='National'>National </Link></li>
                        <li><Link to='Entertainment'>Entertainment </Link></li>
                        <li><Link to='Sports'>Sports </Link></li>
                        <li><Link to='Business'>Business </Link></li>
                    </ul>
                </div>
        </nav>
    )
}

export default Navbar