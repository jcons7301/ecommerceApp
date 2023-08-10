import {apiUrl} from './config.js';


export const getProduct = async (id) => {
    try {
        const response = await fetch(`http://localhost:5000/api/products/${id}`,{
            
            Headers:{
                'Content-type': 'application/json',
            }
        });
        if(!response){
            throw new Error(response.data.message);
        }
        return response.json();
    } catch (error) {
        console.log(err);
        return { error: err.message};
    }
}