import settings from '../settings';
import { debugDB } from './debug';
import mongoose from 'mongoose';

mongoose.connect(settings.db.connectUrl);

//
// CONNECTION EVENTS
// -----------------
mongoose.connection.on('connected', () => {
    debugDB('Connection open');
});

mongoose.connection.on('error', (err) => {
    debugDB(`Connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
    debugDB('Connection disconnected');
});

