import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Colaborador from './componentes/Colaborador';
import Footer from './componentes/Footer';

function App() {
  const [MostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),   
      equipo:"Front End",
      foto:"https://github.com/Ashelesss.png",
      nombre:"Albeiro Alexander ",
      puesto:"Estudiante",
      fav: true
    },
    {
      id: uuid(),   
      equipo:"Front End",
      foto:"https://github.com/harlandlohora.png",
      nombre:"harland lohora ",
      puesto:"Instructor",
      fav: false
    },
    {
      id: uuid(),   
      equipo:"Programación",
      foto:"https://github.com/genesysaluralatam.png",
      nombre:"Genesys Rondon ",
      puesto:"Desarroladora de sotware e Instructora",
      fav: true
    },
    {
      id: uuid(),   
      equipo:"UX y Diseño",
      foto:"https://github.com/JeanmarieAluraLatam.png",
      nombre:"Jean Martie",
      puesto:"Instructor en Alura Latam",
      fav: false
    },     {
      id: uuid(),   
      equipo:"Programación",
      foto:"https://github.com/christianpva.png",
      nombre:"Christian ",
      puesto:"Instructor y head de Alura",
      fav: true
    },
    {
      id: uuid(),   
      equipo:"Front End",
      foto:"https://github.com/JoseDarioGonzalezCha.png",
      nombre:"Jose Dario",
      puesto:"Dev FullStack",
      fav: true
    }
  ])

  const [equipos, actualizarEquipos] = useState([

      {
        id: uuid(),
        titulo:"Programación",
        colorPrimario:"#57C278",
        colorSecundario:"#D9F7E9"
      },
      {
        id: uuid(),        
        titulo:"Front End",
        colorPrimario:"#82CFFA",
        colorSecundario:"#E8F8FF"    
      },
      {
        id: uuid(),
        titulo:"Data Science",
        colorPrimario:"#A6D157",
        colorSecundario:"#F0F8E2"   
      },
      {
        id: uuid(),
        titulo:"Devops",
        colorPrimario:"#E06B69",
        colorSecundario:"#FDE7E8"   
      },
      {
        id: uuid(),
        titulo:"UX y Diseño",
        colorPrimario:"#DB6EBF",
        colorSecundario:"#FAE9F5"   
      },
      {
        id: uuid(),
        titulo:"Móvil",
        colorPrimario:"#FFBA05",
        colorSecundario:"#FFF5D9"   
      },
      {
        id: uuid(),
        titulo:"Innovación y Gestión",
        colorPrimario:"#FF8A29",
        colorSecundario:"#FFEEDF"   
      }
  ])

  // Ternario --> condición ? seMuestra : noSeMuestra
  
  const cambiarMostrar = () => {
    actualizarMostrar(!MostrarFormulario)
  }
//Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador", colaborador)
    //spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }
//Eliminar Colaborador
const eliminarColaborador = (id) => {
  console.log("Eliminar Colaborador", id)
  const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id !== id)
  actualizarColaboradores(nuevosColaboradores)
}

//Actualizar Color
const actualizarColor = (color, id) => {
  console.log("actualizar", color, id)
  const equiposActualizados = equipos.map((equipo) =>{
    if(equipo.id === id){
      equipo.colorPrimario = color
    }
    return equipo
  })
  actualizarEquipos(equiposActualizados)
}

//Crear equuipo
const crearEquipo = (nuevoEquipo) => {
  console.log("actualizar",nuevoEquipo)
  actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid() }])
  }

// favoritos
const like = (id) => {
  const colaboradoresActualizados = colaboradores.map((colaborador) => {
    if (colaborador.id == id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
  actualizarColaboradores(colaboradoresActualizados)
}

  return (
    <div>
      <Header/>
      {/* MostrarFormulario === true ? <Formulario/> : <></>*/}
        {/*  condicion si es verdadera entonces ejecutar esta sino esta*/}
        {
          MostrarFormulario && <Formulario  
            equipos={equipos.map((equipo)=> equipo.titulo)} 
            registrarColaborador={registrarColaborador}
            crearEquipo={crearEquipo}
            /> 
            
        } 
      
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map((equipo) => <Equipo 
        datos={ equipo } 
        key={ equipo.titulo } 
        colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )}
        eliminarColaborador={eliminarColaborador} 
        actualizarColor={actualizarColor}
        like={like}
        />
        )
      }
      <Footer/>

    </div>
  );
}

export default App
