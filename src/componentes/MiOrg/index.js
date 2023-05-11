import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props ) => {
/*     const [mostrar, actualizarMostrar] = useState(true)
    const manejarClick = () => {
        console.log("Mostrar/ocultar Elemento", !mostrar)
        actualizarMostrar(!mostrar)
    }*/
    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/Botão add-01 1.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg