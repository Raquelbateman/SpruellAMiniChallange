// imports here
import { useQuery } from "@tanstack/react-query"
import axios from "axios"


// interface here
interface Posts {
    id: number
    title: string
    body: string
}

const usePosts = () => {

    const fetchPosts = () => 
        axios
        .get<Posts[]>("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.data)

    return useQuery<Posts[], Error>({
        queryKey: ['posts'],
        queryFn: fetchPosts
    })
}

export default usePosts