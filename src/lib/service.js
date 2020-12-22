const axios = require("axios");

const getData = async (id) => {
    const service = 'https://jsonplaceholder.typicode.com';
    const layers = ['/users','/posts'];
    try{
        if((typeof id) == 'number'){
            const { data: users } = await axios.get(`${service}${layers[0]}/${id}`);
            const { data: posts } = await axios.get(`${service}${layers[1]}?userId=${id}`);
            // set user_data for return
            const user_data = {
                users,
                posts
            };
            return user_data;
        }
        else{
            console.error('not a number.');
        }
    }
    catch(e){
        console.warn(e);
    }
    return val;
}

module.exports = {
    getData
}