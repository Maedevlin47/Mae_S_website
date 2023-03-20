import Candle from "./Candle.png";
import 'tailwindcss/tailwind.css';

function CandlePic () {

    return (

        <div>
            <img class="h-1/4 w-1/3 justify-center" src={Candle} alt="candle" />
        </div>
    )


}

export default CandlePic;