import React, { useContext, useEffect, useState } from "react";
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeContext,themes } from "./context/theme-context";





const R7App = () => {
    useEffect(() => {
        // eslint-disable-next-line default-case
        switch(theme) {
            case themes.light:
                document.body.style.backgroundColor = "#fff";
                document.body.style.color = "#000"
            break;
            case themes.dark:
                document.body.style.backgroundColor = "#000";
                document.body.style.color = "#fff"
            break;    
        }
    })
    const [theme,setTheme] = useState(themes.light)
    
    const changeTheme = () => {
        theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
    }
    return (
        <ThemeContext.Provider value={{theme,changeTheme}}>
        <div>
            <span>Odtwarzamy w trybie {theme}</span>
            <button onClick={changeTheme}>{theme}</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam debitis dolores et, repellat sit, laborum accusantium eos, consequatur animi distinctio a. Esse aliquam provident voluptatum labore illo consequuntur vitae eos.
            Similique vero, doloribus eligendi fuga hic ratione atque inventore quam et aliquam sint pariatur amet nisi necessitatibus asperiores provident dolore sunt illo molestias eveniet tempore earum. Sint impedit quis vero.
            Dolorum officia ratione quaerat fuga, beatae minima maiores nobis reprehenderit. Consectetur numquam iusto deleniti, reiciendis possimus id necessitatibus adipisci voluptas distinctio aperiam quis ab perferendis maxime totam est commodi dolorum.
            Voluptas voluptatem sapiente tempore accusantium molestias adipisci obcaecati reprehenderit optio neque! Doloribus nisi rerum deserunt, mollitia perferendis quod rem dignissimos eum ea, esse, explicabo incidunt sed repellat aspernatur error laborum?
            Tempore nulla, illum maxime eos, expedita perspiciatis repudiandae id, debitis alias veritatis vel ab consequatur eaque hic reiciendis est eius maiores et amet! Iste at iusto ullam odio, ut sunt.</p>
        </div>
        </ThemeContext.Provider>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<R7App />)