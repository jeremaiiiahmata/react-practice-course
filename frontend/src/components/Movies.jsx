import {React, useEffect, useState} from 'react'
import { Row, Col } from 'react-bootstrap';
import MovieItem from './MovieItem';

const Movies = () => {
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => { //useEffect executes at the first time the page has loaded.
    const fetchData = async () => {
        try{
            setLoading(true);
            const response = await fetch("http://127.0.0.1:8000/api/movies/");
            const result = await response.json()
            setData(result);

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
                {data.map((movie) => (
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