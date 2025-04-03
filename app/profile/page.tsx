"use client";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import swell from '@/lib/swell/client';

export default function profile(){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [customer, setCustomer] = useState({});
    const router = useRouter();

    const fetchData = async () => {
      const swellCustomer = await swell.account.get();
      //const customerSession = await swell.session.get();
      console.log(swellCustomer);
      return swellCustomer;
    };

    /*useEffect(() => {
        const getCustomer = async () => {
            const customerData = await fetchData();
            setCustomer(customerData);
          };
          getCustomer();
          
    });*/
    useEffect(() => {
        if (localStorage.getItem('isAuthenticated') !== 'true') {
          router.push('/login');
        } else {
          setIsAuthenticated(true);
          const getCustomer = async () => {
            const customerData = await fetchData();
            setCustomer(customerData);
          };
          getCustomer();
        }
      }, [router]);

    if(!customer){
        return <p>Loading...</p>
    }

    const handleEditProfileClick = (event)=>{
        alert("Comming Soon");

    }

   
    return (
        <>
        <h1 className="text-3xl font-semibold text-yellow-600">Welcome Back, {customer.first_name}!</h1>
        <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-3xl">
        <h1 className="text-3xl font-semibold text-center text-yellow-600 mb-6">User Profile</h1>
        
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-4 py-2 text-sm font-medium text-gray-700">Field</th>
              <th className="px-4 py-2 text-sm font-medium text-gray-700">Information</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 text-sm text-gray-500">First Name</td>
              <td className="px-4 py-2 text-sm font-semibold text-gray-800">{customer.first_name}</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 text-sm text-gray-500">Last Name</td>
              <td className="px-4 py-2 text-sm font-semibold text-gray-800">{customer.last_name}</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 text-sm text-gray-500">Email</td>
              <td className="px-4 py-2 text-sm text-blue-600">{customer.email}</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 text-sm text-gray-500">Phone</td>
              <td className="px-4 py-2 text-sm text-gray-800">{customer.phone}</td>
            </tr>
            
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 text-sm text-gray-500">Date Joined</td>
              <td className="px-4 py-2 text-sm text-gray-800">{customer.date_created}</td>
            </tr>
          </tbody>
        </table>
        
        <div className="mt-6 text-center">
          <button
            className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700" onClick={handleEditProfileClick}>
            Edit Profile
          </button>
        </div>
      </div>
    </div>
        </>
    )
}