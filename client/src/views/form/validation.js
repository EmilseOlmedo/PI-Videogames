const validation= (input)=>{
    const errors = {};
    const nameRegex = /^[A-Za-z0-9@\s\-._()&!?']{1,50}$/;

    if(!nameRegex.test(input.name)){
        errors.name = 'Special characters allowed: @.()!?'
    }
    if(!input.name){
        errors.name = 'Name is required'
    }

    if(!input.description)
    return errors;
}

export default validation;