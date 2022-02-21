import { Link } from "react-router-dom";
import style from "./styles/List.module.css";

export function ListTv({TV}){
    const poster = "https://image.tmdb.org/t/p/w500" + TV.poster_path;
    return(
        <li className={style.cont}>
            <Link className={style.link} to={"/details/tv/" + TV.id}>
                <img className={style.poster} src={poster} alt={TV.name} />
                <span className={style.title} >{TV.name}</span>
            </Link>
        </li>
    )
}