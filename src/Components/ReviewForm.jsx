import { useState } from "react";
import axios from "axios";

export default function ReviewForm({ movieId, onReviewAdded }) {
    const [formData, setFormData] = useState({
        name: '',
        vote: '',
        text: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:3000/movies/${movieId}/reviews`, formData)
            .then(res => {
                setFormData({
                    name: '',
                    vote: '',
                    text: '',
                });
                
                // Aggiungi questa chiamata per aggiornare la lista delle recensioni
                if (onReviewAdded) {
                    onReviewAdded(res.data.data);
                }
            })
            .catch(error => {
                console.error('Errore:', error);
            });
    }

    return (
        <div className="review-form mt-4">
            <h3>Aggiungi Una Recensione</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                        required
                    />
                </div>

             
                <div className="mb-3">
                    <label htmlFor="vote" className="form-label">Voto (1-5)</label>
                    <input
                        type="number"
                        className="form-control"
                        min="1"
                        max="5"
                        value={formData.vote}
                        onChange={(e) => setFormData({ ...formData, vote: parseInt(e.target.value) })}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Recensione</label>
                    <textarea
                        className="form-control"
                        value={formData.text}
                        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                        rows="3"
                    ></textarea>
                </div>

                <button 
                    type="submit"
                    className="btn btn-primary mb-3">
                    Invia Recensione
                </button>
            </form>
        </div>
    );
}