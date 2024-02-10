import axios from 'axios';

const apiService = async (url, method = 'GET', body = {}, headers = {}) => {
  try {
    const response = await axios({
      url,
      method,
      data: body,
      headers,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error', error.response.status, error.response.data);
      throw new Error(`Error: ${error.response.data}`);
    } else if (error.request) {
      console.error('No response received', error.request);
      throw new Error('No response received from the server.');
    } else {
      console.error('Error', error.message);
      throw new Error(`Error: ${error.message}`);
    }
  }
};

export default apiService;