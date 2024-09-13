import { useQuery } from "@tanstack/react-query"
import axios from "axios"

// Interface for defining the structure
interface Posts {
  id: number;
  title: string;
  body: string;
}

// Component to fetch and display a list of posts
const PostsListWQuery = () => {

  // Helper function to fetch posts using axios
  const fetchPosts = () =>
    axios.get<Posts[]>("https://jsonplaceholder.typicode.com/todos").then(res => res.data)

  // Using React Query's useQuery hook to fetch posts
  // 'queryKey' is the unique identifier for the query and 'queryFn' is the function that fetches the data
  const {data: posts, error, isLoading} = useQuery<Posts[], Error>({
    queryKey: ['posts'],
    queryFn: fetchPosts
  });

  // Rendering the list of posts
  // If the data is still loading, display a loading message
  // If there's an error, display the error message
  return (
    <>
      <h2>Using React Query</h2>
      {isLoading ? <p>Loading ...</p> : null}
      {error ? <p>{error.message}</p> : null}
      {/* Mapping through the fetched posts and displaying each post's title */}
      {posts?.map((data) => (
        <li key={data.id}>{data.title}</li> // Each item needs a unique key, using 'id'
      ))}
    </>
  )
}

export default PostsListWQuery
