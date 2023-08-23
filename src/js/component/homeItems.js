import React from "react";

export const HomeItems= () =>{
    return(
        <>
            <div>
                <div className="grid grid-rows-3 grid-cols-2 gap-x-6 gap-y-8 p-3">
                    <div className="flex flex-row space-x-5">
                        <i className="fa-solid fa-gears text-5xl"></i>
                        <div className="flex flex-col">
                            <h5 className="font-bold text-2xl">Using Abstract</h5>
                            <p className="text-xl">Abstract lets you manage, version, and document your designs in one place.</p>
                            <button className="flex items-stretch mt-3 h-7 min-w-[25%] text-indigo-500 no-underline hover:underline"> 
                                <span className="self-center">Learn More</span>
                                <span className="mt-[2px]">&nbsp;&nbsp;</span>
                                <i className="fa-solid fa-arrow-right-long text-base self-center mt-[2px]"></i>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-5">
                        <i className="fa-solid fa-user text-5xl"></i>
                        <i className="fa-solid fa-user text-5xl" style={{margin: '0'}}></i>
                        <div className="flex flex-col">
                            <h5 className="font-bold text-2xl">Manage your account</h5>
                            <p className="text-xl">Configure your account settings, such as your email, profile details, and password.</p>
                            <button className="flex items-stretch mt-3 h-7 min-w-[25%] text-indigo-500 no-underline hover:underline"> 
                                <span className="self-center">Learn More</span>
                                <span className="mt-[2px]">&nbsp;&nbsp;</span>
                                <i className="fa-solid fa-arrow-right-long text-base self-center mt-[2px]"></i>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-5">
                        <i className="fa-solid fa-puzzle-piece text-5xl"></i>
                        <div className="flex flex-col">
                            <h5 className="font-bold text-2xl">Manage organizations, teams, and projects</h5>
                            <p className="text-xl">Use Abstract organizations, teams, and projects to organize your people and your work.</p>
                            <button className="flex items-stretch mt-3 h-7 min-w-[25%] text-indigo-500 no-underline hover:underline"> 
                                <span className="self-center">Learn More</span>
                                <span className="mt-[2px]">&nbsp;&nbsp;</span>
                                <i className="fa-solid fa-arrow-right-long text-base self-center mt-[2px]"></i>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-5">
                        <i className="fa-solid fa-dollar-sign text-5xl"></i>
                        <div className="flex flex-col">
                            <h5 className="font-bold text-2xl">Manage billing</h5>
                            <p className="text-xl">Change subscriptions and payment details.</p>
                            <button className="flex items-stretch mt-3 h-7 min-w-[25%] text-indigo-500 no-underline hover:underline"> 
                                <span className="self-center">Learn More</span>
                                <span className="mt-[2px]">&nbsp;&nbsp;</span>
                                <i className="fa-solid fa-arrow-right-long text-base self-center mt-[2px]"></i>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-5">
                        <i className="fa-solid fa-key text-5xl"></i>
                        <div className="flex flex-col">
                            <h5 className="font-bold text-2xl">Authenticate to Abstract</h5>
                            <p className="text-xl">Set up and configure SSO, SCIM, and Just-in-Time provisioning.</p>
                            <button className="flex items-stretch mt-3 h-7 min-w-[10%] text-indigo-500 no-underline hover:underline"> 
                                <span className="self-center">Learn More</span>
                                <span className="mt-[2px]">&nbsp;&nbsp;</span>
                                <i className="fa-solid fa-arrow-right-long text-base self-center mt-[2px]"></i>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-5">
                        <i className="fa-solid fa-comment-dots text-5xl"></i>
                        <div className="flex flex-col">
                            <h5 className="font-bold text-2xl">Abstract support</h5>
                            <p className="text-xl">Get in touch with a human.</p>
                            <button className="flex items-stretch mt-3 h-7 min-w-[25%] text-indigo-500 no-underline hover:underline"> 
                                <span className="self-center">Learn More</span>
                                <span className="mt-[2px]">&nbsp;&nbsp;</span>
                                <i className="fa-solid fa-arrow-right-long text-base self-center mt-[2px]"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}