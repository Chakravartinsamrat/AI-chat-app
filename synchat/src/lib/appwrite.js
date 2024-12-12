import { Client , Account} from 'appwrite';

// initialize
const client = new Client();


client.setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID).setEndpoint('https://cloud.appwrite.io/v1');


// initial appwrite account

const account = new Account(client);