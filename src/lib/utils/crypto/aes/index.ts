import CryptoJS from 'crypto-js';

export const encryptAES = <T>(obj: T, key: string): string => {
    const defaultValue = JSON.stringify(null);
    if (obj === null) return defaultValue;

    try {
        const encryptedData = CryptoJS.AES.encrypt(
            JSON.stringify(obj),
            key
        ).toString();

        return encryptedData;
    } catch (error) {
        return defaultValue;
    }
};

export const decryptAES = <T>(encryptedData: string, key: string): T => {
    // if (JSON.parse(encryptedData) === null) return null;
    try {
        const data = CryptoJS.AES.decrypt(encryptedData, key).toString(
            CryptoJS.enc.Utf8
        );

        if (data) {
            return JSON.parse(data) as T;
        }

        return {} as T;
        // return JSON.parse(data) as T;
    } catch (error) {
        throw error;
    }
};
