import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food";

import Card from "./Card";
import Veera from "./Veera";
import { LazyLoadImage } from "react-lazy-load-image-component";

// import { useQuery } from "react-query";
import axios from "axios";
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import { useEffect, useState } from "react";
import { getToken, getUser } from './api';

import unnamed from "./assets/unnamed.jpg";
import id from "./assets/id.jpg";

//Redux
// import Counter from "./components/Counter";

// import LogRocket, { log } from 'logrocket';
// LogRocket.init('iqt6ij/my-project');

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
  const [user, setUser] = useState(null);
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

    
    const fetchUser = async () => {
      try {
        //login to get accesstoken
        await getToken();

        //"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC41MC4xODA6ODAwMC9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTcxMzM1NDA1MSwiZXhwIjoxNzEzMzU3NjUxLCJuYmYiOjE3MTMzNTQwNTEsImp0aSI6IlAyUjBRTGZSOEROVkVLWW4iLCJzdWIiOiIzIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.rusgZ8c_uXVp34oZLFm2AeVkfq3YH234ptdM-azmDUo";
        // localStorage.setItem('token', token);
        
        const response = await getUser();
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
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
        {/* <Counter /> */}
        <img src={unnamed} alt="Profile image" />
        <LazyLoadImage src={id}
          width={600} height={400}
          style={{ borderRadius: '50%' }}
          alt="Image Alt"
        />
      </main>
      <Veera />
      <Food />
      <Card todos={todos} />
      <div>
        {user && (
        <>
          <h2>{user.name}</h2>
        </>
        )}
      </div>
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
