import { useEffect, useState } from "react"
import axios from "axios"
import { api } from "../api"

export const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => { 
        const fetch = async () => {
            try {
                const res = await axios.get(`${api}/posts`)
                console.log(res)
                setPosts(res.data)
                console.log(res.data)
                //console.log(posts)
                //alert("success")
            } catch (err) {
                alert("failed")
                console.log(err)
            }
        }
        fetch()
    }, [])
    return (
        <div>
            <h1>Articles</h1>
            <ul>
                {posts.map((p) => {
                return (
                    <li key={p._id}>
                        <div>
                            <h2>{p.title}</h2>
                        </div>
                        <div className="instructions">
                            <p>{p.content}</p>
                        </div>
                        <img src={p.imageUrl} alt={p.title}/>
                        <p>Reading Time: {p.readingTime} minutes</p>
                    </li>
                )}
                )}
            </ul>
        </div>
    )
}