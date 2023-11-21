import "./AddBookForm.css";
import React, { useState } from "react";
import axios from "axios";

function AddBookForm() {
    const [formData, setFormData] = useState({
        isbn:"",
        name:"",
        author:"",
        genre:"",
        des:"",
        image:""
    });

    const updateFormData = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }; 

    const addBookDataToDatabase = (event) => {
        event.preventDefault();
        axios.post("https://server-w9pr.onrender.com/addBookToDatabase", formData)
            .catch((error) => {
                console.error("Error Occurred:", error);
            }
        );
        setFormData({
            isbn:"",
            name:"",
            author:"",
            genre:"",
            des:"",
            image:""
        });
    }; // Add this closing curly brace

    return (
        <div className="form-container">
            <h1>Add New Book</h1>
            <form className="form1" onSubmit={(e) => addBookDataToDatabase(e)}>
                <input name="isbn" placeholder="Book ISBN Number" value={formData.isbn} onChange={(event) => updateFormData(event)}/>
                <input name="name" placeholder="Book Name" value={formData.name} onChange={(event) => updateFormData(event)}/>
                <input name="author" placeholder="Author" value={formData.author} onChange={(event) => updateFormData(event)}/> 
                <input name="genre" placeholder="Genre" value={formData.genre} onChange={(event) => updateFormData(event)}/> 
                <textarea name="des" placeholder="Book Description" value={formData.des} rows="4" onChange={(event) => updateFormData(event)}></textarea>
                <input
                    type="text"
                    id="image"
                    name="image"
                    placeholder="Cover page image URL"
                    value={formData.image}
                    onChange={(event) => updateFormData(event)}
                />
                <button type="submit" >Add Book</button>
            </form>
        </div>
    );
}

export default AddBookForm;
