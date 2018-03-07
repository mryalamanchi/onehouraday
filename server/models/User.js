import mongoose from 'mongoose';


const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase:true,
        index: { unique: true },
        trim:true,
      },
      password: {
        type: String,
        required: true,
        trim:true
      },

})
export default mongoose.model('User', UserSchema);
