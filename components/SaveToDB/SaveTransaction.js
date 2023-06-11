const { default: axios } = require("axios");
import baseUrl from "@/utils/baseUrl";


const saveTransaction =  async (data) => {
  await axios.post(`${baseUrl}/api/v1/payment/save-payment`, { data });
};

export default saveTransaction;
