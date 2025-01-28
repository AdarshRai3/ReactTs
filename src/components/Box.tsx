import {ReactNode } from "react";

type PropsType = {
    heading: string;
    count?: number; //For making count optional
    children : ReactNode
}

type InputVal = string | number;
export const SearchBox = <T extends InputVal>({
    label,
    value,
    onChange
}:{
    label:string;
    value:T;
    onChange:()=> void;
})=>{
    return(
     <div className="p-4 m-auto grid  place-content-center">
        <form className ="flex-col">
         <label className="font-bold">{label}</label>
         <input type ="text" className="border-solid w-96 border-2 rounded-sm p-2 m-0.5" value={value} onChange={onChange}/>
         <button type ="submit"  className=" w-24 p-2 bg-sky-500 text-white font-bold rounded-sm ">Search</button>
        </form>
     </div>
     
    );
};


