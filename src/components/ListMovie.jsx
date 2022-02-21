import { Link } from "react-router-dom";
import style from "./styles/List.module.css";

export function ListMovie({movie}){
    const poster = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return(
        <li className={style.cont}>
            <Link className={style.link} to={"/details/movies/" + movie.id}>
                <img className={style.poster} src={poster} alt={movie.title} />
                <span className={style.title} >{movie.title}</span>
            </Link>
        </li>
    )
}