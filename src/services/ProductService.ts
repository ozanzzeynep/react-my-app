import { GetAllProductsModel } from "./../models/responses/GetAllProductsModel";
import axios, { AxiosResponse } from "axios";

const API_URL = "https://dummyjson.com/products";
export class ProductService {
    
  getAll(): Promise<AxiosResponse<GetAllProductsModel, any>> {
    return axios.get<GetAllProductsModel>(API_URL);
  }
}
