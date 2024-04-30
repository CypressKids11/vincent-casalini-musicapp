'use client'
import styles from './styles.css';
export default function NavBar(){ //NavBar component
    return(
        <div className='navbar'>
            <img src='./music.png' alt='' className='nav-logo'/>
            <h1 className='nav-title'>Phonk singer</h1>
            <a onClick={
                () => {
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth'
                    })
                }
            } className='nav-link'> More Information</a>
        </div>
    );
}

/*
  Running away (time) by VANO 3000   https://www.youtube.com/watch?v=BbGsL3iWD94  Running away  its the leaving thats hard
  Bling-Bang-Bang-Born by creepy nuts   https://www.youtube.com/watch?v=BbGsL3iWD94    Bling bang bang born    bling bang bang born
  Young Girl A by siinamota    Alive    https://www.youtube.com/watch?v=B5s7191duYc    Rotting Love and hate 
  Skyfall - Adele    Mastermix Classic Cuts, Volume 140: Modern Ballads   https://www.youtube.com/watch?v=DeumyOzKqgI   where you go, I go
  House of Memories by Panic! at the disco, https://www.youtube.com/watch?v=Mxv7O6BkJeE Promise me a place in your house of memories death of a Bachelor
  Cotton Eye Joe by Rednex  https://www.youtube.com/watch?v=mOYZaiDZ7BM https://www.youtube.com/watch?v=AqI97zHMoQw Violins where did you come from cotton eye joe
  GANGNAM STYLE by PSY psy 6 (six rules), Part 1 https://www.youtube.com/watch?v=9bZkp7q19f0, Op - op - op - op oppa gangnam style
*/