import axios from "axios";
import { Users_Api } from "../const/const";

const api = axios.create({
  baseURL: Users_Api,
  timeout: 10000,
});

export const fetchUserList = () => api.get("");
