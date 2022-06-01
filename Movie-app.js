import {MOVIE_APP_API} from "/keys.js"
import {POSTER_API_KEY} from "/keys.js"
import {POSTER_API} from "/keys.js"

const loader = document.querySelector('#loader')

const createMovie = ({title, rating}) => {
    document.getElementById("content").innerHTML +=
     `
    <div class="poster">
        <h4>${title}</h4>
        <h5>${rating}</h5>
    
    </div>
   
    `
}

fetch(MOVIE_APP_API)
    .then($("#loader").addClass("hidden"))
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
        res.forEach((movie) => {
            createMovie(movie)
        })
    })

