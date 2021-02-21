import {Link} from "react-router-dom";

const RecentList = ()=>{
    return(
        <div className={'recentStory'}>
            <div id={'recentList-Header'}><Link>
                <h1>Recent</h1>
                <h2> Articles</h2>
            </Link>
            </div>
        <ul className={'RecentList'}>
            <li><Link>Item 1 Extra Text</Link></li>
            <li><Link>Item 2 Extra Text</Link></li>
            <li><Link>Item 3 Extra Text</Link></li>
            <li><Link>Item 4 Extra Text</Link></li>
            <li><Link>Item 5 Extra Text</Link></li>
        </ul>
        </div>
    )
}
export default RecentList