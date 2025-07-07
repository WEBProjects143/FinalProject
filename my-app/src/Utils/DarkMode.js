import { createContext,useState,useEffect, useContext} from "react";


//creating context using createContext
export const ThemeContext=createContext()

export const ThemeProvider=({children})=>{
const [theme,setTheme]=useState(()=>{
    return localStorage.getItem("theme")||"light"
})

 const toogleFunc=(e)=>{
    const data=e.target.checked
    const mode=data===true?"dark":"light"
    setTheme(mode)
   localStorage.setItem("theme",mode)

}
useEffect(()=>{
    document.body.setAttribute("data-theme",theme)
},[theme])

return(
    <ThemeContext.Provider value={{theme,toogleFunc}}>
        {children}
    </ThemeContext.Provider>
)
}
export const useTheme=()=>useContext(ThemeContext)