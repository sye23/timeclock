import * as express from 'express-promise-router';
const router = express();
import * as db from '../repo';
import {Request, Response} from 'express';

router.get('/getFacilities', async(req : Request, res : Response) => {
    let response = await db.facility_repo.getFacilities();
    res.json(response)
});

router.get('/getFacility/:id', async(req : Request, res : Response) => {
    let response = await db.facility_repo.getFacility(req.params.id);
    res.json(response)
});

router.post('/addFacility', async(req : Request, res : Response) => {
    let response = await db.facility_repo.addFacility(req.body);
    res.json(response)
});

router.delete('/deleteFacility/:id', async(req : Request, res : Response) => {
    let response = await db.facility_repo.deleteFacility(req.params.id);
    res.json(response)
});

export default router;