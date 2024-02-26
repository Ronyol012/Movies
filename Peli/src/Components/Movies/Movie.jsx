import React from 'react'
import '../Movies/Movie.css'
import portada from 'C:/Users/rony1/Desktop/PracticasReactItla/Peliculas/Peli/src/assets/Portada.jpg'


const Movie = () => {
  return (
    <div>
        <div className="Container">
            <div className="imageM">
                <img src={portada} alt="" />
            </div>
            <div className="NameSection">
                <p className="titulo">
                    Titulo
                </p>
                
            </div>
            <div className="descriptionZone">
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas tempora culpa at aliquam, nostrum, veritatis error minus eligendi doloribus est placeat distinctio ex explicabo libero laudantium obcaecati illum. Delectus.
                </p>
                <p className="Categoria">
                    Accion
                </p>
                <p className="tiempo">
                    1:05 Horas
                    </p>
                <button className="Expand">
                    Ver más
                </button>
            </div>
        </div>
    </div>
  )
}

export default Movie