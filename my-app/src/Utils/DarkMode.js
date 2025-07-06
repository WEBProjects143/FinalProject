import { createContext,useState,useEffect, useContext} from "react";

export const ThemeContext=createContext()
export const ThemeProvider=({children})=>{
const [theme,setTheme]=useState(()=>{
    return localStorage.getItem("theme")||"light"
})

 const toogleFunc=(e)=>{
    const data=e.target.checked
    const mode=data===true?"light":"dark"
    console.log(mode)
    setTheme(mode)
    console.log(theme)
   localStorage.setItem("theme",mode)

}
useEffect(()=>{
    document.body.setAttribute("dark-theme",theme)
},[theme])

return(
    <ThemeContext.Provider value={{toogleFunc}}>
        {children}
    </ThemeContext.Provider>
)
}
export const useTheme=()=>useContext(ThemeContext)