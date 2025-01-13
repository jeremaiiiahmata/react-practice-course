import {React, useEffect, useState} from 'react'

const Form = (props) => {

const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [responseMessage, setResponseMessage] = useState("");

    const titleChange = (event) => {
        setTitle(event.target.value)
    }

    const descriptionChange = (event) => {
      setDescription(event.target.value)
    }
    
    const handleSubmit = async (e) => {
      // e.preventDefault(); //prevents a browser reload/refresh.

      const data = {
        title : title,
        description : description
      };

      try {

        const response = await fetch("http://127.0.0.1:8000/api/movies/", {

          method : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),

        });

        if(!response.ok) {
          throw new Error(`HTTP error! status : ${response.status}`);
        }

        const result = await response.json();
        setResponseMessage("Movie added!");
        console.log(`Data successfuly posted.`);

      } catch(error) {

        console.log(`Error in posting data : ${error.message}`);
        setResponseMessage("Error in adding movie.")

      }
    }
    

  return (
    <>
    <form onSubmit={handleSubmit}>
        <h2>{title}</h2>
          <div>
            <label>Title:</label>
            <input type='text' onChange={titleChange}></input>
          </div>
          <div>
            <label>Description:</label>
            <input type='text' onChange={descriptionChange}></input>
          </div>
        <button onClick={props.click}>Submit</button>
    </form>

    <p>{responseMessage}</p>
    </>
  )
}

export default Form