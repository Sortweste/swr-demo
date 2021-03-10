import axiosInstance from 'config/axiosConfig';

const fetcher = <T>(url: string): Promise<T> =>
  axiosInstance
    .get<T>(url)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
      throw new Error(response.status.toString());
    })
    .catch(({ response }) => {
      throw new Error(response.status);
    });

export default fetcher;
