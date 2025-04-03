import swell from '@/lib/swell/client';

export const signIn = async (email, password) => {
   
     try {
           
           // Send login request to Swell API
           const response = await swell.account.login(
             email,
             password,
           );
           // Handle success (you might want to redirect to a dashboard or home page)
           //console.log('User logged in:', response);
           //const customer = await swell.account.get();
           const customerSession = await swell.session.get();
           if(customerSession.account_id ==''){
            setError('Invalid email or password');
           }
           
         } catch (err) {
           setError('Invalid email or password');
           console.error('Login error:', err);
         }
  };
  