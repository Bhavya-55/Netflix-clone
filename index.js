// consts
const apikey ="5b0bfa2600a8f14b00b4f723ab34e6da";
const apiEndpoint = "https://api.themoviedb.org/3";
const apipaths= {
fetchAllCategories :`${apiEndpoint}/genre/movie/list?api_key=${apikey}`
}



// boozt ur app
function init(){
/*fetch(apipaths.fetchAllCategories)
.then(res=>res.json())
.then(res=>console.table(res.genres))
.catch(err=>console.error(err))*/
fetchAndBuildAll();
}
function fetchAndBuildAll(){
    fetch(apipaths.fetchAllCategories)
.then(res=>res.json())
.then(res=>{
    const movies =res.genres;
    console.table(movies);
})
.catch(err=>console.error(err))
}
window.addEventListener('load', function(){
init();
})