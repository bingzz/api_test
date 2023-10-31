import axios from "axios";
import environment from "../environment/environment";
import { ResponseData } from "../models/responseData";

const httpService = {
  GET: async (url: string): Promise<ResponseData> => {
    return await axios.get(environment.apiURL + url);
  },
  POST: async (url: string, body: any): Promise<ResponseData> => {
    return await axios.post(environment.apiURL + url, body);
  },
  PUT: async (url: string, body: any): Promise<void> => {
    return await axios.put(environment.apiURL + url, body);
  },
  DELETE: async (url: string, body: any): Promise<void> => {
    return await axios.delete(environment.apiURL + url, body);
  }
};

export default httpService;