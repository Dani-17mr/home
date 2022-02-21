import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Get } from "../utilities/CallServer";
import { ListMovie } from "./ListMovie";
import { ListTv } from "./ListTv";
import style from "./styles/Posters.module.css";


export function Posters({srcMovie,srcTv,category}){

    const [Movies, setMovies] = useState([]);
    const [Tvshows, setTvshows] = useState([]);
    const urlMovie = srcMovie;
    const urlTv = srcTv;

    useEffect(()=>{
        Get(urlMovie).then((info)=>{setMovies(info.results);});
    },[urlMovie]);
    useEffect(()=>{
        Get(urlTv).then((info)=>{setTvshows(info.results);});
    },[urlTv]);



    return(
        <div className={style.body}>
            <ul className={style.nav}>
                <li className={style.elements}><NavLink className={style.Links} to="/home/trends">Trends</NavLink></li>
                <li className={style.elements}><NavLink className={style.Links} to="/home/discover">Discover</NavLink></li>
            </ul>

            <h2>{category} Movies</h2>
            <ul className={style.cont}>
                {Movies.map((movie)=>{
                    return <ListMovie key={movie.id} movie={movie}/>
                })}
            </ul>

            <h2>{category} Tv Shows</h2>
            <ul className={style.cont}>
                {Tvshows.map((tvshow)=>{
                    return <ListTv key={tvshow.id} TV={tvshow}/>
                })}
            </ul>
        </div>
    )
}