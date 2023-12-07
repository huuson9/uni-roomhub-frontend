import authApi from "./config/authApi.config";

export const getListRoom = () => {
  authApi({
    method: "GET",
    url: `/rooms`,
  });
};

export const getListBuilding = () =>
  authApi({
    method: "GET",
    url: `/buildings`,
  });

export const editRoom = (id, data) =>
  authApi({
    method: "PUT",
    url: `/rooms/${id}`,
    data,
  });

export const deleteRoom = (id) =>
  authApi({
    method: "DELETE",
    url: `/rooms/${id}`,
  });
