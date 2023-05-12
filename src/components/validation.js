export default (data) =>{
    let errors = {};

    if(!data.email.includes('@')){
        errors.e1 = 'Email is not valid';
    }
    if(!data.email){
        errors.e2 = 'Enter Email';
    }
    if(data.email.length > 35){
        errors.e3 = 'Email cannot be longer than 35 characters';
    }

    if(!/\d/.test(data.password)){
        errors.p1 = 'It should at least have a number';
    }
    if(data.password.length < 6 || data.password.length > 10){
        errors.p2 = 'wrong length';
    }

    return errors;

};