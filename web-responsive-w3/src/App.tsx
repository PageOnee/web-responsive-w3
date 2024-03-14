import React from 'react';

function App() {
  // Datos de ejemplo para las tarjetas
  const juegos = [
    { id: 1, nombre: "Dark Souls", descripcion: "Descripción del juego 1", image:'https://image.api.playstation.com/cdn/UP0700/CUSA03388_00/v8JlD8KcQUtTqaLBmpFnj1ESRR5zMkLk.png'},
    { id: 2, nombre: "Darks Souls II", descripcion: "Descripción del juego 2", image:'https://image.api.playstation.com/vulcan/img/rnd/202010/1216/oSOVmvoekCf9ASaAItqfKvpP.png'},
    { id: 3, nombre: "Dark Souls III", descripcion: "Descripción del juego 3" , image:'https://image.api.playstation.com/cdn/UP0700/CUSA03388_00/v8JlD8KcQUtTqaLBmpFnj1ESRR5zMkLk.png'},
    { id: 4, nombre: "Hollow Knight", descripcion: "Descripción del juego 4", image:'https://image.api.playstation.com/cdn/UP0700/CUSA03388_00/v8JlD8KcQUtTqaLBmpFnj1ESRR5zMkLk.png'},
    { id: 5, nombre: "The Witcher III", descripcion: "Descripción del juego 5" , image:'https://image.api.playstation.com/cdn/UP0700/CUSA03388_00/v8JlD8KcQUtTqaLBmpFnj1ESRR5zMkLk.png'},
    { id: 6, nombre: "Stardew Valley", descripcion: "Descripción del juego 6" , image:'https://image.api.playstation.com/cdn/UP0700/CUSA03388_00/v8JlD8KcQUtTqaLBmpFnj1ESRR5zMkLk.png'},
    { id: 7, nombre: "Assassins Credd II", descripcion: "Descripción del juego 7" , image:'https://image.api.playstation.com/cdn/UP0700/CUSA03388_00/v8JlD8KcQUtTqaLBmpFnj1ESRR5zMkLk.png'},
    { id: 9, nombre: "Metro Last Light", descripcion: "Descripción del juego 9" , image:'https://image.api.playstation.com/cdn/UP0700/CUSA03388_00/v8JlD8KcQUtTqaLBmpFnj1ESRR5zMkLk.png'},
    { id: 10, nombre: "Halo Master Chief Collection", descripcion: "Descripción del juego 10" , image:'https://image.api.playstation.com/cdn/UP0700/CUSA03388_00/v8JlD8KcQUtTqaLBmpFnj1ESRR5zMkLk.png'},
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand" href="#">Steam</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Inicio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Juegos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Acerca de</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <div className="container-fluid flex-grow-1 mt-4">
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <h1>Bienvenido a Steam</h1>
              </div>
            </div>
            <div className="row mt-4">
              {juegos.map(juego => (
                <div key={juego.id} className="col-md-4 mb-4">
                  <div className="card">
                    <img src={`${juego.image}`}  className="card-img-top" alt={`Imagen de ${juego.nombre}`} />
                    <div className="card-body">
                      <h5 className="card-title">{juego.nombre}</h5>
                      <p className="card-text">{juego.descripcion}</p>
                      <a href="#" className="btn btn-primary">Ver más</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
