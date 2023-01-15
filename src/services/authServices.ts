import { IUser } from '../interface/user';
import User from '../models/User';
import { encrypt, verified } from '../utils/bcrypt.handle';
import { generateToken } from '../utils/jwt.handle';



const registerUser = async({email,password, name}:IUser)=>{
    const checkIs = await User.findOne({email});
    if(checkIs)return "ALREADY_USER";
    const passHash = await encrypt(password);
    const registerNewUser = await User.create({
        email,
        password: passHash,
        name
    });

    return registerNewUser;
}

const loginUser = async({email, password}:IUser)=>{
    const checkIs = await User.findOne({email});
    if(!checkIs) return "NOT_FOUND_USER";

    const passwordHash = checkIs.password;
    const isCorrect = await verified(password, passwordHash);

    if(!isCorrect) return "INCORRECT_CREDENTIALS";

    const token = generateToken(checkIs.email);
    const data = {
        token,
        user:checkIs
    }

    return data;
}

export {registerUser, loginUser}