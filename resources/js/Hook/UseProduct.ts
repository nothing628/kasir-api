import ky from "ky";
import { ref } from "vue";

type ProductFormData = {
  productName: string;
  productCategory: string;
  price: number;
};

export const storeProduct = async (data: ProductFormData) => {
  const response = await ky.post("/products", {
    json: data,
  });
  const responseJson = await response.json();

  return responseJson;
};

export const useProductList = () => {
  const products = ref<any[]>([]);
  const loadProduct = async () => {
    const productResponse = await ky.get("/products");
    const productJson = await productResponse.json();

    products.value = productJson as unknown[];
  };

  return {
    products,
    loadProduct,
  };
};
