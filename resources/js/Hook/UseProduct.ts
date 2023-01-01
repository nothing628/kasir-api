import ky from "ky";
import { ref } from "vue";

type ProductFormData = {
  productName: string;
  productCategory: string;
  harga: number;
};

export const deleteProduct = async (id: number) => {
  try {
    await ky.delete(`/products/${id}`).json()
  } catch {
    throw new Error("Tidak dapat menghapus produk")
  }
}

export const storeProduct = async (data: ProductFormData) => {
  const response = await ky.post("/products", {
    json: data,
  }).json();

  return response;
};

export const useProductList = () => {
  const products = ref<any[]>([]);
  const loadProduct = async () => {
    const productJson = await ky.get("/products").json();

    products.value = productJson as unknown[];
  };

  return {
    products,
    loadProduct,
  };
};
