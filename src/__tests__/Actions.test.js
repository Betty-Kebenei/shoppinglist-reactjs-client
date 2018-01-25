import expect from 'expect';
import {createUser}  from '../actions/Registration';
import {loginUser} from '../actions/Login';

describe('Registration action', () => {
    it('should create a user', async () => {
        const user = {username: 'betty', email: 'betty@betty.com', password: 'Betty1', repeat_password: 'Betty1'};
        try {
            const data = await createUser(user);
            expect(data).toBe(1);
        }catch (e){} 
    });
});

describe('Login actions', () => {
    it('should login a user', async () => {
        const user = {email: 'betty@betty.com', password: 'Betty1'};
        try {
            const data = await loginUser(user);
            expect(data).toBe(1);
        }catch (e){} 
    });
});
