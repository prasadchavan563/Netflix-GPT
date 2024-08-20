const validateData = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

    console.log("inside validatedata",isEmailValid);
    console.log("inside validatedata",isPasswordValid);
    
    if (!isEmailValid || !isPasswordValid) return "Enter Valid Email or Password"
    // if (!isPasswordValid) return "Enter Valid Password"
    // return { isEmailValid, isPasswordValid };
    return null
};
export default validateData