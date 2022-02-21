export function Get(call){
    return fetch("https://api.themoviedb.org/3" + call, {
        headers:{
            Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTQ3NmIwYzMyMzE1NGNiMTAyZTE5NzE0NzU5ZjM5NCIsInN1YiI6IjYyMDk3N2RhZTA0YWNhMDA2OGM5ZDk4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jn73GGumFih3GCMiBZqjApFBYzCVD4uEmWJOPfgkhpg",
            "Content-Type":"application/json;charset=utf-8",
        },
    })
    .then((result) => result.json())
}