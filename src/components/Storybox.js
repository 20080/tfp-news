import Story from "./Story";
import RecentList from "./RecentList";

const Storybox = () =>{
    return(
        <div className={'Storybox'}>
            <div id={'image-wrap'}>
                <img  src={'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'} alt={'Image'}/>
                <Story/>
            </div>

        <RecentList />
        </div>
    )
}
export default Storybox