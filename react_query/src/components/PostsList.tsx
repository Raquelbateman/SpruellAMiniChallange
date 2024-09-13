import axios from "axios"
import { useEffect, useState } from "react"

// Define the structure of the "Posts" data with an interface
interface Posts {
    id: number;
    title: string;
    body: string;
}

const PostsList = () => {

    // useState to hold the state for posts and errors
    const [posts, setPosts] = useState<Posts[]>([]);  // posts is an array of Posts
    const [error, setError] = useState("");  // to hold any error messages

    // Function to fetch data using axios
    const fetchData = () => {
        // Axios GET request to fetch posts from the API
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => setPosts(res.data))  // set the posts state with the fetched data
            .catch(error => setError(error));  // set the error state if an error occurs
    }

    // useEffect to run fetchData once when the component mounts
    useEffect(() => {
        fetchData();  // Call the fetchData function to get data
    }, []);  // Empty dependency array means it runs only once on component mount

    return (
        <>
        {/* Map through the posts array and render a list item for each post */}
        {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;  // Return post title inside an <li> element
        })}
        </>
    )
}

export default PostsList
