import { Carousel } from "../components/Carousel";
import { Outlet } from "react-router-dom";

export function Home(){
    return(
        <section>

            <Carousel/>

            <article>
                <Outlet/>
            </article>

        </section>
    );
};