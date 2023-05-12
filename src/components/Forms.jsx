import { useState } from "react";
import validation from "./validation";


const Forms = ({login}) =>{
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({

    })

    const hundlerSubmite = (event) =>{
        event.preventDefault();
        login(userData)

    }







    const hundlerChange = (event) =>{
        setErrors(validation({...userData, [event.target.name]: event.target.value}))
        setUserData({ ...userData,[event.target.name]: event.target.value

})

    };














    return(
        <div>
            <form >
                <label htmlFor="email">Email: </label>
                <hr />
                <input onChange={hundlerChange} value={userData.email} type="text" name="email" />

                {errors.e1 ? (<p>{errors.e1}</p>)
                : errors.e2 ? (<p>{errors.e2}</p>) 
                : (<p>{errors.e3}</p>)
                }


                
                <hr />

                <label htmlFor="password">Password:</label>
                <hr />
                <input onChange={hundlerChange} type="password" name="password" value={userData.password}  />
                

                {
                    errors.p1 ? (<p>{errors.p1}</p>) : (<p>{errors.p2}</p>)
                }




                <hr />
                <button type="submite" onClick={hundlerSubmite}>Enviar</button>
            </form>


        </div>
    );

};

export default Forms;