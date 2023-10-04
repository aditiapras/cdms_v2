import axios from "axios";

export const cleanDrums = async (body) => {
  const drums = axios({
    method: "POST",
    url: `${process.env.NEXT_PUBLIC_API_URL}/cleaning`,
    data: body,
  });
  const res = await drums;
  return res;
};

export const cleanDrumMonitoring = async (body) => {
  const drums = axios({
    method: "PUT",
    url: `${process.env.NEXT_PUBLIC_API_URL}/drums/cleaning`,
    data: body,
  });
  const res = await drums;
  return res;
};
