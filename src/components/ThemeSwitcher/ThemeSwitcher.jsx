import "./ThemeSwitcher.css";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeSwitcher() {

const { theme, setTheme } = useTheme();

return (

<div className="theme-switcher">

<button
onClick={()=>setTheme("blue")}
className={theme==="blue"?"active":""}
>

🔵

</button>

<button
onClick={()=>setTheme("emerald")}
className={theme==="emerald"?"active":""}
>

🟢

</button>

<button
onClick={()=>setTheme("purple")}
className={theme==="purple"?"active":""}
>

🟣

</button>

</div>

);

}