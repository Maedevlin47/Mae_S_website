import React from "react";
import AboutPic from "./AboutPic";
import AboutMatchPic from "./AboutMatchPic";

function About() {

        return (
            <div className= "main-background text-color pl-20 font-bold text-left"> 
                <div className="mt-20 text-4xl font-bold pt-.5 animate-bounce">About Me!</div>
                <div class="w-10/12 h-3/6 pl-32 lg:w-10/12 flex">
                <br/>
                    <div class="container h-2/6 pb-6 mt-4 mb-12 flex pt-10 pl-10 pr-10 text-3xl bg-slate-300">
                        <div ClassName="text-xl"> 
                        As a Software Engineer with experience and a strong skill set in business development and sales, I am very passionate about building and implementing new features that directly impact a users experience, and the continual improvement of those features.
                        <br/>
                        <br/>
                        My long term goal as a Software Engineer is to work cross functionally to bridge the communication gap that I have experienced between the Software Engineering/Product teams and Business Development/Sales teams within companies. I believe it is crucial that all team members creating a platform or application should have a strong relationship and feedback loop, with all team members working closely with the users of that creation.
                        </div>
                    </div>
                    <AboutMatchPic/>
                    <div>
                    <AboutPic/>
                </div>
            </div>
            </div>


        );
    }


export default About;