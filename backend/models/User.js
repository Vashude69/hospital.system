// backend/models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  aadhaar: { type: String, required: true, unique: true },
  role: { type: String, enum: ['doctor', 'patient'], required: true }
});

const User = mongoose.model('User', userSchema);

export default User;  // Use default export
