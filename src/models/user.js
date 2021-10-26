import mongoose from 'mongoose'

// Create a schema of the data to be stored in the database
const userSchema = new mongoose.Schema({
    profileName: { type: String, required: true, unique: true },
    profileContent: { type: String }
})

const UserModel = mongoose.models.User || mongoose.model('User', userSchema)


export default UserModel