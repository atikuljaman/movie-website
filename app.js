//const key = 'a93bb524b036976b30956971f6824efd';

// common variables
const posterUrl = 'https://image.tmdb.org/t/p/w500/';
const popularDiv = document.getElementById('popular');
const topRatedDiv = document.getElementById('popular-1')
const bestMovie = document.getElementById('best-movie')
const mainDiv = document.querySelector('.main')
const comDiv = document.querySelector('.com-div')


const loadData = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a93bb524b036976b30956971f6824efd`)
        .then(res => res.json())
        .then(data => displayData(data.results))
}
loadData();

const displayData = data => {
    data.forEach(popular => {
        const { poster_path } = popular;
        const div = document.createElement('div');
        div.innerHTML = `
            <img class="img-fluid my-img" src="${posterUrl + poster_path}" alt="">
            <div class="d-flex justify-content-between mt-3">
                <p class="fw-bold">${popular.title}</p>
                <p><span class="text-warning fw-bold">${popular.release_date}</p>
            </div>
            <div class="d-flex justify-content-between mt-1">
                <div class="my-border">
                    <p class="text-center my-p">HD</p>
                </div>
                    <p class="fw-bold"><span class="text-warning fs-5">&#9755;</span> ${popular.vote_average}</p>
                </div>
                    <div class="d-flex justify-content-between">
                        <button class="btn btn-outline-warning text-white fw-bold">Details</button>
                        <button class="btn btn-outline-warning text-white fw-bold">Watch Now</button>
                    </div>`
        popularDiv.appendChild(div);
    });
};

// top rated movies 

const loadTopMovie = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=a93bb524b036976b30956971f6824efd`)
        .then(res => res.json())
        .then(data => displayTopMovie(data.results))
};

const displayTopMovie = data => {
    comDiv.classList.remove('d-none')
    mainDiv.innerHTML = '';
    data.forEach(movies => {
        const { poster_path } = movies
        const div = document.createElement('div');
        div.innerHTML = `
        <img class="img-fluid my-img" src="${posterUrl + poster_path}" alt="">
        <div class="d-flex justify-content-between mt-3">
            <p class="fw-bold">${movies.title}</p>
            <p><span class="text-warning fw-bold">${movies.release_date}</p>
        </div>
        <div class="d-flex justify-content-between mt-1">
            <div class="my-border">
                <p class="text-center my-p">HD</p>
            </div>
                <p class="fw-bold"><span class="text-warning fs-5">&#9755;</span> ${movies.vote_average}</p>
            </div>
                <div class="d-flex justify-content-between">
                    <button class="btn btn-outline-warning text-white fw-bold">Details</button>
                    <button class="btn btn-outline-warning text-white fw-bold">Watch Now</button>
                </div>
        `
        topRatedDiv.appendChild(div);
    });
};

//  Best movies

const loadBestMovie = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=a93bb524b036976b30956971f6824efd`)
        .then(res => res.json())
        .then(data => displayBestMovie(data.results))
};

const displayBestMovie = data => {
    comDiv.classList.remove('d-none')
    mainDiv.innerHTML = '';
    data.forEach(movies => {
        const { poster_path } = movies
        const div = document.createElement('div');
        div.innerHTML = `
        <img class="img-fluid my-img" src="${posterUrl + poster_path}" alt="">
        <div class="d-flex justify-content-between mt-3">
            <p class="fw-bold">${movies.title}</p>
            <p><span class="text-warning fw-bold">${movies.release_date}</p>
        </div>
        <div class="d-flex justify-content-between mt-1">
            <div class="my-border">
                <p class="text-center my-p">HD</p>
            </div>
                <p class="fw-bold"><span class="text-warning fs-5">&#9755;</span> ${movies.vote_average}</p>
            </div>
                <div class="d-flex justify-content-between">
                    <button class="btn btn-outline-warning text-white fw-bold">Details</button>
                    <button class="btn btn-outline-warning text-white fw-bold">Watch Now</button>
                </div>
        `
        bestMovie.appendChild(div);
    });
};

// old movies 
/* const loadBestMovie = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=a93bb524b036976b30956971f6824efd`)
        .then(res => res.json())
        .then(data => displayBestMovie(data.results))
}; */