import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, ListGroupItem } from 'react-bootstrap'
import Rating from "../components/Rating"
import axios from "axios"

const MoviePage = () => { 

  const { id } = useParams(); //use this when you need to fetch something from the URL into the API
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      console.log(`Fetching movie with ID: ${id}`);

      try {

        setLoading(true);
        const { data } = await axios.get(`/api/movies/${id}`);
        console.log(`Data : ${data}`);

        setMovie(data);

      } catch (error) {

        console.log(`Error: ${error.message}`);
        setError(error.response.status);

      } finally {

        console.log(`Fetch done.`);
        setLoading(false);

      }
    };

    fetchData();
  }, [id]); // Include dependency

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Render fetched data
  return (
    <div>
      <Row className='py-5 my-2'> 
        <Col md={6}>
          <Image src="../public/images/placeholder.png" fluid/>
        </Col>

        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h1>{movie?.title}</h1>
            </ListGroup.Item>

            <ListGroup.Item>
             <p>{movie?.description}</p>
            </ListGroup.Item>

            <ListGroup.Item>
             <Rating value={movie.averageRating} text={`${movie.ratingsCount} reviews`} color={"#f8e825"}/>
            </ListGroup.Item>

            <ListGroup.Item>
              <Link to="/" className='btn btn-dark my-3'> Go back</Link>
            </ListGroup.Item>

          </ListGroup>
          
        </Col>

        <Col md={3}>
        </Col>
      </Row>
      
    </div>
  );
};


export default MoviePage