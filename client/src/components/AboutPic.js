import AboutCPic from "./AboutCPic.png";
import 'tailwindcss/tailwind.css';
// import Matches from './Matches.png';



function AboutPic() {
    return (
    <div class="mx-auto">
    <div class="mb-10 items-right">
        <img class = "mt-28 h-2/3 w-max scale-150" src ={AboutCPic} alt="matchbox"/>
    </div>
    </div>
    )

    }

export default AboutPic;
// "container mx-auto items-right pl-72 pt-32 pb-32"