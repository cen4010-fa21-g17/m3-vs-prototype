import mongoose from 'mongoose'

// Create a schema of the data to be stored in the database
const experienceSchema = new mongoose.Schema({
    user_id: mongoose.Types.ObjectId,
<<<<<<< Updated upstream
    dates: [{
=======
    date: {
        type: String,
        required: true
    },
    title: {
>>>>>>> Stashed changes
        type: String,
        required: true
    }],
    title: [{
        type: String,
        required: true
    }],
    content: [{
        type: String,
        required: true
    }]
})

const ExperienceModel = mongoose.models.Experience || mongoose.model('Experience', experienceSchema)



export default ExperienceModel