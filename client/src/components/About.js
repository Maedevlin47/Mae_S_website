import React from "react";
import AboutPic from "./AboutPic";

function About() {

        return (
            <body className= "pl-20 mb-12 font-bold text-left font-['Quicksand']"> 
                <div className="mb-6 mt-0 text-4xl text-pink-800">About Me!</div>
                <div class="w-6/12 h-3/6 pl-32 lg:w-10/12 flex">
                <br/>
                    <div class="container flex pt-10 lg:w-1/2 bg-white pl-10 pr-10 pb-10 text-xl">
                        <div ClassName="text-xl"> 
                        As a Software Engineer with experience and a strong skill set in business development and sales, I am very passionate about building and implementing new features that directly impact a users experience, and the continual improvement of those features.
                        <br/>
                        <br/>
                        My long term goal as a Software Engineer is to work cross functionally to bridge the communication gap that I have experienced between the Software Engineering/Product teams and Business Development/Sales teams within companies. I believe it is crucial that all team members creating a platform or application should have a strong relationship and feedback loop, with all team members working closely with the users of that creation.
                        </div>
                    </div>
                    <AboutPic/>
                </div>
            </body>
        );
    }


export default About;