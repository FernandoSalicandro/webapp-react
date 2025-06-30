import { Link } from "react-router"
export default function MovieCard({ movie }) {
    const { id, slug, title, image, abstract } = movie
    return (
        <>
            <div key={id} className="col g-2">
                <div className="card h-100 p-2">
                    <h2>{title}</h2>
                    <img src={image || "https://placehold.co/334x334?text=No Image"} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        {abstract}
                        
                    </div>
                    <Link className='btn btn-primary' to={`/movies/${slug}`}>Vedi Dettagli</Link>
                </div>
            </div>
        </>
    )
}