import React from "react";
// import VideoPlayer from "./SCVideo";
import SCVideo from "./SCVideo"
// import SCvideoRec from "./SCvideoRec.video.mp4";
import ProjectList from "./ProjectList"

function ProjectContainer() {

    const streetChariot = "https://github.com/Maedevlin47/StreetChariot"


        return (
            <div className="main-background text-color">
                <div className="flex justify-center pt-12 pb-12 text-4xl font-bold pt-.5">
                </div>
                <div className="">
                        <SCVideo/>
                </div>
                <div className="flex justify-center">
                    <h1 class="btn-circle w-64 h-10 bg-slate-400 animate-pulse"> 
                        <a className="text-4xl opacity-100 hover:opacity-30 flex justify-center items-center" href={streetChariot} target="_blank" rel="noopener noreferrer">StreetChariot Link</a>                               
                    </h1>
                </div>
            <br/>
                <div>
                    <ProjectList/>
                </div>
        </div>

        );
        }
    



export default ProjectContainer;