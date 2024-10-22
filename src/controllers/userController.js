import { createAuthToken } from "../helpers/authHelpers.js";
import userService from "../services/userService.js";

const userRegister = async (req, res) => {
  const userData = req.body;
  console.log(userData)
  if (!userData.name) return res.status(422).send("required data name");
  if (!userData.address) return res.status(422).send("required data address");
  if (!userData.phone) return res.status(422).send("required data phone");
  if (!userData.email) return res.status(422).send("required data email");
  if (!userData.password) return res.status(422).send("required data password");
  if (userData.password !== userData.confirmPassword) {
    return res.status(400).send("password and confirm password doesnot match");
  }
  if (userData.password.length < 8) {
    return res.status(400).send("password must greater than 8");
  }

  try {
    const userAdd = await userService.userCreate(userData);

    const token = createAuthToken(userAdd);
    // console.log(authToken);
    res.status(201).json({ ...userAdd, token });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const userLog = async (req, res) => {
  const userData = req.body;
  try {
    const user = await userService.userLogin(userData);
    const token = createAuthToken(user);
    // console.log(authToken);
    res.cookie("authToken", token, { httpOnly: true });
    //  localStorage.setItem('key',data);//use in local browser stroage for large storage
    res.status(201).json({ ...user, token });
    // res.send("user login successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
  const logout = async (req, res) => {
     res.clearCookie("authToken");
      res.json({
        status:"OK",
      })
};
export { userRegister, userLog, logout };
