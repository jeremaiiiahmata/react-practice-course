import {React, useEffect, useState} from 'react'
import { Row, Col } from 'react-bootstrap';
import MovieItem from './MovieItem';
import axios from 'axios';

const Movies = () => {
    
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => { //useEffect executes at the first time the page has loaded.
    const fetchData = async () => {
        try{
            setLoading(true);
            const { data } = await axios.get('/api/movies/');
            console.log('API Response:', data);
            setMovies(data);

        } catch (error) {
            console.log(error);
            setError(error.message)
        } finally {
            setLoading(false)
        } 
    };
    
        fetchData();
    
    }, [])
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error}</p>

  return (
    <>
        <div>
            <Row>
                {movies.map((movie) => (
                    <Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
                        <MovieItem movie={movie}/>
                    </Col>
                ))}
        </Row>
        </div>
    </>
  )
}

export default Movies