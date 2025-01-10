import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating.jsx'
import { Link } from 'react-router-dom'

const MovieItem = ({ movie }) => {
  return (
    <Card className='my-3 py-3 px-3 rounded'>
        <Link to={`products/${movie.id}`}>
            <Card.Img src="../images/placeholder.png"/>
        </Link>

        <Card.Body>
            <Link to={`products/${movie.id}`}>
                <Card.Title as="div">
                    <strong>{movie.title}</strong>
                </Card.Title>
            </Link>

                <Card.Text as="div">
                    <div className='my-3'>
                        {movie.description}
                    </div>
                </Card.Text>

                <Card.Text as="div">
                    <div className='my-3'>
                        <Rating value={movie.averageRating} text={`${movie.ratingsCount} reviews`} color={'#f8e825'}/>
                    </div>
                </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default MovieItem