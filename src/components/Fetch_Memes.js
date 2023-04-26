import Structure from "./Meme_page";

const { useState } = require("react");
export function Memes(){


 const [data,setData] = useState("");
 const fetch_api = async (e)=>{
   e.preventDefault();
    const data  = await fetch("https://meme-api.com/gimme");
    const realdata = await data.json();
    setData(realdata);
 }
 
 return <>
 {data &&  <Structure title={data.title} url={data.url} author={data.author}></Structure>}
  <input type="button" onClick={fetch_api} value={"click here"}/>
 </>
}