import * as loginService from "../services/login.js";

// response in case of error
const errorhandler = (message, response) => {
    response.status(500);
    response.json({ error: message });
}

// success response
const setSuccessResponse = (data, response) => {
    response.status(200);
    response.json(data);
}
console.log("controller")
// to post data in collection
export const save = async (request, response) => {
    try{
        const {email, password}   = {...request.body};
        if(password === "" || email === "" )
            {
            response.send({message: "Username or password missing"});
        } else {
            const userLogin = await loginService.login(email, password, response);
            setSuccessResponse(userLogin, response);
        }
    }
    catch(e) {
         errorhandler(e.message.response);
    }
};
//for register user
export const register = async (request, response) => {
    try{
        
        const {email, password, name} = {...request.body};
        console.log('ssaas ' + email, password, name);
        const userRegister = await loginService.register(email, password, name, response);
        setSuccessResponse(userRegister, response);
    }
    catch(e) {
        errorhandler(e.message.response);
    }
}
