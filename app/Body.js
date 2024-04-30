import styles from "./styles.css"
import MusicBox from "./MusicBox.js";
export default function Body(){ //body component
    return(
        <div className="body-content">
            <MusicBox name={"Bling-Bang-Bang-Born"} album={"Bling-Bang-Bang-Born"} artist={"creepy-nuts"} link={"https://www.youtube.com/watch?v=_b_OjkAjF0Q"} lyric={"Bling Bang Bang Born"} source={"Bling-bang-bang-born.jpg"}/> 
            <MusicBox name={"Running away (time)"} album={"Running away"} artist={"VANO 3000"} link={"https://www.youtube.com/watch?v=BbGsL3iWD94"} lyric={"its the leaving thats hard"} source={"Running-away-(Time).jpg"}/>
            <MusicBox name={"Young-Girl-A"} album={"Alive"} artist={"siinamota"} link={"https://www.youtube.com/watch?v=AqI97zHMoQw"} lyric={"Rotting Love and hate"} source={"siinamota.jpg"}/> 
            <MusicBox name={"Cotton Eye Joe"} album={"Violins"} artist={"Rednex"} link={"https://www.youtube.com/watch?v=mOYZaiDZ7BM"} source={"cotton.jpg"}/> 
            <MusicBox name={"House of Memories"} album={"death of a Bachelor"} artist={"Panic! at the disco"}  lyric={"Promise me a place in your house of memories"} source={"House-of-Memories.jpeg"} link={"https://www.youtube.com/watch?v=Mxv7O6BkJeE"}/>
            <MusicBox name={"Skyfall"} album={"Mastermix Classic Cuts, Volume 140: Modern Ballads"} link={"https://www.youtube.com/watch?v=DeumyOzKqgI"} artist={"adele"} lyric={"where you go, I go"} source={"skyfall.png"}/> 
        </div>
    );
}