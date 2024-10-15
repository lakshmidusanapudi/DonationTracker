require('dotenv').config();
const Queries=require('../Queries/CommitteMembers.json')
const connection = require('../db');

const CommitteRegister = async (req, res) => {
    const { AdminID,FullName,Email,PhnNumber,CommitteName,Address,Password } = req.body;
    if (!AdminID||!FullName||!Email||!PhnNumber||!CommitteName||!Address||!Password) {
        res.status(400);
        throw new Error("All fields required");
    }
    try {
        const [CheckResult] = await connection.query(Queries.Committecheck,[AdminID,CommitteName]);
        if (CheckResult.length === 0) {
            return res.status(404).json({ message: "AdminID and CommitteName not found" });
        }
          await connection.query(Queries.CreateCommitteMembersTable);
          await connection.query(Queries.AddCommitteMember,[AdminID,FullName, Email, PhnNumber, CommitteName, Address, Password]);
          res.status(201).json({ message: "Committe member registered successfully" });
        } 
    catch (createError) {
            console.error("Error creating user:", createError);
            res.status(500).json({ message: "Error creating user", error: createError.message });
        }
};

const CommitteLogin = async (req, res) => {
    const { Email, Password } = req.body;
    if (!Email || !Password) {
        return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
        const [rows] = await connection.query(Queries.Committelogin, [Email, Password]);        
        if (rows.length === 0) {
            return res.status(401).json({ message: "Invalid Email or Password" });
        }
        res.status(200).json({ message: "Committee Login Successful", user: rows[0] });
    } catch (error) {
        console.error("Error in login", error);
        return res.status(500).json({ message: "Error during login", error: error.message });
    }
};


module.exports = { CommitteRegister,CommitteLogin};