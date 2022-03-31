import User from "../model/login.js";

//function for user login
export const login = (email, password, res) => { 
    return User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user});
                // console.log(email);
            } else {
                res.send({ message: "Password didn't match"});
            }
        } else {
                res.send({message: "User not registered"})
        }
    });
    
};

//function for user registeration
export const register = (email, password, name, res) => {
    return User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save((err, response) => {
                if(err) {
                    res.send(err);
                } else {
                    res.send( { message: "Successfully Registered, Please login now." });
                }
            })
        }
    })
}
    
