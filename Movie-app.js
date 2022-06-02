import {MOVIE_APP_API} from "/keys.js"
import {POSTER_API_KEY} from "/keys.js"
import {POSTER_API} from "/keys.js"

import {mapUserToRecord } from "/maps.js";
import {
    handleDisplayUpdate, handleDeleteView,
    toggleModal, modal, handleDisplayProfile,
    handleCreateUserView
} from "/handlers.js";

const loader = document.querySelector('#loader')

const createMovie = ({id, title, rating}) => {
    document.getElementById("content").innerHTML +=
        `
    <div data-id="${id}">
        <h4>${title}</h4>
        <h5>Rating: ${rating}</h5>
        <button class="edit" value="${id}">Edit</button>
    </div>
    `
}
fetch(MOVIE_APP_API)
    .then($("#loader").addClass("hidden"))
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
        res.forEach((movie) => {
            if (typeof movie.title === 'string' && movie.title !== '') {
                createMovie(movie)
            }

        })
        $("#create").click(handleCreateUserView);
        $(".delete").click(handleDeleteView);
        $(".edit").click(handleDisplayUpdate);
    })


