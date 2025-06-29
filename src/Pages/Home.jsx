import { Link } from "react-router"

export default function Home() {
    return (
        <main>
            <section>
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active position-relative">
                            <img src="/img/movieBanner.png" className="d-block w-100" alt="..."/>
                            <h1 className="text-center position-absolute top-50 start-50 translate-middle bg-body-secondary p-5 ">Consulta il catalogo e lascia recensioni</h1>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                
            </section>
            <section className="container py-5">
                <h2 className="text-center">Consulta il Nostro Catalogo</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus veniam similique adipisci at dicta maiores aspernatur explicabo provident, molestias nostrum ut ea voluptatum architecto, ducimus dolorum delectus, porro corrupti cupiditate!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis repudiandae, necessitatibus fuga odit aspernatur, facere itaque inventore id, voluptates qui sapiente numquam sint eum iure. Perferendis adipisci architecto accusantium tenetur.</p>
                <Link className='btn btn-warning' to={'/movies'}>Vedi tutti i nostri film</Link>
            </section>
        </main>
    )
}