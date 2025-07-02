import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router"
import axios from "axios";
import ReviewCard from "../Components/ReviewCard";
import ReviewForm from "../Components/ReviewForm";

export default function MoviePage() {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${slug}`)
            .then(resp => {
                const movieDetails = resp.data.data;
                setMovie(movieDetails)
            })
            .catch((err) => {
                if(err.status === 404) {
                    navigate('/not-found')
                }
            });
    }, []);

    const handleReviewAdded = (newReview) => {
        setMovie(prevMovie => ({
            ...prevMovie,
            reviews: [...prevMovie.reviews, newReview]
        }));
    };

    const goBack = (event) => {
        event.preventDefault()
        navigate(-1)
    }

    return (
        <main>
            {movie && (
                <>
                    {movie.image && (
                        <section>
                            <img className="banner" src={movie.image} alt="" />
                        </section>
                    )}
                    <a className='btn btn-outline-primary my-2 mx-2' href="" onClick={goBack}>Torna Indietro</a>

                    <h1 className="text-center my-4">{movie.title} - {movie.director} - {movie.release_year}</h1>
                    <h2 className="text-center my-4">{movie.abstract}</h2>

                    <section>
                        <div className="container">
                            <h2>Recensioni</h2>
                            {movie.reviews.length === 0 ? (
                                <div className="alert alert-info">Nessuna recensione per questo film</div>
                            ) : (
                                <div className="row row-cols-1 g-3">
                                    {movie.reviews.map(curReview => (
                                        <div className="col" key={curReview.id}>
                                            <ReviewCard review={curReview} />
                                        </div>
                                    ))}
                                </div>
                            )}

                            <ReviewForm 
                                movieId={movie.id} 
                                onReviewAdded={handleReviewAdded}
                            />
                        </div>
                    </section>
                </>
            )}
        </main>
    );
}