import { useEffect, useState } from "react";
import { Get } from "../utilities/CallServer";
import style from "./styles/Carousel.module.css";


export function Carousel(){


    const [data,setData] = useState([]);
    const [random, setRamdon] = useState(Math.floor(Math.random() * 20))

    useEffect(()=>{
        Get("/trending/all/day").then((data)=>{setData(data.results[random]);})
    },[])
    

    const bg = "https://image.tmdb.org/t/p/w500" + data.backdrop_path;
    const bgPoster = "https://image.tmdb.org/t/p/w500" + data.poster_path;

    return(
        <div>
            <div className={style.bg_poster}>
                <img src={bg} alt={data.title || data.name} />
            </div>
            <div className={style.bg_color}></div>
            <div className={style.cont}>
                <div>
                    <h1 className={style.link}>{data.title || data.name}</h1>
                </div>
                <span><strong>{data.vote_average}</strong>/10</span>
                <div className={style.overview}>
                    <p>{data.overview}</p>
                </div>
            </div>
        </div>
    )
}