const catchErrors = (error, displayError) => {
    const { request, response } = error;
    let errorMsg;
    if (response) {
        console.error("Error response", response);
        errorMsg = response.data;

        if(response.data.error){
            errorMsg = response.data.error.message;
        } else if (response.status && response.statusText) {
            errorMsg = response.status + response.statusText;
        }
    } else if (request) {
        // Request made but no response received
        console.error("Error request", request);
        errorMsg = request;
    } else  {
        console.error("Error message", error);
        errorMsg = error;
    }

    displayError(errorMsg);
}

export default catchErrors;
