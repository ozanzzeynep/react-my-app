import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ProductModel } from "../../models/responses/ProductModel";
import ProductService from "../../services/ProductService";

type Props = {};

const ProductDetail = (props: Props) => {
  //Locationdan alınan değer her zaman string dir. Onun dışında bir değer alınamaz.
  //const location = useLocation();
  const params = useParams<{ id: string }>();

  const [product, setProduct] = useState<ProductModel>();

  useEffect(() => {
    //let query = new URLSearchParams(location.search);

    if (params.id) {
      ProductService.getById(parseInt(params.id)).then((response) => {
        setProduct(response.data);
      });
    }
  }, []);
  return (
    <div>
      <p>{product?.title}</p>
    </div>
  );
};

export default ProductDetail;
