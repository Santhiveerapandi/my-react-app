import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food";

import Card from "./Card";
import Veera from "./Veera";

// import { useQuery } from "react-query";
import axios from "axios";
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import { useEffect, useState } from "react";

const queryClient = new QueryClient();


/* const retrievePosts= async () =>{
    const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
    );
    return res.data;
} */

function App() {
  const API_URL = 'http://localhost:3500/todos';

  const [todos, setTodos] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  
  useEffect(() => {
    const fechTodos = async () => {
      try{
        const res = await fetch(API_URL);
        if(!res.ok) throw Error('Did not received expected data');
        const listTodos = await res.json();
        // console.log(listTodos);
        setTodos(listTodos);
        setFetchError(null);
      } catch (err) {
        // console.log(err.stack)
        setFetchError(err.message);
      }
    }  

    (async () => await fechTodos())();
  }, []);
  
  function useDataWithLogging() {

  }
  const handleNameChange = () => {
    const names = ['Veera', 'Meena', 'Nandhini', 'Sangeetha', 'Aishwarya', 'Kavitha', 'Sharmila', 'Priyanka', 'Keerthana'];
    const int = Math.floor(Math.random()*5);
    return names[int];
  }
  return (
    <>
      <Header/>
      Hello {handleNameChange()}!
      <main>

      </main>
      <Veera />
      <Food />
      <Card todos={todos} />
      <Footer/>
    </>
  );
  /* const {
    data: posts,
    error,
    isLoading,
} = useQuery("postsData", retrievePosts);
if(isLoading) return <div>Fetching posts...</div>;

if(error) return <div>An error occurred: {error.message}</div>;
 */

/* const { isLoading, error, data } = useQuery('todos', () =>
    fetch('https://jsonplaceholder.typicode.com/todos').then(res =>
      res.json()
    )
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>An error has occurred: {error.message}</p>; 
  
  return (
    <QueryClientProvider client={queryClient}>

    <ul>
      {data.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
    </QueryClientProvider>

  );
      <ul>
      {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
      ))}
      </ul>

  */

// QueryClientProvider
  
}

export default App
