// Importing the custom hook
import usePosts from "../hooks/usePost"

const PostListWQueryHook = () => {

    // Destructure the result of the custom hook
    const {data: posts, error, isLoading} = usePosts();

    // Render the component
    return (
        <>
            <h2>Using React Query With Custom Hook</h2>
            {/* Display loading message while data is being fetched */}
            {isLoading ? <p>Loading...</p> : null}
            {/* Display error message if there's an error */}
            {error ? <p>{error.message}: </p> : null}
            {/* Map through posts and display the title of each post */}
            {posts?.map((data) => (
                <li key={data.id}>{data.title}</li> // Each list item must have a unique key
            ))}
        </>
    )
}

export default PostListWQueryHook
