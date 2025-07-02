import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateMovie() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        director: '',
        genre: '',
        release_year: '',
        abstract: '',
        image: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({
            ...prev,
            image: e.target.files[0]
        }));
    };

        const handleSubmit = (e) => {
        e.preventDefault();
        
        const data = new FormData();
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });

        axios.post('http://localhost:3000/movies', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            navigate(`/movies/${response.data.slug}`);
        })
        .catch(error => {
            console.error('Errore durante la creazione del film:', error);
        });
    };

    return (
        <main className="container mt-4">
            <h1 className="text-center mb-4">Crea un film</h1>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Titolo</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="director" className="form-label">Regista</label>
                    <input
                        type="text"
                        className="form-control"
                        id="director"
                        name="director"
                        value={formData.director}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="genre" className="form-label">Genere</label>
                    <input
                        type="text"
                        className="form-control"
                        id="genre"
                        name="genre"
                        value={formData.genre}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="release_year" className="form-label">Anno di uscita</label>
                    <input
                        type="number"
                        className="form-control"
                        id="release_year"
                        name="release_year"
                        value={formData.release_year}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="abstract" className="form-label">Trama</label>
                    <textarea
                        className="form-control"
                        id="abstract"
                        name="abstract"
                        value={formData.abstract}
                        onChange={handleInputChange}
                        rows="3"
                        required
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Copertina del film</label>
                    <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        onChange={handleFileChange}
                        accept="image/*"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Crea Film</button>
            </form>
        </main>
    );
}