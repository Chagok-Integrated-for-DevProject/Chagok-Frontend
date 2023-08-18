import { AxiosClient } from "./axiosClient";

export const getStudyInfo = async (id?: number) => {
  const studyID = id ? `/${id}` : "";
  try {
    const response = await AxiosClient.get(`studies${studyID}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
