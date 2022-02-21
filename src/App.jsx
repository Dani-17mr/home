import { BrowserRouter, Routes, Route, NavLink, Navigate} from "react-router-dom";
import style from "./styles/App.module.css";
import {Home} from "./pages/Home";
import { Posters } from "./components/Posters";
import {Details} from "./pages/Details";
import {DetailsMovies} from "./components/DetailsMovies";
import {DetailsTv} from "./components/DetailsTv";
import {Movies} from "./pages/Movies";
import {TvShows} from "./pages/TvShows";

export function App(){
    return(
        <BrowserRouter>

            <header className={style.header}>
                <nav>
                    <ul className={style.nav}>
                        <li className={style.elements}><NavLink className={style.links} to={"/"}>Home</NavLink></li>
                        <li className={style.elements}><NavLink className={style.links} to={"/movies"}>Movies</NavLink></li>
                        <li className={style.elements}><NavLink className={style.links} to={"/tv-shows"}>Tv Shows</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Routes>
                
                    <Route path="/" element={<Navigate to="/home/trends"/>}/>

                    <Route path="/home" element={<Navigate to="/home/trends"/>}/>

                    <Route path="/home/*" element={<Home/>}>
                        <Route path="trends" element={<Posters category="Trending" srcMovie="/trending/movie/week" srcTv="/trending/tv/week"/>}/>
                        <Route path="discover" element={<Posters category="Discover" srcMovie="/discover/movie" srcTv="/discover/tv"/>}/>
                    </Route>

                    <Route path="/movies" element={<Movies />}/>

                    <Route path="/tv-shows" element={<TvShows />}/>

                    <Route path="/details/*" element={<Details/>}>
                        <Route path="movies/:id" element={<DetailsMovies/>} />
                        <Route path="tv/:id" element={<DetailsTv/>} />
                    </Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
};