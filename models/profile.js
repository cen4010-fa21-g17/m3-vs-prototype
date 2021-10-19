import mongoose from 'mongoose'

// Create a schema of the data to be stored in the database
const profileSchema = new mongoose.Schema({
    user_id: mongoose.Types.ObjectId,
    content: {
        type: String,
        required: true
    }
    
})

const ProfileModel = mongoose.models.Profile || mongoose.model('Profile', profileSchema)



export default ProfileModel