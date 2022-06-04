
import {MOVIE_APP_API} from "./keys.js"
import {POSTER_API} from "./keys.js"

import {mapUserToRecord} from "./maps.js";
import {
    handleDisplayUpdate, handleDeleteView,
    toggleModal, modal,
    handleCreateUserView
} from "./handlers.js";

const loader = document.querySelector('#loader')

const createMovie = ({id, title, rating}, OMDB) => {
    document.getElementById("content").innerHTML +=
        `
    <div data-id="${id}" id="card">
        <h2 class="title">${title}</h2>
        <img src="${OMDB?.Poster}" alt="">
        <h4 class="rating">Rating: ${rating}</h4>
        <button class="edit" value="${id}">Edit</button>
        <button class="delete" value="${id}">Delete</button>
    </div>
    `
}
export const runMovieApp = () => {
    fetch(MOVIE_APP_API)
        .then($("#loader").addClass("hidden"))
        .then((res) => res.json())
        .then((res) => {
            $("#content").html("")
            console.log(res)
            res.forEach((movie) => {
                if (typeof movie.title === 'string' && movie.title !== '') {
                    getMovieOMDB(movie.title).then((res) => {
                        createMovie(movie, res?.Search?.[0])

                        $(".delete").click(handleDeleteView);
                        $(".edit").click(handleDisplayUpdate);
                    })

                }

            })
            $("#create").click(handleCreateUserView);

        })
}
const getMovieOMDB = title => {
    return fetch(POSTER_API + `&s=${title}`, {method: "GET"})
        .then((res) => res.json())
}

runMovieApp()



