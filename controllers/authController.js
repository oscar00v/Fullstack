import User from "../models/User.js"; // Asegúrate de que la ruta sea correcta
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const register = async (req, res) => {

    // .then(user => {
    //   res.status(201).json({ message: "User registered successfully", user });
    // })
    // .catch(err => {
    //   console.error(err);
    //   res.status(500).json({ message: "Error registering user" });
    // });
    try {

        
        const password = bcrypt.hashSync(req.body.password, 10);
        req.body.password = password;
        const user = await User.create(req.body)
        // const user = await User.create(req.body);
        res.status(201).json({ message: "User registered successfully", user });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error registering user" });
    }




}
const login = async (req, res) => {
    try {
      const { email, phone, username, password } = req.body;
      const user = await User.findOne({
        $or: [{ email }, { phone }, { username }],
      });
  
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }
  
      const passwordMatch = bcrypt.compareSync(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({
          message: "Invalid credentials",
        });
      }
  
      // Crear un token y se lo mandamos al cliente
  
      const payload = {
        userId: user.id,
      };
  
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
  
      res.json({
        token,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error al hacer login",
      });
    }
  };
export { register, login };