import environment from "../environment/environment";
import { ResponseData } from "../models/responseData";
import api from "./apiService";

const httpService = {
  GET: async (url: string): Promise<ResponseData> => {
    return await api.get(url);
  },
  POST: async (url: string, body: any): Promise<ResponseData> => {
    return await api.post(url, body);
  },
  PUT: async (url: string, body: any): Promise<ResponseData> => {
    return await api.put(url, body);
  },
  DELETE: async (url: string, body: any): Promise<ResponseData> => {
    return await api.delete(url, body);
  }
};

export default httpService;