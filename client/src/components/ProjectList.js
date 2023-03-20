function ProjectList () {


        const onlyHLink = "https://github.com/Maedevlin47/OnlyHogs"
        const vrbiage = "https://github.com/Maedevlin47/vrbiage"
        const plusOne = "https://github.com/Maedevlin47/Plus-One"
        const holidayHunter = "https://github.com/Maedevlin47/Holiday-Hunter"

    return (
            <body className="main-background pl-56 pt-24 pb-28">
                <div class="container grid grid-cols-2 gap-20 lg:grid-cols-4 pr-24">
                    <div class="grid-medium child-width-1-4@s margin-medium-top grid">
                        <div class="card-header">
                            <div class="width-auto first-column">
                                <img src="./OnlyHogsLogo.png" className="" alt="OnlyHogsProject" />
                            </div>
                            <div class="width-expand">
                                <h3 class="card-title margin-remove-bottom pl-20 pt-4">ONLY HOGS</h3>
                            </div>
                            <div class="card-body pl-10 pt-2">
                                <p class="btn-circle w-40 h-8 inline-block bg-slate-400 text-lg animate-pulse">
                                    <a className="justify-center text-2xl opacity-100 hover:opacity-30 pl-8 pt-6" href={onlyHLink} target="_blank" rel="noopener noreferrer">Project Link</a>                               
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="grid-medium child-width-1-4@s margin-large-top grid">
                        <div class="first-column">
                            <div class="card card-default card-hover border-rounded">
                                <div class="card-header">
                                    <div class="width-auto first-column">
                                        <img src="./PlusOneLG.png" className="App-logo" alt="logo" />
                                    </div>
                                    <div class="width-expand">
                                        <h3 class="card-title margin-remove-bottom pl-28 pt-4">PLUS-ONE</h3>
                                    </div>
                                </div>
                                <div class="card-body pl-20 pt-2">
                                    <p class="btn-circle w-40 h-8 inline-block bg-slate-400 text-lg animate-pulse">
                                            <a className="justify-center text-2xl opacity-100 hover:opacity-30 pl-8 pt-6" href={plusOne} target="_blank" rel="noopener noreferrer">Project Link</a>                               
                                        </p>                               
                                    </div>
                                </div>
                            </div>
                    </div>
                        <div class="card card-default card-hover border-rounded">
                            <div class="card-header">
                                <div class="grid-small flex-middle grid" >
                                    <div class="width-auto first-column">
                                        <img src="./VrbiageLG.png" className="App-logo" alt="logo" />
                                    </div>
                                    <div class="width-expand">
                                        <h3 class="card-title margin-remove-bottom pl-28 pt-4">VRBIAGE</h3>
                                    </div>
                                    <div class="card-body pl-20 pt-2">
                                        <p class="btn-circle w-40 h-8 inline-block bg-slate-400 text-lg animate-pulse">
                                            <a className="justify-center text-2xl opacity-100 hover:opacity-30 pl-8 pt-6" href={vrbiage} target="_blank" rel="noopener noreferrer">Project Link</a>                               
                                        </p>                                
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div class="card card-default card-hover border-rounded">
                                <div class="card-header">
                                    <div class="grid-small flex-middle grid">
                                        <div class="width-auto first-column">
                                            <img src="./HolidayHLG.png" className="App-logo" alt="logo" />
                                        </div>
                                        <div class="width-expand">
                                        <h3 class="card-title margin-remove-bottom pl-28 pt-4">PLUS-ONE</h3>
                                    </div>
                                        <div class="card-body pl-20 pt-2">
                                            <p class="btn-circle w-40 h-8 inline-block bg-slate-400 text-lg animate-pulse">
                                                <a className="justify-center text-2xl opacity-100 hover:opacity-30 pl-8 pt-6" href={holidayHunter} target="_blank" rel="noopener noreferrer">Project Link</a>                               
                                            </p>                                      
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
            </body>
    )
}

export default ProjectList;