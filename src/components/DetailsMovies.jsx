import { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
import { Get } from "../utilities/CallServer";
import style from "./styles/Details.module.css";


export function DetailsMovies() {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const poster = "https://image.tmdb.org/t/p/w500" + data.poster_path;
    const bg = "https://image.tmdb.org/t/p/w500" + data.backdrop_path;

    useEffect(() => {
        Get("/movie/" + id).then((info) => {
            setData(info);
        })
    }, [id]);


    return (

        <div className={style.cont}>

            <div className={style.header}>
                <div className={style.bg}><img src={bg} alt={data.original_title} /></div>
                <div className={style.intro}>

                    <h1 className={style.title}>{data.title}</h1>

                    <div className={style.info}>
                        <div className={style.vote}>
                            <span>{data.vote_average}</span>
                        </div>
                        <div className={style.count}>
                            <span>{data.vote_count} votos</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.details}>
                <div className={style.poster}>
                    <img src={poster} alt={data.original_title} />
                </div>
                <div className={style.cont_overview}>
                    <div className={style.overview}>
                        <h2>Synopsis</h2>
                        <br />
                        <br />
                        <p>{data.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}