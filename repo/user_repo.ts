import knex from './config';
import * as bcrypt from 'bcryptjs';
import {User} from '../types/user';

async function getUser(id : number) {
    let user = await knex('users').where('userId', id);

    return user;
}

async function getUsers() {
    let users = await knex('users');

    return users;
}

async function getFacilities(userId: number){
    let users_facilities = await knex.select('facilities.name')
                    .from('facilities')
                    .innerJoin('facilities_used', 'facilities.facilityId', 'facilities_used.facilityId')
                    .where('facilities_used.facilityId', userId)
                    .orderBy('sessionDate');

    return users_facilities;
}

async function addUser(user:User){
    let hashPw;

    if(user.password){
        hashPw = await bcrypt.hash(user.password, 10);
        user.password = hashPw;
    }
    user.password = hashPw;

     return knex('users').insert(user);
}

function deleteUser(id: number){
    return knex('users').delete().where('userId', id);
}

export {
        getUser, 
        getUsers,
        getFacilities,
        addUser,
        deleteUser
    }
