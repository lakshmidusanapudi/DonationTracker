require('dotenv').config();
const Queries=require('../Queries/Collection.json')
const connection = require('../db');

const AddCashCollection = async (req, res) => {
    const {Devotte,PhnNumber,Email,Amount,TransactionMode,CommitteName,CollectedBy,CollectedDate } = req.body;
    if (!Devotte||!PhnNumber||!Email||!Amount||!TransactionMode||!CommitteName||!CollectedBy||!CollectedDate) {
        res.status(400);
        throw new Error("All fields required");
    }
    try {
        const [CheckResult] = await connection.query(Queries.Committemembercheck,[CollectedBy]);
        if (CheckResult.length === 0) {
            return res.status(404).json({ message: "Committemebers not found" });
        }
          await connection.query(Queries.CreateCashCollectionTable);
          await connection.query(Queries.AddCashCollection,[Devotte,PhnNumber,Email,Amount,TransactionMode,CommitteName,CollectedBy,CollectedDate]);
          res.status(201).json({ message: "Cash Collection added successfully" });
        } 
    catch (createError) {
            console.error("Error creating user:", createError);
            res.status(500).json({ message: "Error creating user", error: createError.message });
        }
};

const AddItemCollection = async (req, res) => {
    const { Devotte,PhnNumber,Email,ItemName,Quantity,CommitteName,CollectedBy,CollectedDate } = req.body;
    if (!Devotte||!PhnNumber||!Email||!ItemName||!Quantity||!CommitteName||!CollectedBy||!CollectedDate) {
        res.status(400);
        throw new Error("All fields required");
    }
    try {
        const [CheckResult] = await connection.query(Queries.Committemembercheck,[CollectedBy]);
        if (CheckResult.length === 0) {
            return res.status(404).json({ message: "committe menbers not found" });
        }
          await connection.query(Queries.CreateItemCollectionTable);
          await connection.query(Queries.AddItemCollection,[Devotte,PhnNumber,Email,ItemName,Quantity,CommitteName,CollectedBy,CollectedDate]);
          res.status(201).json({ message: "Item Collection Added successfully" });
        } 
    catch (createError) {
            console.error("Error creating user:", createError);
            res.status(500).json({ message: "Error creating user", error: createError.message });
        }
};

const getcashcollection=async(req,res)=>{
try{
   const result=await connection.query(Queries.getcashcollection)
   if(result.length===0){
    return res.status(404).json({message:"cashcollection not found"})
   }
   else{
    return res.status(200).json({result,message:"committe cash ollection"})
   }
}catch(error){
    console.error("Error getting cash:", error);
    res.status(500).json({ message: "Error creating user", error: createError.message });
}
};

const getitemcollection=async(req,res)=>{
    try{
       const result=await connection.query(Queries.getitemcollection)
       if(result.length===0){
        return res.status(404).json({message:"itemcollection not found"})
       }
       else{
        return res.status(200).json({result,message:"committe cash ollection"})
       }
    }catch(error){
        console.error("Error getting cash:", error);
        res.status(500).json({ message: "Error creating user", error: createError.message });
    }
    };

    const getcashbycommitte = async (req, res) => {
        const { CommitteName } = req.body;
    
        if (!CommitteName) {
            return res.status(400).json({ message: "Committee name is required" });
        }
    
        try {
            const [result] = await connection.query(Queries.getcashbycommitte, [CommitteName]);
    
            if (result.length === 0) {
                return res.status(404).json({ message: "cash collection not found" });
            } else {
                return res.status(200).json({ result, message: "Committee cash collection" });
            }
        } catch (error) {
            console.error("Error getting cash:", error);
            res.status(500).json({ message: "Error retrieving cash collection", error: error.message });
        }
    };
    
    const getitemsbycommitte = async (req, res) => {
        const { CommitteName } = req.body;
    
        if (!CommitteName) {
            return res.status(400).json({ message: "Committee name is required" });
        }
    
        try {
            const [result] = await connection.query(Queries.getitembycommitte, [CommitteName]);
    
            if (result.length === 0) {
                return res.status(404).json({ message: "item collection not found" });
            } else {
                return res.status(200).json({ result, message: "Committee item collection" });
            }
        } catch (error) {
            console.error("Error getting cash:", error);
            res.status(500).json({ message: "Error retrieving cash collection", error: error.message });
        }
    };

    const getitemscountbycommitte = async (req, res) => {
        const { CommitteName } = req.body;
    
        if (!CommitteName) {
            return res.status(400).json({ message: "Committee name is required" });
        }
    
        try {
            const [result] = await connection.query(Queries.getTotalitemsByCommitte, [CommitteName]);
    
            if (result.length === 0) {
                return res.status(404).json({ message: "item collection not found" });
            } else {
                return res.status(200).json({ result, message: "Committee item collection" });
            }
        } catch (error) {
            console.error("Error getting cash:", error);
            res.status(500).json({ message: "Error retrieving cash collection", error: error.message });
        }
    };
    const getcashcountbycommitte = async (req, res) => {
        const { CommitteName } = req.body;
    
        if (!CommitteName) {
            return res.status(400).json({ message: "Committee name is required" });
        }
    
        try {
            const [result] = await connection.query(Queries.getTotalAmountByCommitte, [CommitteName]);
    
            if (result.length === 0) {
                return res.status(404).json({ message: "item collection not found" });
            } else {
                return res.status(200).json({ result, message: "Committee item collection" });
            }
        } catch (error) {
            console.error("Error getting cash:", error);
            res.status(500).json({ message: "Error retrieving cash collection", error: error.message });
        }
    };

module.exports = { AddCashCollection,AddItemCollection,getcashcollection,getitemcollection,getcashbycommitte,getitemsbycommitte,getcashcountbycommitte,getitemscountbycommitte};