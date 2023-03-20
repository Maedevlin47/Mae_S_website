import React from 'react';
import SCvideoRec from "./SCvideoRec.video.mp4";
import 'tailwindcss/tailwind.css';


function VideoPlayer() {
        return (

            <div className="relative justify center">
                <div className="md:flex">
                        <img src="./18comp.png" alt="" className="mx-auto pl-20 pr-20 w-7/12 h-5/6 md:h-5/6"/>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <video 
                                className="absolute inset-0 w-1/3 h-2/4 object-contain mx-auto rounded-2xl"
                                controls autoplay loop
                                    src={SCvideoRec} 
                                    type="video/mp4"
                                    style={{ left: "150px", right:"160px",  top: "115px"}}>                            
                            </video>
                        </div>
                </div>
            </div>

        );
        }

export default VideoPlayer;


// style={{ left: "150px", right:"160px", height: "450px", top: "100px", bottom: "px"}}>                            </video>




// return (
//     <div>
//         <video controls>
//             <source src={process.env.PUBLIC_URL + '/SCvideoRec.video.mp4'} type="video/mp4" />
//             Your browser does not support the video tag.
//         </video>
//     </div>
// );
// }
// w-auto h-1/2



// return (
//     <div className="relative">
//         <div className="ibook justify center">
//             <img src="./18comp.png" alt="" className="justify center ml-96 mr-96 pl-20 pr-20 w-7/12 h-3/12"/>
//             <div className="absolute top-0 left-0 w-full h-full">
//                 <video 
//                     className="absolute inset-0 w-2/5 h-2/4 object-contain mt-28 ml-96 pl-20 pr-14 pb-6"
//                     controls autoplay loop
//                     src={SCvideoRec} 
//                     type="video/mp4"
//                     style={{ left: "155px", right:"160px", height: "429px", top: "2px", bottom:"36px"}}>
//                 </video>
//             </div>
//         </div>
//     </div>
// );
// }