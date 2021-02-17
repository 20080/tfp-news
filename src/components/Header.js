const Header = ({newsHead}) => {
    return (
        <header className={'main-page-header'}>
            <h1 className={'header-text'}>{newsHead}</h1>
            <div className={'header-links'}>
                <ul>
                    <li><a href={'#'}>Stories </a></li>
                    <li><a href={'#'}>Support </a></li>
                    <li><a href={'#'}>About </a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header