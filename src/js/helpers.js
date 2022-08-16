export const getJSON = async (URL) => {
  try {
    const response = await fetch(URL);

    const data = await response.json();
    if (!response.ok) {
      throw new Error(`${data.message} (${data.status})`);
    }
    return data;
  } catch (err) {
    throw err;
  }
};
