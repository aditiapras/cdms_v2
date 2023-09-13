import axios from "axios";

export const unmountDrum = async (body) => {
  const data = axios({
    method: "PUT",
    url: "http://localhost:3000/api/cdms/drums",
    data: body,
  });
  const res = await data;
  return res;
};

export const unmountMachine = async (body) => {
  const turun = async (body) => {
    const data = axios({
      method: "PUT",
      url: "http://localhost:3000/api/cdms/monitoring",
      data: body,
    });
    const res = await data;
    return res;
  };

  const res = axios({
    method: "GET",
    url: `http://localhost:3000/api/cdms/monitoring?id=${body.building_mc}`,
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
