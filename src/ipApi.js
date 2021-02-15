import axios from 'axios';

const apiKey = "dcb19aafdd3accd0ca61b014f91a6cc5888d57f4f703a9758da3751e";
const baseUrl = `https://api.ipdata.co?api-key=${apiKey}`;

export const getIpData = async () => {
    const result = await axios.get(baseUrl, function(response) {
        ("#response").html(JSON.stringify(response, null, 4));
}, "jsonp");
    return result.data;
}