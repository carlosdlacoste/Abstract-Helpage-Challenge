import React from "react";

export const SearchBar = () =>{
    return(
        <>
            <div className="flex place-content-center items-center bg-indigo-200 h-72 flex-col">
                <h1 className="text-7xl font-bold">How Can We Help?</h1>
                <div className="mt-6 w-2/4 h-12 relative">
                    <input className="w-full p-3 rounded absolute" placeholder="Search"></input>
                    <i className="fa-solid fa-arrow-right fa-lg absolute right-3 top-1/2 -translate-y-2/4 "></i>
                </div>
            </div>
        </>
    );

}