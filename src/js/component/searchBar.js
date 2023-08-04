import React from "react";

export const SearchBar = () =>{
    return(
        <>
            <div className="flex place-content-center items-center bg-indigo-200 h-72 flex-col">
                <h1 className="text-7xl font-bold">How Can We Help?</h1>
                <input className="mt-6 w-2/4 h-12 p-3 rounded" placeholder="Search"></input>
            </div>
        </>
    );

}