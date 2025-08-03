//SIMULACIÓN DE BD
let peliculas = [
    {
        'titulo':'spiderman',
        'sinapsis':'la picadura de la araña gay',
        'genero':'acción, ficción, superHeroes',
        'lanzamiento': 2008,
        'portada':'https://image.api.playstation.com/vulcan/ap/rnd/202011/0402/C784xeOFo2wViCf4m5bxgoeH.png'
    },
    {
        'titulo':'La Llorona',
        'sinapsis':'Buscando a nemo',
        'genero':'acción, ficción, cuentos',
        'lanzamiento': 2004,
        'portada':'https://m.media-amazon.com/images/M/MV5BMDFjYTFjZGQtNDQ2Mi00OGE5LWE2ZGQtNTI5ODY4NTA0YzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
    },
    {
        'titulo':'rapido y furioso',
        'sinapsis':'piques a la luna',
        'genero':'acción, ficción, carros',
        'lanzamiento': 2002,
        'portada':'https://hips.hearstapps.com/hmg-prod/images/fast-and-furious-9-1564933931.jpeg?crop=1xw:1xh;center,top&resize=980:*'
    }
]

//FUNCIÓN PARA REALIZAR LA PETICIÓN A LA BD
function obtenerPeliculas(pelis) {
    return new Promise((resolve, reject) => {
        //SIMULAR TIEMPO DE RESPUESTAS
        setTimeout(()=>{
            if(pelis.length > 0){
                resolve(pelis);
            }else{
                reject('Error, noo hay datos en la BD')
            }
        }, 2000);
    });
}

//MOSTRAR LA INFORMACIÓN
//FORMA 1, RESOLVER PROMESA THEN() / CATCH()
/* obtenerPeliculas(peliculas)
    .then((p)=>{console.log(p) })
    .catch((error)=>{console.log(error)}); */

//FORMA 2, RESOLVER PROMESA ASYNC / AWAIT
async function mostrarPeliculas(movies){
    try {
        let respuesta = await obtenerPeliculas(movies);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}

mostrarPeliculas(peliculas);