import { token } from '../Env/Env';

const link = 'https://ipinfo.io';

async function getCurrentPosition() {
  try {
    const url = `${link}?token=${token}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTPS ${response.status}: ${await response.text()}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error in ipinfo - ${error.message}`);
  }
}

export default getCurrentPosition;
