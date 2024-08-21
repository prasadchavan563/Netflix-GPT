const validateData = (email, password) => {
    const newErr = {}

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

    console.log("inside validatedata",isEmailValid);
    console.log("inside validatedata",isPasswordValid);
    
    // if (!isEmailValid || !isPasswordValid) {
    //     return "Enter Valid Email or Password"
    // } else if(password.length !== 8){
    //     return "Password must be at least 8 characters"
    // }

    if (!isEmailValid || !isPasswordValid) return "Enter Valid Email or Password"
    

    // if(!password) {
    //     return newErr.password = "Password is required"
    // }if(!(password.length === 8)) {
    //     return newErr.password = "Password length at least 8 characters long"
    // }
    // if(!isPasswordValid){
    //     newErr.password = "Password should have 1 Uppercase, 1 number..."
    // }
    // return newErr ? newErr : true
    // return Object.keys(newErr).length !== 0



    // if (!isPasswordValid) return "Enter Valid Password"
    // return { isEmailValid, isPasswordValid };
    return null
};
export default validateData