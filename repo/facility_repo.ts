import knex from './config';
import {Facility} from '../types/facility';

async function getFacility(id : number) {
    let facility = await knex.select('name').from('facilities').where('facilityId', id);

    return facility;
}

async function getFacilities() {
    let facilities = await knex.select('name').from('facilities');

    return facilities;
}

function addFacility(facility: Facility){
    return knex('facilities').insert(facility);
}

function deleteFacility(id: number){
    return knex('facilities').delete().where('facilityId', id);
}

export {
        getFacility, 
        getFacilities,
        addFacility,
        deleteFacility
    }
