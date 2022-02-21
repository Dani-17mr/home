import { useEffect, useState } from "react";
import { ListMovie } from "../components/ListMovie";
import { Get } from "../utilities/CallServer";
import style from "../components/styles/Posters.module.css";
import InfiniteScroll from "react-infinite-scroll-component";



export function Movies() {


    const [data, setData] = useState([]);
    const [Page, setPage] = useState(1);

    useEffect(() => {

        Get("/discover/movie?page=" + Page).then((info) => {
            setData((previnfo)=> previnfo.concat(info.results));
        });

    }, [Page])

    return (
        <InfiniteScroll
        dataLength={data.length}
        hasMore={true}
        next={()=>{
            setPage((prevPage)=> prevPage + 1);
        }}
        >
            <section>
                <ul className={style.cont}>
                    {data.map((movie) => {
                        return <ListMovie key={movie.id} movie={movie} />
                    })}
                </ul>
            </section>
        </InfiniteScroll>
    )
}