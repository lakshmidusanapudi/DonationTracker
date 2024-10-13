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

const CommitteLogin=async(req,res)=>{
    const{Email,Password}=req.body;
    if(!Email||!Password){
        res.status(400);
        throw new Error("Please enter all fields");
    }
    try{
        await connection.query(Queries.Committelogin,[Email,Password]);
        res.status(200).json({message:"Committe Login Sucessfully"});
    }
    catch(error){
        console.error("Error in login",error);
        res.status(500).json({ message: "Error creating user", error: createError.message });
    }
};

module.exports = { CommitteRegister,CommitteLogin};