const categorias = ["Carreras a pie", "Ciclismo", "BTT", "Mushing",];

let carreras_local;
let resultados_busqueda;
let enlace_inscripciones;

// VISTAS
const indexView = (carreras, seccion) => {

  let i = 0;
  let view = "";
  //Discrimino entre servicios y el resto, si hubiese que hacer más categorías separar en if / else if
  let show = seccion == "servicios" ? "showServicios" : "show";
  while (i < carreras.length) {
    view += `
        <div class="${show} movie "  data-my-id="${i}">
        
          <div class="movie-img">
               <img data-my-id="${i}" src="${carreras[i].miniatura}" onerror="this.src='assets/placeholder.png'" class="${show}"/>
          </div>
          <div class="title" >
            <div class="${show}" data-my-id="${i}">
            ${carreras[i].titulo || "<em>Sin título</em>"}
            </div>
          </div>
          <div class="subtitle">
            <div class="${show}" data-my-id="${i}">
            ${carreras[i].fecha || ""}
            </div>
          </div>
          </div>\n
          `
    i = i + 1;
  }
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
  <div class="contenedorDetalle">
    <img id="miniaturaShow" src=${carrera.miniatura}></img>

    <div class="contentTitle">
             <div class="elementoTitulo">Fecha:</div>
             <div class="elementoTitulo">Categoría:</div>
             <div class="elementoTitulo">Hora: </div>
             <div class="elementoTitulo">Distancia: </div>             
             <div class="elementoTitulo">Organizador: </div>
             
    </div>

    <div class="contentDescription">
      <div class="elementoDescription">${formatDate(parseDate(carrera.fecha))}</div>
      <div class="elementoDescription">${carrera.categoria}</div>
      <div class="elementoDescription">${carrera.hora}</div>
      <div class="elementoDescription">${carrera.distancia}</div>
      <div class="elementoDescription">${carrera.organizador}</div>
      
    </div>
    <div class="actions">`

    if (carrera.inscripciones != undefined) {
      //view+=`<p>hola</p>`
      //view+=`${carrera.inscripciones}`
      enlace_inscripciones=carrera.inscripciones;
      //view += `<div class="actions">`
      //view += `<a class = "new" href=${carrera.inscripciones} target=_blank><button class="new">Inscripciones</button></a> `;
      view += `<button class="inscripciones">Inscripciones</button>`;/*${carrera.inscripciones}*/
  
      //view += `</div>`
  
    }
  for (let j = 0; j < carrera.botones.length; j++) {
    view += `<a href=${carrera.botones[j].archivo} target=_blank><button>${carrera.botones[j].titulo}</button></a> `;
    //view += `<button href=${carrera.clasificaciones[j].archivo} target=_blank>${carrera.clasificaciones[j].titulo}</button> `;
    //view+=`${carrera.inscripciones}`;
  }


  view += `</div>` //Cierre actions

  view += `</div>` //Cierre contenedorDetalle
  /*view+=`<div class="actions">
     <button class="index">Volver</button>
  </div>`*/
  //Fin de clase actions, contenedor 
  //view += `</div></div>\n`;
  return view;
};


const showServiciosView = (carrera) => {
  view = `
  <div class="tituloDetalle">${carrera.titulo}</div>
  <div class="contenedorDetalleServicios">
  <img id="miniaturaShowServicios" src=${carrera.miniatura}></img>
  <div class="descServicios">

    <!--<h2>Descripcion 1</h2>

    <h2>Descripcion 2</h2>
    <p></p>
    <p>Introducir descripción en campo de servicios.js</p>
    <p>Contenido de archivo a continuación</p>-->
    ${carrera.descripcion}
  </div></div>`

  //view += `</div>`
  return view;
};

const inscripcionesView = (web) => {
  alert(web);
  view = "";
  view += `<h2><Inscripciones></h2>
          Introducir  título: <input type="text" id="titulo"> <br>
          Introducir url de la miniatura:<input type="text" id="miniatura"> <br>
          <div class="actions">
            <button class="create">Crear</button>
            <button class="index">Volver</button>
          </div>`;
          view+=`${web}`;
  return view;

  //          Introducir fecha:<input type="text" id="fecha"> <br>

};

const menuView = () => {
  view = "";

  view += `<ul>
            <li class="proximos">
              <p class="proximos">próximos eventos </p>
            </li>

            <li class="servicios">
            <p class="servicios">servicios</p>
            </li>

            <li onmouseover="ver(3), ver(5)" >
                <p>Clasific prueba</p>
                <div id="subseccion3">
                  <button onmouseover="ver(4)" >por año</button>
                </div>
                <div id="subseccion4" onmouseover="ver(3), ver(4)" onmouseout="ocultar(3), ocultar(4)" >
                  <ul>
                  <button class="searchDate" data-my-id="${2022}" >2022</button>
                  <button class="searchDate" data-my-id="${2021}" >2021</button>
                  <button class="searchDate" data-my-id="${2020}" >2020</button>
                  <button class="searchDate" data-my-id="${2019}" >2019</button>
                  <button class="searchDate" data-my-id="${2018}" >2018</button>
                  <button class="searchDate" data-my-id="${2017}" >2017</button>
                  <button class="searchDate" data-my-id="${2016}" >2016</button>
                  <button class="searchDate" data-my-id="${2015}" >2015</button>
                  </ul>
                </div>
                

                






            </li>
       
      


            <li class="reset">
              <p class="reset">clasificaciones</p>
            </li>

            <li class="hidden" onmouseover="ver(1)" onmouseout="ocultar(1)">
              <p>Año</p>
              <div id="subseccion1">
                <button class="searchDate" data-my-id="${2022}">2022</button>
                <button class="searchDate" data-my-id="${2021}">2021</button>
                <button class="searchDate" data-my-id="${2020}">2020</button>
                <button class="searchDate" data-my-id="${2019}">2019</button>
                <button class="searchDate" data-my-id="${2018}">2018</button>
                <button class="searchDate" data-my-id="${2017}">2017</button>
                <button class="searchDate" data-my-id="${2016}">2016</button>
                <button class="searchDate" data-my-id="${2015}">2015</button>
 
              </div>
            </li>
            <li  id="hidden" onmouseover="ver(2)" onmouseout="ocultar(2)">
              <p>Categoría</p>
              <div id="subseccion2">
              <button class="searchCat" data-my-id="${0}">Carreras a pie</button>
              <button class="searchCat" data-my-id="${1}">ciclismo</button>
              <button class="searchCat" data-my-id="${2}">BTT</button>
              <button class="searchCat" data-my-id="${3}">mushing</button>
              </div>			
            </li>
            <li class="contacto">
            <p class="contacto">contacto</p>
            </li>
            
          </ul>`

  return view;
}

const contactoView = () => {
  view = "";

  view += `<h1>Formulario de contacto</h1>
  
  <p>Si quiere ponerse en contacto con nosotros hágalo a través, cualquiera de estos medios:
  teléfono, e-mail o rellene el formulario que tiene a continuación.</p>

  <h3>Rubén: 666666666</h3>
  <h3>Samuel: 666666666</h3>
  <h3>email: rssports@666666666</h3>





  
  `

  return view;
}


// CONTROLADORES
const indexContr = () => {
  carreras_local = carreras;
  resetContr(carreras_local);
};

const proximosContr = () => {
  //let mis_carreras = JSON.parse(localStorage.mis_carreras);
  //let mis_carreras = carreras;

  //reset
  resultados_busqueda = proximos;
  //document.getElementById("main").innerHTML = indexView(carreras_local);
  document.getElementById("main").innerHTML = indexView(proximos, "proximos");
};

const serviciosContr = () => {

  resultados_busqueda = servicios;
  document.getElementById("main").innerHTML = indexView(servicios, "servicios");
};

const showContr = (i) => {
  let carrera = resultados_busqueda[i];
  document.getElementById("main").innerHTML = showView(carrera);
};

const showServiciosContr = (i) => {
  // let carrera = JSON.parse(localStorage.mis_carreras)[i];
  //let carrera = carreras[i];
  let carrera = resultados_busqueda[i];

  document.getElementById("main").innerHTML = showServiciosView(carrera);
};

const resetContr = (carreras) => {
  resultados_busqueda = carreras;
  document.getElementById("main").innerHTML = indexView(resultados_busqueda, "clasificaciones");
};

const searchDateContr = (year) => {
  let resultado = [];

  for (i = 0; i < carreras.length; i++) {
    if (parseDate(carreras[i].fecha).getFullYear() == year) {
      //Encontrado
      resultado.push(carreras[i]);
    }
  }
  resultados_busqueda = resultado;

  document.getElementById("main").innerHTML = indexView(resultado, "clasifDate");
}

const searchCatContr = (cat) => {
  let resultado = [];
  for (i = 0; i < carreras.length; i++) {
    if (carreras[i].categoria == categorias[cat]) {
      //Encontrado
      resultado.push(carreras[i]);
    }
  }
  resultados_busqueda = resultado;
  document.getElementById("main").innerHTML = indexView(resultado, "clasifCat");
}

const menuContr = () => {
  document.getElementById("navegador").innerHTML = menuView();
}

const contactoContr = () => {
  document.getElementById("main").innerHTML = contactoView();
}


//CONTROLADORES SIN USAR
const inscripcionesContr = () => {
  //document.getElementById("main") = fetch("/inscripciones/detalles-evento/evento/1-prueba(copiar%20de%20aqui).html")//'/inscripciones/detalles-evento/evento/1-prueba(copiar%20de%20aqui).html';//inscripcionesView(web);
  //document.getu
  //document.getElementById("main").innerHTML = "";inscripcionesView(web);
  /*fetch("/inscripciones/detalles-evento/evento/1-prueba(copiar%20de%20aqui).html").then(response=>{
    return response.text()
  }).then(data=>{
    document.getElementById("main").innerHTML=data;
  })*/
  //alert(enlace_inscripciones)
  //document.getElementById("main").innerHTML='<object type="text/html" data="/inscripciones/detalles-evento/evento/1-prueba(copiar%20de%20aqui).html" ></object>';
  document.getElementById("main").innerHTML=`<object class="htmlinscripciones" type="text/html" data="${enlace_inscripciones}" ></object>`;

  //document.getElementById("main").innerHTML=`<div w3-include-html="/inscripciones/detalles-evento/evento/1-prueba(copiar%20de%20aqui).html"></div>`


};

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



// Inicialización
document.addEventListener("DOMContentLoaded", proximosContr);
document.addEventListener("DOMContentLoaded", menuContr);

// ROUTER de eventos
const matchEvent = (ev, sel) => ev.target.matches(sel);
const myId = (ev) => Number(ev.target.dataset.myId);

document.addEventListener("click", (ev) => {
  //Añadir nueva clase de boton para las de inicio (próximos)
  if (matchEvent(ev, ".reset")) resetContr(carreras);
  else if (matchEvent(ev, ".proximos")) proximosContr();
  else if (matchEvent(ev, ".servicios")) serviciosContr();
  else if (matchEvent(ev, ".show")) showContr(myId(ev));
  else if (matchEvent(ev, ".showServicios")) showServiciosContr(myId(ev));
  else if (matchEvent(ev, ".searchDate")) searchDateContr(myId(ev));
  else if (matchEvent(ev, ".searchCat")) searchCatContr(myId(ev));
  else if (matchEvent(ev, ".contacto")) contactoContr();

  //Controladores no usados en esta versión
  //if (matchEvent(ev, ".index")) indexContr();
  else if (matchEvent(ev, ".inscripciones")) inscripcionesContr();
  //else if (matchEvent(ev, ".create")) createContr();
  //else if (matchEvent(ev, ".delete")) deleteContr(myId(ev));
  //else if (matchEvent(ev, ".edit")) editContr(myId(ev));
  //else if (matchEvent(ev, ".update")) updateContr(myId(ev));
});

//Formateo de fechas
const formatDate = (current_datetime) => {
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  let formatted_date = current_datetime.getDate() + " de " + months[current_datetime.getMonth()] + " de " + current_datetime.getFullYear();
  return formatted_date;
}

function parseDate(str) {
  //var m = str.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
  //Formato dd/mm/aaaa o dd-mm-aaaa
  var m = str.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
  return (m) ? new Date(m[3], m[2] - 1, m[1]) : null;
}

//Funciones menú desplegable
function ver(n) {
  document.getElementById("subseccion" + n).style.display = "block"
}
function ocultar(n) {
  document.getElementById("subseccion" + n).style.display = "none"
}