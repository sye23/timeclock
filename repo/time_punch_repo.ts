import knex from './config';
import {Time_punch} from '../types/time_punch';

function createTimePunch(timePunch : Time_punch) {
    return knex('times').insert(timePunch);
}

async function getTimeSlots(userId:number) {
    let timeSlot = await knex('times').where('userId', userId);

    return timeSlot;
}


export {
        createTimePunch,
        getTimeSlots 
        
    }