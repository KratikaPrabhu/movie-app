const form = document.querySelector('form')
const container = document.querySelector('.image-container');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const query = form.querySelector('input').value
    console.log(query)
    if(query == " "){
        query === "marvel";
    }
    api(query);
})
async function api(query){
    const req = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    const movies = await req.json();
    console.log(movies)
   makeimages(movies);
}
function makeimages(movies){
    for (const movie of movies) {
        let imageSrc = movie.show.image.medium;
        const img = document.createElement('img');
        img.src=imageSrc
        container.appendChild(img);

    }
}