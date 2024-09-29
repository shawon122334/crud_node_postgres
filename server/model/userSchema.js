import { DataTypes } from "sequelize";

export const createUserModel = async (sequlize) =>{
    const User = sequlize.define('User',{
        name : {
            type : DataTypes.STRING,
            isNull: false
        },
        email:{
            type: DataTypes.STRING,
            isNull:false,
            isLowercase:false,
            unique:true
        },
        designation:{
            type:DataTypes.STRING,
            isNull:false
        },
        empID:{
            type:DataTypes.STRING,
            isNull:false,
            unique:true
        }
    });

    return User;
}