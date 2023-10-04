import axios from "axios";

export const getMachineStatus = async (body) => {
  const data = axios({
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_API_URL}/drums?machine=${body.building_mc}`,
  }).then((res) => res.data);
  const res = await data;
  return res;
};

export async function getDrumStatus(body) {
  const drums = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/drums?id=${body.id_drum}`,
    {
      method: "GET",
    }
  ).then((res) => res.json());
  const res = await drums;

  return res;
}

export async function postDrum(body) {
  const drums = axios({
    method: "PUT",
    url: `${process.env.NEXT_PUBLIC_API_URL}/drums`,
    data: body,
  });
  const res = await drums;
  return res;
}

export async function postMonitoring(body) {
  const drums = axios({
    method: "PUT",
    url: `${process.env.NEXT_PUBLIC_API_URL}/monitoring`,
    data: body,
  });
  const res = await drums;
  return res;
}

export async function getMonitoringStatus(body) {
  const drums = axios({
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_API_URL}/monitoring?id=${body.building_mc}`,
  });
  const res = await drums;
  return res;
}

export async function addNewDrum(body) {
  const drums = axios({
    method: "POST",
    url: `${process.env.NEXT_PUBLIC_API_URL}/drums`,
    data: body,
  });
  const res = await drums;
  return res;
}
