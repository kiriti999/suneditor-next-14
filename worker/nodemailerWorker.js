import axios from 'axios';

// node mailer to be implemented here
onmessage = async function (data) {
    const workerData = data?.data;
    console.log('worker.js:: onmessage:: workerData:', workerData);
};

