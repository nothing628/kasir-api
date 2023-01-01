import ky from "ky";
import { ref } from "vue";

type ProductFormData = {
  productName: string;
  productCategory: string;
  harga: number;
};

type ProductCreateFormData = ProductFormData;
type ProductUpdateFormData = ProductFormData;

export const deleteProduct = async (id: number | string) => {
  try {
    await ky.delete(`/products/${id}`).json();
  } catch {
    throw new Error("Tidak dapat menghapus produk");
  }
};

export const updateProduct = async (
  id: number | string,
  data: ProductUpdateFormData
) => {
  try {
    const product = await ky
      .put(`/products/${id}`, {
        json: data,
      })
      .json();

    return product;
  } catch {
    throw new Error("Produk tidak ditemukan");
  }
};

export const getProduct = async (id: number | string) => {
  try {
    const product = await ky.get(`/products/${id}`).json();

    return product;
  } catch {
    throw new Error("Produk tidak ditemukan");
  }
};

export const storeProduct = async (data: ProductCreateFormData) => {
  const response = await ky
    .post("/products", {
      json: data,
    })
    .json();

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
