import React from "react"; 
import './ContactoPage.css';
const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
        <div>
            <h2>Contacto Rapido</h2>
            <form action="" method="" className="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <input type="textarea" name="" width={50} />
                </p>
                <p className="acciones"> <input type="submit" value="Enviar"/></p>

            </form>

        </div>
        <div className="datos">
            <h2>Otras vias de comunicaion</h2>
            <p>Tambien pueden contactarse con nosotros usando los siguientes medios</p>
            <ul>
                <li>Telefono: 43454844</li>
                <li>Email: contacto@Transportex.com.ar</li>
                <li>Facebook: TransporteX</li>
                <li>Instagram: TransporteX</li>
            </ul>
           </div> 

    </main>

    );
}

export default ContactoPage;