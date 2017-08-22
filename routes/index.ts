import * as express from 'express-promise-router';
const router = express(); 
import facilities from './facilities';
import users from './users';

router.use('/facilities', facilities);
router.use('/users', users);


export { router };
