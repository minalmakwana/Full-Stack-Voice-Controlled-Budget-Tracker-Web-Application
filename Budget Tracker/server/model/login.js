import mongoose from "mongoose"

// creating user schema in mongo db
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    
},
{
    versionKey: false
});

userSchema.virtual('id', () => this._id.toHexString());
userSchema.set('toJSON', { virtuals: true });


const User = mongoose.model('User', userSchema);

export default User;