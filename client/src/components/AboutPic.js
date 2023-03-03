import AboutCPic from "./AboutCPic.png";
import 'tailwindcss/tailwind.css';
// import Matches from './Matches.png';



function AboutPic() {
    return (
    <div class="mx-auto items-right pl-72 pt-32 pb-32">
    <div class=" mb-10 items-right">
        <img class = "h-1/4 pr-48 w-2/3 scale-150" src ={AboutCPic} alt="matchbox"/>
    </div>
    </div>
    )

    }

export default AboutPic;
// "container mx-auto items-right pl-72 pt-32 pb-32"