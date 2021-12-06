import mongoose from 'mongoose'

// Create a schema of the data to be stored in the database
//creating the table where everything is held 'array'
const portfolioSchema = new mongoose.Schema({
    user_id: { type: mongoose.Types.ObjectId },
    biography: {
        type: String,
       
    },
    goal1: {
        type: String,
       
    },
    goal2: {
        type: String,
       
    },
    goal3: {
        type: String,
      
    },
    goal4: {
        type: String,
     
    },
    
})

const PortfolioModel = mongoose.models.Portfolio || mongoose.model('Portfolio', portfolioSchema)



export default PortfolioModel