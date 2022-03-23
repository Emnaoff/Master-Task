const express = require('express');
const { AddMember, ShowMemberList, DeleteMember, EditMember, ShowMemberByID } = require('../controllers/member.controllers');
const memberRoute = express.Router();


memberRoute.post('/addMember',AddMember);

memberRoute.get('/getMemberList', ShowMemberList);

memberRoute.delete('/:id', DeleteMember);

memberRoute.put('/:id', EditMember);

memberRoute.get('/:id', ShowMemberByID);

module.exports = memberRoute;