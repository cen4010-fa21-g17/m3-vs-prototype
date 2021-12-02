import mongoose from 'mongoose'

// Create a schema of the data to be stored in the database
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true, },
    lastName: { type: String, required: true, },
    profileContent: { type: String }
})

const UserModel = mongoose.models.User || mongoose.model('User', userSchema)

export default UserModel