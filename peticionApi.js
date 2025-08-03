//VARIABLES GLOBALES
let divRespuesta = document.querySelector('.respuesta');
let boton = document.querySelector('.boton');

//PETICION EXTERNA
let url = 'https://jsonplaceholder.typicode.com/users';

    boton.addEventListener('click', ()=>{
    fetch(url).then((d)=>{
        return d.json();
    }).then((u)=>{
        u.forEach((user) => {
            divRespuesta.innerHTML +=`
                <h3> ${user.name} </h3>
                <p> ${user.phone} </p>
                <p> ${user.email} </p>
                <p> ${user.geo} </p>
                <hr>
            `; 
        });
        console.log(u);
    }).catch((e)=>{
        console.log(e);
    })
})


//PETICION EXTERNA
/* async function obtenerPeliculas() {
    try {
        let url = 'http://localhost/apiPeliculas/peliculas.txt';
        let respuesta = await fetch(url);
        let peliculas = await respuesta.json();
        console.log(peliculas);

    } catch (error) {
        console.log(error);
    }
};

boton.addEventListener('click', ()=>{
    obtenerPeliculas();
}); */