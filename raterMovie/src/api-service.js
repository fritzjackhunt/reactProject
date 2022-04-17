const TOKEN = 'token';


export class API {

    static loginUser( body ) {
        return fetch(`http:://127.0.0.1:800/auth/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringigy( body )
        }).then( resp => resp.JSON())
    }

    static registerUser( body ) {
        return fetch(`http:://127.0.0.1:800/api/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringigy( body )
        }).then( resp => resp.JSON())
    }


    static getMovies(token){
        return fetch("http:://127.0.0.1:800/api/movies/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mr-token']}`
            }
            })
            .then( resp => resp.json())
    }


    static updateMovie(mov_id, body, token ) {
        return fetch(`http:://127.0.0.1:800/api/movies/${mov_id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringigy( body )
        }).then( resp => resp.JSON())
    }

    static createMovie(body, token ) {
        return fetch(`http:://127.0.0.1:800/api/movies/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringigy( body )
        }).then( resp => resp.JSON())
    }

    static deleteMovie(mov_id, token) {
        return fetch(`http:://127.0.0.1:800/api/movies/${mov_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
        })
    }
}