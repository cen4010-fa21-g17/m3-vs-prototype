import mongoose from 'mongoose'

// Create a schema of the data to be stored in the database
const userSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
})

const UserModel = mongoose.models.User || mongoose.model('User', userSchema)


export default UserModel