import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    // Cuanto más alto sea el número, más segura será la contraseña pero más tiempo tardará en encriptarse. 10 es OK
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "johndoe@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "janedoe@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
