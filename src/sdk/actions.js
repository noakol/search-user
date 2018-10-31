const getUsers = async function(api, serviceUrl, params) {
  try {
    const response = await api.getMethod(serviceUrl, params);
    return response;
  } catch (error) {
    return error;
  }
};

export default {
  getUsers
};
