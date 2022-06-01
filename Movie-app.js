import {MOVIE_APP_API} from "/keys.js"
import {POSTER_API_KEY} from "/keys.js"
import {POSTER_API} from "/keys.js"

const loader = document.querySelector('#loader')


const createMovie = ({})


fetch(MOVIE_APP_API)
    .then($("#loader").addClass("hidden"))
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
    })
    //     res.data.forEach((movie) => {
    //         createMovie(movie)
    //     })
    // })

