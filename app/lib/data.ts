//const { swell } = require('swell-node');
//import {swell} from 'swell-node';
import swell from 'swell-js'
import '@/envConfig.ts'

export async function fetchSwellProducts() {
    try {
       //swell.init('pb24dempapp', 'pk_Zg9elOkHxjA9Ea78lEoJMB6D5S8Owvyl');
       swell.init( process.env.SWELL_API_STORE_ID!,  process.env.SWELL_API_API_KEY!)
        try {
            const  data  = await swell.get('/products', {
              active: true
            });
            console.log(data);
            return data;
          } catch (err) {
            console.error(err.message);
          }
      
    } catch (error) {
      console.error('Swell Error:', error);
      throw new Error('Failed to fetch Swell products data.');
    }
  }