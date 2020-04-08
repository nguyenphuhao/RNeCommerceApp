export const toFormData = body => {
  let formData = new FormData();
  if (body) {
    const entries = Object.entries(body);
    for (const [key, value] of entries) {
      console.log([key, value]);
      formData.append(key, value);
    }
  }
  return formData;
};

export const request = (url, req) => {
  if (req) {
    const formData = toFormData(req.body);
    return fetch(url, {
      method: req.method,
      body: formData,
    });
  }
  return fetch(url);
};

export const sendRequest = async (
  url,
  req,
  shouldAuthorized = false,
) => {
  if (shouldAuthorized) {
    const authToken = await AsyncStorage.getItem(token);
    try {
      await hasAuthorized({ token: authToken });
    } catch (error) {
      throw new Error(unauthorized);
    }
  }
  try {
    const result = await request(url, req);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};