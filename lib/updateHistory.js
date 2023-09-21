import axios from "axios";

export const postHistory = async (body) => {
  const res = axios({
    method: "POST",
    url: `${process.env.NEXT_PUBLIC_URL}/api/cdms/histories`,
    data: body,
  });

  return await res;
};

export const getHistory = async (body) => {
  const res = axios({
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_URL}/api/cdms/histories`,
  }).then((res) => res.data);

  return await res;
};
