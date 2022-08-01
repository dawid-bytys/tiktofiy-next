// could have used 'crypto' but for numeric string it's easier for me to implement it myself
export const generateRandomString = (length: number, numeric = false) => {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digits = '0123456789';

  if (length <= 0) {
    throw new Error('Length must be greater than 0');
  }

  const randomString: string[] = [];
  for (let i = 0; i < length; i++) {
    let randomChar: string;
    if (numeric) {
      randomChar = digits[Math.floor(Math.random() * digits.length)];
    } else {
      randomChar = (letters + digits)[Math.floor(Math.random() * (letters + digits).length)];
    }
    randomString.push(randomChar);
  }

  return randomString.join('');
};

export const getTikTokId = (url: string) => {
  return new URL(url).pathname.split('/').at(-1);
};
