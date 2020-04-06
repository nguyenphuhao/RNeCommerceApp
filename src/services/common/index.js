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

export const request = (url, { method, body }) => {
  let fetchOptions = {
    method,
  };

  switch (method) {
    case 'POST':
      const formData = toFormData(body);
      fetchOptions = {
        ...fetchOptions,
        body: formData,
      };
      break;
    default:
      break;
  }

  return fetch(url, fetchOptions);
};
