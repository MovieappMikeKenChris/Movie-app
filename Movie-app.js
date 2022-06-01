import {MOVIE_APP_API} from "/keys.js"

const loader = document.querySelector('#loader')

fetch(MOVIE_APP_API)
    .then($("#loader").addClass("hidden"))
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
    })

