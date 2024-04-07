const validation= (input)=>{
    const errors = {};
    const nameRegex = /^[A-Za-z0-9@\s,\-._()&!?']{1,50}$/;
    const urlRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png|svg)/;
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    
    //name
    if(!nameRegex.test(input.name)){
        errors.name = 'Special characters allowed: -@.()!?'
    }
    if(!input.name){
        errors.name = 'Name is required'
    }
    //image
    if (input.background_image.length>0 && !urlRegex.test(input.background_image)){
        errors.background_image = 'You must enter a valid URL'
    }
    //description
    if(!input.description){
        errors.name = 'Description is required'
    }
    //platforms
    if(input.platforms.length>0 && !nameRegex.test(input.platforms)){
        errors.platforms = 'Special characters allowed: -,@.()!?'
    }
    //released
    if(input.released.length > 0 && !dateRegex.test(input.released)) {
        errors.released = 'Does not comply with YYYY-MM-DD format'
    }
    //rating
    if (input.rating < 0 || input.rating > 5) {
        errors.rating = "The value entered must be between 0 and 5";
    }
    //genres
    if(input.genres.length === 0) {
        errors.genres = 'You must select at least one gender';
    };
    return errors;
}

export default validation;