const { default: axios } = require("axios");
import { axiosApi } from "@/utils/baseUrl";


const saveTransaction =  async (data) => {
  await axios.post(`${axiosApi.baseUrl}/api/v1/payment/save-payment`, { data });
};

export default saveTransaction;
