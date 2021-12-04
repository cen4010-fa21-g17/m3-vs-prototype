import mongoose from 'mongoose'

// Create a schema of the data to be stored in the database
//creating the table where everything is held 'array'
const portfolioSchema = new mongoose.Schema({
    user_id: mongoose.Types.ObjectId,
    biography: {
        type: String,
        required: true
    },
    goal1: {
        type: String,
        required: true
    },
    goal2: {
        type: String,
        required: true
    },
    goal3: {
        type: String,
        required: true
    },
    goal4: {
        type: String,
        required: true
    },
    
})

const PortfolioModel = mongoose.models.Portfolio || mongoose.model('Portfolio', portfolioSchema)



export default PortfolioModel