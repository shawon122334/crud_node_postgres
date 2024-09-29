import express from 'express';
import { UserModel } from '../database/postgresql.js';

export const getAllEmp = async(req,res)=>{
    try{
        const users = await UserModel.findAll(); //using UserModel we will find all data from database. findAll method from sequelize
        if(users.length==0){
            return res.status(200).json({"error":"No Users Found"});
        }
        return res.status(200).json(users);
    }
    catch(error){
        console.log(error);
        return res.status(500).json({"Error": "Internel Server Error"});
    }
}

export const addEmp = async (req,res) =>{
    const{name,email,designation,empID} = req.body;
    try{
        const emp = await UserModel.findOne({where:{empID:empID}});
        if(emp==null){
            await UserModel.create(req.body);
            return res.status(201).json({message : "User Created Successfully"})
        }
        return res.status(200).json({message:"User Is Already Registered"})
    }
    catch(error){
        console.log(error);
        return res.status(500).json({"Error": "Internel Server Error"});
    }
}