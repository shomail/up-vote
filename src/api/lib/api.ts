interface APIService {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  payload?: unknown;
}

const BASE_URL = 'https://bytegrad.com/course-assets/projects/corpcomment/api';

export const apiService = async <T>({ method, url, payload }: APIService): Promise<T> => {
  try {
    const res = await fetch(`${BASE_URL}${url}`, {
      method,
      body: JSON.stringify(payload),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      throw new Error();
    }
    return await res.json();
  } catch (error) {
    throw new Error('Something went wrong, please try again later.');
  }
};
