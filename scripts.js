
const categorias = ["Atletismo", "Ciclismo", "Mushing",];

/*localStorage.mis_carreras =
  localStorage.mis_carreras || JSON.stringify(carreras);*/
/*localStorage.mis_carreras =
localStorage.mis_carreras || carreras;*/

//let carreras_local = JSON.stringify(carreras);
let carreras_local;
//let resultados_busqueda;

// VISTAS
const indexView = (carreras) => {

  let i = 0;
  let view = "";
  //Añadir botones reset y búsquedas
  view += `<div class="actions">
                <button class="reset">inicio</button>
                <button class="searchDate" data-my-id="${2022}">buscar 2022</button>
                <button class="searchDate" data-my-id="${2021}">buscar 2021</button>
                <button class="searchDate" data-my-id="${2020}">buscar 2020</button>
            </div>`;

  view += `<div class="actions">
            <!--<button class="reset" >inicio</button>-->
            <button class="searchCat" data-my-id="${0}">buscar atletismo</button>
            <button class="searchCat" data-my-id="${1}">buscar ciclismo</button>
            <button class="searchCat" data-my-id="${2}">buscar mushing</button>
          </div>`;

  //view+=`<div class="grid">`          
  while (i < carreras.length) {


    //OBTENER AÑO, ÚTIL PARA HACER BÚSQUEDAS
    //let year = parseDate(carreras[i].fecha).getFullYear();

    view += `
        <div class="movie" class=show data-my-id="${i}">
        
          <div class="movie-img">
               <img data-my-id="${i}" src="${carreras[i].miniatura}" onerror="this.src='files/placeholder.png'" class="show"/>
          </div>
          <div class="title" >
            <div class="show" data-my-id="${i}">
            ${carreras[i].titulo || "<em>Sin título</em>"}
            </div>
          </div>
          <div class="subtitle">
            <div class="show" data-my-id="${i}">
            ${carreras[i].fecha || "<em>Sin título</em>"}
            </div>
          </div>
          `

    /*for (let j = 0; j < carreras[i].clasificaciones.length; j++) {
      view += `<button><a href=${carreras[i].clasificaciones[j].archivo} target=_blank>${carreras[i].clasificaciones[j].titulo}</a></button> `;
    }
    //Fin de clase actions, contenedor y movie*/
    //view += `</div></div></div>\n`;
       
    //Fin de clase movie

    view += `</div>\n`;

    i = i + 1;


  }
  //cierre grid
  //view += `</div>\n`;


  return view;
};

/*const editView = (i, carrera) => {

  /*<div class="field">
  Fecha <br>
  <input  type="text" id="fecha" placeholder="Fecha" 
  value="${carrera.fecha}">
  </div>
  return `<h2>Editar Película </h2>
        <div class="field">
        Título <br>
        <input  type="text" id="titulo" placeholder="Título" 
                value="${carrera.titulo}">
        </div>
        
        </div>
        <div class="field">
        Miniatura <br>
        <input  type="text" id="miniatura" placeholder="URL de la miniatura" 
                value="${carrera.miniatura}">
        </div>
        <div class="actions">
            <button class="update" data-my-id="${i}">
                Actualizar
            </button>
            <button class="index">
                Volver
            </button></div>
       `;
};*/

const showView = (carrera) => {
  view = `
  <div class="tituloDetalle">${carrera.titulo}</div>
  <!--<a href=${carrera.miniatura}>-->
  <img id="miniaturaShow" src=${carrera.miniatura}></img>
  <!--</a>-->
  <h4>${carrera.fecha}</h4>
  <h4>${carrera.categoria}</h4>
  <div class="contenedor">
    <div class="contentTitle">
             <div>Fecha:</div>
             <div>Categoría:</div>
             <div>Hora: </div>
             <div>Inscripciones: </div>
             <div>Precio: </div>
             <div>Distancia: </div>
             <div>Organizador: </div>
             <div>Página web: </div>
             <div>Recorrido: </div>
    </div>

    <div class="contentDescription">
      <div>${formatDate(parseDate(carrera.fecha)) || "<em>Sin título</em>"}</div>
      <div>${carrera.categoria || "<em>Sin título</em>"}</div>
      <div>${formatDate(parseDate(carrera.fecha)) || "<em>Sin título</em>"}</div>
      <div>${formatDate(parseDate(carrera.fecha)) || "<em>Sin título</em>"}</div>
      <div>${formatDate(parseDate(carrera.fecha)) || "<em>Sin título</em>"}</div>
      <div>${formatDate(parseDate(carrera.fecha)) || "<em>Sin título</em>"}</div>
      <div>${formatDate(parseDate(carrera.fecha)) || "<em>Sin título</em>"}</div>
      <div>${formatDate(parseDate(carrera.fecha)) || "<em>Sin título</em>"}</div>
      <div>${formatDate(parseDate(carrera.fecha)) || "<em>Sin título</em>"}</div>
    </div>
  </div>
  <div class="actions">`  

  
  for (let j = 0; j < carrera.clasificaciones.length; j++) {
    view += `<button><a href=${carrera.clasificaciones[j].archivo} target=_blank>${carrera.clasificaciones[j].titulo}</a></button> `;
  }

  view+=
  `</div>
  <div class="actions">
     <button class="index">Volver</button>
  </div>`
  //Fin de clase actions, contenedor 
  view += `</div></div>\n`;
  return view;
};

