 import style from './Card.module.css';
 import { Link } from 'react-router-dom';
 const Card = (props) =>{
   const {id, name, status, species, gender, origin, onClose, image} = props;
   return (
      <Link to = {`/detail/:${id}`}>
      <div className={style.contenedor}>
         
         <img src={image} alt=""/>
         <p>Name: {name}</p>
         <p>Status: {status}</p>
         <p>Species: {species}</p>
         <p>Gender: {gender}</p>
         <p>Origin: {origin}</p>
         <button onClick = {() => {onClose(id)}}>Cerrar</button>
      </div>
      </Link>
   );
}
         
export default Card;