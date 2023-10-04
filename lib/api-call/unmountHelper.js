import axios from "axios";

export const unmountDrum = async (body) => {
  const data = axios({
    method: "PUT",
    url: `${process.env.NEXT_PUBLIC_API_URL}/drums`,
    data: body,
  });
  const res = await data;
  return res;
};

export const unmountMachine = async (body) => {
  const turun = async (body) => {
    const data = axios({
      method: "PUT",
      url: `${process.env.NEXT_PUBLIC_API_URL}/monitoring`,
      data: body,
    });
    const res = await data;
    return res;
  };

  const res = axios({
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_API_URL}/monitoring?id=${body.building_mc}`,
  });
  const { data } = await res;

  if (data.id_left == "" || data.id_right == "") {
    const query = {
      building_mc: body.building_mc,
      id_left: "",
      id_right: "",
      status: "unuse",
    };
    turun(query);
  } else if (data.id_left == body.id_drum) {
    const query = {
      building_mc: body.building_mc,
      id_left: "",
      id_right: data.id_right,
      status: "use",
    };
    turun(query);
  } else if (data.id_right == body.id_drum) {
    const query = {
      building_mc: body.building_mc,
      id_left: data.id_left,
      id_right: "",
      status: "use",
    };
    turun(query);
  } else {
    return console.log("No C/C Drum Mounted");
  }
};
