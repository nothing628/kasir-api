import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import ProductCreateValidator from "App/Validators/ProductCreateValidator";
import ProductUpdateValidator from "App/Validators/ProductUpdateValidator";
import ProductModel from "App/Models/Product";

export default class ProductsController {
  public async index({}: HttpContextContract) {
    const products = await ProductModel.all();

    return products;
  }

  public async create({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    const payload = await request.validate(ProductCreateValidator);
    const newProduct = new ProductModel();
    newProduct.fill(payload);
    await newProduct.save();

    return newProduct;
  }

  public async show({ params }: HttpContextContract) {
    const productId = params.id;
    const product = await ProductModel.findOrFail(productId);

    return product;
  }

  public async edit({}: HttpContextContract) {}

  public async update({ params, request }: HttpContextContract) {
    const productId = params.id;
    const product = await ProductModel.findOrFail(productId);
    const payload = await request.validate(ProductUpdateValidator);

    product.merge(payload);
    await product.save();

    return product;
  }

  public async destroy({ params, response }: HttpContextContract) {
    const productId = params.id;
    const product = await ProductModel.findOrFail(productId);

    await product.delete();

    return response.status(204);
  }
}
