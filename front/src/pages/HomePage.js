import React from "react";
const HomePage = (props) => {
    return (
        <main className="holder">
            <div clasName="homeimg">
                <img src="img/home/img01.jpg" alt="avion" />
            </div>
            <div clasName="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.   </p>
                </div>
                <div clasName="testimonios right">
                    <h2>Testimonios</h2>
                    <div clasName="testimiono">
                        <span clasName="cita">Simplemente exelente</span>
                        <span clasName="autor">Juan Perez</span>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default HomePage;