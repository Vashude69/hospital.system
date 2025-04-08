// backend/controllers/authController.js
// backend/controllers/authController.js
import User from '../models/user.js';  // Use import instead of require

export const signup = async (req, res) => {
  try {
    const { name, email, aadhaar, role } = req.body;

    const user = new User({ name, email, aadhaar, role });
    await user.save();

    res.status(201).json({ message: 'Signup successful!', user });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Signup failed. Possibly duplicate email or Aadhaar.' });
  }
};
