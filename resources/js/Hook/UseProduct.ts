import ky from "ky";
import { ref } from "vue";

export const useProductList = () => {
  const products = ref<any[]>([])
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
