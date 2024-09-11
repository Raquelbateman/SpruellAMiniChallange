import axios from "axios"
import { useEffect, useState } from "react"



interface Posts {
    id:number;
    title: string;
    body: string;
}

const PostsList = () => {

    //usestate  to help us hold state
    const [posts, setPosts] = useState<Posts[]>([]);
    const [error, setError] = useState("");
   

    //Lets create a fetch daya function to help us fetch our data with axios
    const fetchData = () => {

        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => setPosts(res.data) ).catch(error => setError(error));
    }

useEffect(() => {

    fetchData();

}, []);

  return (
    <>
    {posts.map((post) => {
        <li key={post.id}>{post.title}</li>
    })}
    
    </>
  )
}

export default PostsList