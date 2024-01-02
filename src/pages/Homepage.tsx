import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { ProductService } from "../services/ProductService";
import { ProductModel } from "../models/responses/ProductModel";

type Props = {};

export const Homepage = (props: Props) => {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    let service: ProductService = new ProductService();
    service.getAll().then((response) => {
      setProducts(response.data.products);
    });
  };

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-6 col-12 mb-5">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
