// Connect to DB here
// ------------------

import settings from '../settings';
import mongoose from 'mongoose';

mongoose.connect(settings.db.connectUrl);

