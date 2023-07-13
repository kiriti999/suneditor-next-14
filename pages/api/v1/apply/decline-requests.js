/* eslint-disable import/no-anonymous-default-export */
import api from '../../../../axiosConfigs'

export default async (req, res) => {
    const { userId } = req.body
    try {
        const response = await api.request({
            url: `/apply/decline`,
            method: 'POST',
            data: { userId }
        });
        console.log('decline-requests.js:: response: ', response?.data);
        return response?.data || [];
    } catch (error) {
        console.log(error)
        res.send("Error! Try again")
    }
}