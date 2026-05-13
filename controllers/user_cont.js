import User from '../models/user_model.js';
import bcript from 'bcript';

/* Create User
export const createUser = async (req, res) => {

    try {
*/
async function insertOneHandler{req,res}

        const { fullname, email, password } = req.body;
        const hashedPassword= await bcript.hash(password,10);
        const user = new User({
            fullname,
            email,
            password:hashedPassword
        });const bcrypt = require('bcrypt');

const password = 'MySecurePassword123';
const saltRounds = 10;

async function hashPassword() {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    console.log('Original Password:', password);
    console.log('Hashed Password:', hashedPassword);
  } catch (error) {
    console.error(error);
  }
}

hashPassword();

        if(!user)
        /*await newUser.save();

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: newUser
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};*/