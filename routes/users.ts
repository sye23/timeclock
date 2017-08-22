import * as express from 'express-promise-router';
const router = express();
import * as db from '../repo';
import {Request, Response} from 'express';

router.get('/getUsers', async(req : Request, res : Response) => {
    let response = await db.user_repo.getUsers();
    res.json(response)
});

router.get('/getUser/:id', async(req : Request, res : Response) => {
    let response = await db.user_repo.getUser(req.params.id);
    res.json(response)
});

router.post('/addUser', async(req : Request, res : Response) => {
    let response = await db.user_repo.addUser(req.body);
    res.json(response)
});

router.delete('/deleteUser/:id', async(req : Request, res : Response) => {
    let response = await db.user_repo.deleteUser(req.params.id);
    res.json(response)
});

export default router;