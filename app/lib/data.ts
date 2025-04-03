import swell from '@/lib/swell/client';
import '@/envConfig.ts'

export async function fetchSwellProducts() {
    try { 
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