/*const newView = () => {
  return `<h2>Crear Película</h2>
          Introducir  título: <input type="text" id="titulo"> <br>
          Introducir url de la miniatura:<input type="text" id="miniatura"> <br>
          <div class="actions">
            <button class="create">Crear</button>
            <button class="index">Volver</button>
          </div>`;

  //          Introducir fecha:<input type="text" id="fecha"> <br>

};*/

/*const searchView = (carreras) => {
  return '<h2>resultado búsqueda</h2>'

}*/

// CONTROLADORES
const indexContr = () => {
  //let mis_carreras = JSON.parse(localStorage.mis_carreras);
  //let mis_carreras = carreras;

  //reset
  carreras_local = carreras;
  document.getElementById("main").innerHTML = indexView(carreras_local);
};

const showContr = (i) => {
  // let carrera = JSON.parse(localStorage.mis_carreras)[i];
  let carrera = carreras[i];

  document.getElementById("main").innerHTML = showView(carrera);
};

/*const newContr = () => {
  document.getElementById("main").innerHTML = newView();
};*/

/*const createContr = () => {
  let mis_carreras = JSON.parse(localStorage.mis_carreras);

  mis_carreras.push({
    titulo: document.getElementById("titulo").value,
    //fecha: document.getElementById("fecha").value,
    miniatura: document.getElementById("miniatura").value,
  });
  localStorage.mis_carreras = JSON.stringify(mis_carreras);
  //mis_peliculas_iniciales.push(JSON.stringify(mis_peliculas))

  indexContr();
};*/

/*const editContr = (i) => {
  let carrera = JSON.parse(localStorage.mis_carreras)[i];
  document.getElementById("main").innerHTML = editView(i, carrera);
};*/

/*const updateContr = (i) => {
  let mis_carreras = JSON.parse(localStorage.mis_carreras);
  mis_carreras[i].titulo = document.getElementById("titulo").value;
  //mis_carreras[i].fecha = document.getElementById("fecha").value;
  mis_carreras[i].miniatura = document.getElementById("miniatura").value;
  localStorage.mis_carreras = JSON.stringify(mis_carreras);
  indexContr();
};*/

/*const deleteContr = (i) => {
  let mis_carreras = JSON.parse(localStorage.mis_carreras);

  if (
    confirm(
      `¿Está seguro de que desea borrar la película ${mis_carreras[i].titulo}?`
    )
  ) {
    mis_carreras.splice(i, 1);
    localStorage.mis_carreras = JSON.stringify(mis_carreras);
  }
  indexContr();

};*/

/*const resetContr = () => {
  //let mis_carreras = JSON.parse(localStorage.mis_carreras);
  //carreras_local = carreras;
  if (
    confirm(
      `¿Está seguro de que desea resetear la lista de carreras?`
    )
  ) {
  //carreras_local = carreras;
  //localStorage.mis_carreras = JSON.stringify(carreras_local);
  //}
  indexContr();
};*/

const searchDateContr = (year) => {
  let resultado = [];

  for (i = 0; i < carreras.length; i++) {
    if (parseDate(carreras[i].fecha).getFullYear() == year) {
      //Encontrado
      resultado.push(carreras[i]);
    }
  }

  document.getElementById("main").innerHTML = indexView(resultado);
}

const searchCatContr = (cat) => {
  let resultado = [];
  for (i = 0; i < carreras.length; i++) {
    // alert("i: " + i + " carrera: " + carreras[i].titulo + " categoria " + carreras[i].categoria)
    if (carreras[i].categoria == categorias[cat]) {
      //Encontrado
      resultado.push(carreras[i]);
    }
  }
  document.getElementById("main").innerHTML = indexView(resultado);
}

// Inicialización
document.addEventListener("DOMContentLoaded", indexContr);



// ROUTER de eventos
const matchEvent = (ev, sel) => ev.target.matches(sel);
const myId = (ev) => Number(ev.target.dataset.myId);

document.addEventListener("click", (ev) => {
  if (matchEvent(ev, ".index")) indexContr(carreras);
  //else if (matchEvent(ev, ".edit")) editContr(myId(ev));
  //else if (matchEvent(ev, ".update")) updateContr(myId(ev));
  else if (matchEvent(ev, ".show")) showContr(myId(ev));
  //else if (matchEvent(ev, ".title")) showContr(myId(ev));

  //else if (matchEvent(ev, ".new")) newContr();
  //else if (matchEvent(ev, ".create")) createContr();
  //else if (matchEvent(ev, ".delete")) deleteContr(myId(ev));
  else if (matchEvent(ev, ".reset")) indexContr();
  else if (matchEvent(ev, ".searchDate")) searchDateContr(myId(ev));
  else if (matchEvent(ev, ".searchCat")) searchCatContr(myId(ev));


});



//Formateo de fechas
const formatDate = (current_datetime) => {
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  let formatted_date = current_datetime.getDate() + " de " + months[current_datetime.getMonth()] + " de " + current_datetime.getFullYear();
  return formatted_date;
}

function parseDate(str) {
  var m = str.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
  return (m) ? new Date(m[3], m[2] - 1, m[1]) : null;
}

