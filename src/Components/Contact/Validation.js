const validateName = ({ name, setNameError }) => {
    return name && name.length < 5
        ? setNameError("Full name is too short")
        : name && name.length > 50
            ? setNameError("Full name is too long")
            : setNameError("");
}; 

const validateEmail = ({ email, setEmailError }) => {
    const emailRegular = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email && !email.match(emailRegular) 
    ? setEmailError("You entered an invalid email") 
    : setEmailError("")
};

const validateSubject = ({ subject, setSubjectError }) => {
    return subject && subject.length < 5
        ? setSubjectError("Subject is too short")
        : subject && subject.length > 50
            ? setSubjectError("Subject is too long")
            : setSubjectError("");
};

const validateMessage = ({ message, setMessageError }) => {
    return message && message.length < 5
        ? setMessageError("Message is too short")
        : message && message.length > 200
            ? setMessageError("Message is too long. Kindly send your inquiry from your email directly.")
            : setMessageError("");
};

export { validateName, validateEmail, validateSubject, validateMessage}; //exporting but not calling function. This function needs to be called inside the component where we will use this