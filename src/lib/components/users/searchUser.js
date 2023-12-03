import {apiGET} from '../../../lib/db/dbmethods'



export const searchUser = async (email, password) => {
    let user;
    let verifyResult = false;

    const response = await apiGET({ table: 'users', key: email, fieldSearch: 'email'})
    
    user = response[0];


    if (email && email !== "" && password && password !== "" && user && user.email && user.password) {
      if (user.email === email) {
        if (user.password === password) {
          verifyResult = true;

        } 
      } 
    }

    return verifyResult;
  }