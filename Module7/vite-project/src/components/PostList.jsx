import { useEffect, useState } from "react"

function PostList(){

    const [posts,setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
            setPosts(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

    return(
        <div className="PostList componentBox">

        </div>

    )
}

export default PostList