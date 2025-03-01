import { Client , Account, Avatars} from 'appwrite';

// initialize
const client = new Client();


client.setProject('synchat').setEndpoint('https://cloud.appwrite.io/v1');


// initial appwrite account

const account = new Account(client);
//avatar
const avatars = new Avatars(client);
export {account, avatars};