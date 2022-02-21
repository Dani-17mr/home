import { useEffect, useState } from "react";
import { ListTv } from "../components/ListTv";
import { Get } from "../utilities/CallServer";
import style from "../components/styles/Posters.module.css";
import InfiniteScroll from "react-infinite-scroll-component";



export function TvShows() {


    const [data, setData] = useState([]);
    const [Page, setPage] = useState(1);

    useEffect(() => {

        Get("/discover/tv?page=" + Page).then((info) => {
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
                        return <ListTv key={movie.id} TV={movie} />
                    })}
                </ul>
            </section>
        </InfiniteScroll>
    )
}