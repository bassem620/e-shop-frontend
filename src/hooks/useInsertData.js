import baseUrl from "../Api/baseURL";

const useInsertData = async (url, params) =>  {
    const res = await baseUrl.post(url, params);
    return res.data;
}

const useInsertDataWithImage = async (url, params) =>  {
    const config = {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGI5Yjk0Y2RhNWYwZDBhMzVkYjgzMmQiLCJpYXQiOjE2ODk4OTMyMjYsImV4cCI6MTY5MDQ5ODAyNn0.JATarPGBK9puzxtVnYf5D24mRDlasFw5TXZDFe-CoRs`,
            "content-type": "multipart/form-data"
        }
    }
    const res = await baseUrl.post(url, params, config);
    return res;
}

export { useInsertData, useInsertDataWithImage };