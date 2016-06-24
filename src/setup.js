import fs from 'fs';
import { debugServer } from './debug';

const content = {
  db: {
    connectUrl: process.env.npm_config_connectUrl || '',
    secret: process.env.npm_config_secret || ''
  }
};

fs.writeFile('settings.json', JSON.stringify(content), (err) => {
    if (err) return debugServer(`Setup error: ${err}`);

    debugServer('Settings successfully created');
});
