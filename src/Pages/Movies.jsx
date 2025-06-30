import axios from "axios"
import { useEffect, useState } from "react"
import MovieCard from "../Components/MovieCard";

export default function Movies() {
    const [movie, setMovie] = useState([]);
    const [search, setSearch] = useState('')

    const fetchMovies = (searchQuery = '') => {
        axios.get('http://localhost:3000/movies', { params: { search: searchQuery } }).then(res => {
            setMovie(res.data.data)
        })
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    const handleSearch = () => {

        fetchMovies(search)
    }
    return (
        <>
            <main>

                <section className="container py-5">
                    <h1 className="text-center">Catalogo</h1>
                    <div className="wrapper">
                        <input
                            type="text"
                            placeholder="Cerca film qui"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                            className="btn btn-outline-primary search-movies mx-2"
                            onClick={handleSearch}
                        >Cerca</button>
                    </div>

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                        {
                            movie.map(curMovie => {
                                return (
                                    <MovieCard movie={curMovie} />
                                )

                            })
                        }
                    </div>


                </section>
            </main>


        </>
    )
}