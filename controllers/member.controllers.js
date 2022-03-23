const MemberSchema = require('../models/member.model');

exports.AddMember = async (req,res)=>{
    const {fullName,email,position,picture} = req.body;
    
    try {

       const newMember = new MemberSchema(req.body);
       const found = await MemberSchema.findOne({email})
       if(found){
            return res.status(400).send('Member already exists!')
       }
        await newMember.save();
        res.status(200).send({msg:"Member successfully saved ", newMember });
    } catch (error) {
        
        res.status(500).send({msg:'Error while trying to add this user.'})
    }

}

exports.ShowMemberList = async (req,res)=>{
    try {
       const memberList =  await MemberSchema.find();
        res.status(200).send({msg:"This is our Members' full list",memberList});
    } catch (error) {
        res.status(500).send({msg:"Error while trying to browse the members'list"})
    }
}


exports.DeleteMember = async (req,res)=>{
    const {id} = req.params
    try {
        const deletedMember = await MemberSchema.findOneAndDelete({_id : id});
        res.status(200).send({msg:'Member successfully deleted'});
    } catch (error) {
        res.status(500).send({msg:"Error while trying to delete this member"})
    }
}

exports.EditMember = async (req,res)=>{
    const {id} = req.params
    try {
        const editMember = await MemberSchema.findByIdAndUpdate(id,{$set : {...req.body}})
        res.status(200).send({ msg:'All the edits to this member have been saved' ,editMember});
    } catch (error) {
        res.status(500).send({msg:'Error while trying to edit this member'})
    }
}

exports.ShowMemberByID = async (req,res)=>{
    const {id} = req.params
    try {
       const memberList =  await MemberSchema.findById(id);
        res.status(200).send({msg:'The needed Member',memberList});
    } catch (error) {
        res.status(500).send({msg:'Error while trying to browse this member'})
    }
}