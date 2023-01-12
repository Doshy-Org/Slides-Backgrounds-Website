import React, {useState}  from 'react'
import Dark from '../public/icons/dark.svg'
import Light from '../public/icons/light.svg'

export default function themeToggle() {
    
    const [theme, toggleTheme]  = useState(true)

    const changetheme = () => {
        toggleTheme(!theme)
        const className = 'dark';
        const bodyClass = window.document.body.classList;
        theme ? bodyClass.add(className) : bodyClass.remove(className);
        console.log(theme);
    }

    return (
        <div class = "px-2">
             <div onClick = {changetheme} class="cursor-pointer">
                {theme ? 
                         <Dark/> :  <Light class = "fill-current"/>}
            </div>
        </div>
    )
}
