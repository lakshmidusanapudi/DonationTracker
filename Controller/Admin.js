require('dotenv').config();
const Queries=require('../Queries/Admin.json')
const connection = require('../db');

const Register = async (req, res) => {
    const { FullName,Email,PhnNumber,CommitteName,Address,Password } = req.body;
    if (!FullName||!Email||!PhnNumber||!CommitteName||!Address||!Password) {
        res.status(400);
        throw new Error("All fields required");
    }
    try {
          await connection.query(Queries.CreateAdminTable);
          await connection.query(Queries.AddAdmin,[FullName, Email, PhnNumber, CommitteName, Address, Password]);
          res.status(201).json({ message: "Admin registered successfully" });
        } 
    catch (createError) {
            console.error("Error creating user:", createError);
            res.status(500).json({ message: "Error creating user", error: createError.message });
        }
};

module.exports = { Register};
