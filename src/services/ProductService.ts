import { ProductModel } from "../models/responses/ProductModel";
import { GetAllProductsModel } from "./../models/responses/GetAllProductsModel";
import axios, { AxiosResponse } from "axios";

const API_URL = "https://dummyjson.com/products";
class ProductService {
  getAll(): Promise<AxiosResponse<GetAllProductsModel, any>> {
    return axios.get<GetAllProductsModel>(API_URL);
  }

  getById(id: number) {
    return axios.get<ProductModel>(API_URL + "/" + id);
  }

  delete(id: number) {
    return axios.delete<ProductModel>(API_URL + "/" + id);
  }
}

export default new ProductService();
