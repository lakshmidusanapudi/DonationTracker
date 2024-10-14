require('dotenv').config();
const Queries=require('../Queries/Expenses.json')
const connection = require('../db');
const multer = require('multer');
const path=require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../Images'));
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
        cb(null, uniqueName); 
    }
});

const upload = multer({ storage: storage }).single('Receipt');

const AddCashExpenses = async (req, res) => {

    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ message: "File upload failed", error: err.message });
        }
    
        const { ItemName, Quantity, Amount, ShopOwnerPhnNumber, CommitteName, SpentBy, TransactionMode } = req.body;
        const Receipt = req.file ? req.file.path : null;

        if (!ItemName || !Quantity || !Amount || !ShopOwnerPhnNumber || !CommitteName || !SpentBy || !TransactionMode || !Receipt) {
            return res.status(400).json({ message: "All fields required" });
        }

        try {
            const [CheckResult] = await connection.query(Queries.Committemembercheck, [SpentBy]);
            if (CheckResult.length === 0) {
                return res.status(404).json({ message: "Committee member not found" });
            }

            await connection.query(Queries.CreateCashExpenses);
            await connection.query(Queries.AddCashExpenses, [ItemName, Quantity, Amount, ShopOwnerPhnNumber, CommitteName, SpentBy, TransactionMode, Receipt]);
            res.status(201).json({ message: "Cash Expenses added successfully" });
        } catch (createError) {
            console.error("Error adding cash expenses:", createError);
            res.status(500).json({ message: "Error adding cash expenses", error: createError.message });
        }
    });
};

const AddItemExpenses = async (req, res) => {
    const {ItemName,Quantity,Purpose,SpentBy,CommitteName } = req.body;
    if (!ItemName||!Quantity||!Purpose||!SpentBy||!CommitteName||!CommitteName) {
        res.status(400);
        throw new Error("All fields required");
    }
    try {
        const [CheckResult] = await connection.query(Queries.Committemembercheck,[SpentBy]);
        if (CheckResult.length === 0) {
            return res.status(404).json({ message: "committe menbers not found" });
        }
          await connection.query(Queries.CreateItemUsage);
          await connection.query(Queries.AddItemUsage,[ItemName,Quantity,Purpose,SpentBy,CommitteName]);
          res.status(201).json({ message: "Item Expenses Added successfully" });
        } 
    catch (createError) {
            console.error("Error creating user:", createError);
            res.status(500).json({ message: "Error creating user", error: createError.message });
        }
};

const getcashExpenses=async(req,res)=>{
try{
   const result=await connection.query(Queries.getallCashExpenses)
   if(result.length===0){
    return res.status(404).json({message:"cash Usage not found"})
   }
   else{
    return res.status(200).json({result,message:"committe cash Usagage"})
   }
}catch(error){
    console.error("Error getting cash:", error);
    res.status(500).json({ message: "Error creating user", error: createError.message });
}
};

const getitemUsage=async(req,res)=>{
    try{
       const result=await connection.query(Queries.getallItemUsage)
       if(result.length===0){
        return res.status(404).json({message:"itemusagege not found"})
       }
       else{
        return res.status(200).json({result,message:"committe item usagage"})
       }
    }catch(error){
        console.error("Error getting cash:", error);
        res.status(500).json({ message: "Error creating user", error: createError.message });
    }
    };

    const getcashexpensesbycommitte = async (req, res) => {
        const { CommitteName } = req.body;
    
        if (!CommitteName) {
            return res.status(400).json({ message: "Committee name is required" });
        }
    
        try {
            const [result] = await connection.query(Queries.getCashExpensesbycommitte, [CommitteName]);
    
            if (result.length === 0) {
                return res.status(404).json({ message: "cash expenses not found" });
            } else {
                return res.status(200).json({ result, message: "Committee cash expenses" });
            }
        } catch (error) {
            console.error("Error getting cash:", error);
            res.status(500).json({ message: "Error retrieving cash collection", error: error.message });
        }
    };
    
    const getitemsexpensesbycommitte = async (req, res) => {
        const { CommitteName } = req.body;
    
        if (!CommitteName) {
            return res.status(400).json({ message: "Committee name is required" });
        }
    
        try {
            const [result] = await connection.query(Queries.getItemUsagebycommitte, [CommitteName]);
    
            if (result.length === 0) {
                return res.status(404).json({ message: "item uasage not found" });
            } else {
                return res.status(200).json({ result, message: "Committee item expenses" });
            }
        } catch (error) {
            console.error("Error getting cash:", error);
            res.status(500).json({ message: "Error retrieving cash collection", error: error.message });
        }
    };

    const getitemsexpensessumbycommitte = async (req, res) => {
        const { CommitteName } = req.body;
    
        if (!CommitteName) {
            return res.status(400).json({ message: "Committee name is required" });
        }
    
        try {
            const [result] = await connection.query(Queries.getTotalItemsexpensesByCommitte, [CommitteName]);
    
            if (result.length === 0) {
                return res.status(404).json({ message: "item uasage not found" });
            } else {
                return res.status(200).json({ result, message: "Committee item expenses" });
            }
        } catch (error) {
            console.error("Error getting cash:", error);
            res.status(500).json({ message: "Error retrieving cash collection", error: error.message });
        }
    };

    const getcashexpensessumbycommitte = async (req, res) => {
        const { CommitteName } = req.body;
    
        if (!CommitteName) {
            return res.status(400).json({ message: "Committee name is required" });
        }
    
        try {
            const [result] = await connection.query(Queries.getTotalcashexpensesByCommitte, [CommitteName]);
    
            if (result.length === 0) {
                return res.status(404).json({ message: "item uasage not found" });
            } else {
                return res.status(200).json({ result, message: "Committee item expenses" });
            }
        } catch (error) {
            console.error("Error getting cash:", error);
            res.status(500).json({ message: "Error retrieving cash collection", error: error.message });
        }
    };

module.exports = {AddCashExpenses,AddItemExpenses,getitemsexpensesbycommitte,getcashexpensesbycommitte,getitemUsage,getcashExpenses,getitemsexpensessumbycommitte,getcashexpensessumbycommitte};