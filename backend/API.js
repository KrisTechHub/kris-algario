// ******** THIS IS THE API FILE ********
import axios from 'axios';


// ********STEP 3. GET IP ADDRESS ******** (OPTIONAL: This is only for location)
export const IpAdress = async ({ setIpData }) => {
    try {
        let res = await axios.get(`http://api.ipstack.com/check?access_key=${import.meta.env.VITE_IP_ADDRESS_API_KEY}`); //import.meta.env for vite and process.env for CRA
        if (res) {
            setIpData(res.data.country_name);
        }
    } catch (error) {
        alert(`IP Address Error: ${error.message}`)
    }
};



// // *********** COUNTRIES API ***********
// export const GetCountries = async ({ setCountries }) => {
//     try {
//         let res = await axios.get(
//             `https://api.apilayer.com/number_verification/countries`,
//             {
//                 headers: {
//                     apikey: import.meta.env.VITE_NUMBER_VALIDATE_API_KEY,
//                 },
//             }
//         );
//         if (res) {
//             setCountries(res.data);
//         }
//     } catch (error) {
//         alert(`get countries API error: ${error.response.data.message}`);
//     }
// };



// ******** AFTER ARRANGING SERVER, INTEGRATE WITH FRONT END ********
export const SendEmail = async ({ name, email, subject, message, setSend }) => {
    try {
        const datas = { name, email, subject, message };
        let res = await axios.post(`http://localhost:5000/send`, datas);
        if (res) {
            setSend(res.data)
        }
    } catch (error) {
        alert(`SendEmail Integration error: ${error.response.data.message}`);
    }
};