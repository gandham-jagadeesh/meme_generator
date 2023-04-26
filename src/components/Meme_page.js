import "./Meme_page.css";
export default function Structure(value){
    
    return <div className="Pics_sizer">
    <h2>{value.title}</h2>
    <img src={value.url} alt="memes"/>

    <p>{value.author}</p>
    </div>
}