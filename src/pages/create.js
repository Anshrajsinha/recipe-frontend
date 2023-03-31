import { useState } from "react"
import axios from "axios"
import { api } from "../api"
import { useNavigate } from "react-router-dom"

export const Create = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [readingTime, setTime] = useState("")
    const submit = async (event) => {
        event.preventDefault()
        try {
            await axios.post(`${api}/posts`, {
                title,content,imageUrl,readingTime
            })
            alert("Post Submitted")
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="create-recipe">
            <h2>Create Post</h2>
            <form onSubmit={submit}>
                <label htmlFor="name">Title</label>
                <input type="text" id="name"
                       value={title} onChange={e => setTitle(e.target.value)}/>

                <label htmlFor="content">Content</label>
                <textarea id="content" value={content} 
                onChange={e => setContent(e.target.value)}
                ></textarea>

                <label htmlFor="imageUrl">Image URL</label>
                <input type="text" id="imageUrl"
                       value={imageUrl} onChange={e => setImageUrl(e.target.value)}/>

                <label htmlFor="cookingTime">Reading Time in minutes</label>
                <input type="number" id="cookingTime" 
                       value={readingTime} onChange={e => setTime(e.target.value)}/>
                <button type="submit">Post</button>
            </form> 
        </div>
    )
}