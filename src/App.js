import "./App.css";
import Cards from "./components/Cards/Cards";
import NavBar from "./components/NavBar/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate} from "react-router-dom";
import About from './components/About';
import Detail from "./components/Detail";
import Card from "./components/Card/Card";
import Forms from "./components/Forms";


const EMAIL = 'ejemplo@gmail.com';
const PASSWORD = 'unaPassword';




const example = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
};

function App() {
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation();
  

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
 
  
  function login(userData) {
     if (userData.password === PASSWORD && userData.email === EMAIL) {
        setAccess(true);
        navigate('/home');
     }
  };

  useEffect(() => {
    !access && navigate('/');
 }, [access]);






















  


  //const onSearch = (id) =>{
  // setCharacters([...characters, example ]);
  //};

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  return (
     <div className="App">
       {pathname !== '/' && <NavBar onSearch={onSearch} />}
       {/*<SearchBar onSearch={(characterID) => window.alert(characterID)} />*/}
   
         <Routes>
            <Route path="/" element = {<Forms login = {login}/>}/>
            <Route path="/Home" element = {<Cards characters={characters} onClose={onClose} />} ></Route>
            <Route path="/About" element = {<About/>}></Route>
            <Route path="/Detail/:id" element = {<Detail/>}></Route>
            
         </Routes>

   
 
    
   
   
       {/* <Cards characters={characters} onClose={onClose} /> */}
     </div>
  );
}

export default App;
