const isEmail = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    if(email.match(regEx)) return true;  // usporeduje email sa regularnim izrazom, ako valja vraca true
    else return false;
};

const isEmpty = (string) => {
    if(string.trim() === '') return true;
    else return false;
};

exports.validateSignupData = (data) => {
    // VALIDATION

    let errors = {};

    // ZA EMAIL

    if(isEmpty(data.email)) {
        errors.email = 'Must not be empty.'
    }else if(!isEmail(data.email)){
        errors.email = 'Must be a valid email address.'
    }

    // ZA PASSWORD
    if(isEmpty(data.password)){
        errors.password = 'Must not be empty'
    }

    // provjera jesu li iste password i confirm password
    if(data.password !== data.confirmPassword) errors.confirmPassword = 'Passwords must match.';

    //handle ne smije biti prazan, isto kao password samo u 1 liniji
    if(isEmpty(data.handle)) errors.handle = 'Must not be empty'

    
    return {
        errors,
        //moramo se uvjeriti da objekt errors nema nikakvih errora, ako ima moramo breakat
        valid: Object.keys(errors).length === 0 ? true : false
    }
}

exports.validateLoginData = (data) => {
    let errors = {}

    if(isEmpty(data.email)) errors.email = 'Must not be empty';
    if(isEmpty(data.password)) errors.password = 'Must not be empty';

    return {
        errors,
        //moramo se uvjeriti da objekt errors nema nikakvih errora, ako ima moramo breakat
        valid: Object.keys(errors).length === 0 ? true : false
    }
}

exports.reduceUserDetails = (data) => {
    let userDetails = {};

    if(!isEmpty(data.bio.trim())) userDetails.bio = data.bio;
    if(!isEmpty(data.website.trim())){
        // https: // website.com
        if(data.website.trim().substring(0,4) !== 'http'){
            userDetails.website = `http://${data.website.trim()}`
        } else userDetails.website = data.website;
    }
    if(!isEmpty(data.location.trim())) userDetails.location = data.location;

    return userDetails;
}