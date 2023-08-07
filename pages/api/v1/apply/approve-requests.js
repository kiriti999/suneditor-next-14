/* eslint-disable import/no-anonymous-default-export */
import api from '../@/axios/axiosConfig'

export default async (req, res) => {
    const { userId } = req.body
    try {
        const response = await api.request({
            url: `/apply/approve`,
            method: 'POST',
            data: { userId }
        });
        console.log('approve-requests.js:: response: ', response?.data);
        return response?.data || [];
    } catch (error) {
        console.log(error)
        res.send("Error! Try again")
    }
}