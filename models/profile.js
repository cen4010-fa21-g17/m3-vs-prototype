import mongoose from 'mongoose'

// Create a schema of the data to be stored in the database
const profileSchema = new mongoose.Schema({
    user_id: Number,
    content: {
        type: String,
        required: true
    },
    skills: [{type: String}]
})

const ProfileModel = mongoose.models.Profile || mongoose.model('Profile', profileSchema)



export default ProfileModel