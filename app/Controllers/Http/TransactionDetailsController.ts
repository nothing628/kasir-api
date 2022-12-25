import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import ProductModel from "App/Models/Product";
import TransactionModel from "App/Models/Transaction";
import TransactionDetailModel from "App/Models/TransactionDetail";
import TransactionDetailCreateValidator from "App/Validators/TransactionDetailCreateValidator";
import TransactionDetailUpdateValidator from "App/Validators/TransactionDetailUpdateValidator";

export default class TransactionDetailsController {
  public async index({ params }: HttpContextContract) {
    const transactionId = params.transaction;
    const transaction = await TransactionModel.findOrFail(transactionId);

    await transaction.load("details");
    return transaction.details;
  }

  protected async getProduct(productId: number): Promise<ProductModel> {
    const product = await ProductModel.findOrFail(productId);

    return product;
  }

  public async create({}: HttpContextContract) {}

  public async store({ params, request }: HttpContextContract) {
    const transactionId = params.transaction;
    const transaction = await TransactionModel.findOrFail(transactionId);
    const payload = await request.validate(TransactionDetailCreateValidator);
    const product = await this.getProduct(payload.productId);
    const newDetail = new TransactionDetailModel();
    newDetail.fill(payload);
    newDetail.productName = product.productName;
    newDetail.harga = product.harga;

    await transaction.related("details").save(newDetail);

    return newDetail;
  }

  public async show({ params }: HttpContextContract) {
    const transactionId = params.transaction;
    const transactionDetailId = params.id;
    const transaction = await TransactionModel.findOrFail(transactionId);
    const detailQuery = transaction.related("details").query();
    const detail = await detailQuery
      .where("id", transactionDetailId)
      .firstOrFail();

    return detail;
  }

  public async edit({}: HttpContextContract) {}

  public async update({ params, request }: HttpContextContract) {
    const transactionId = params.transaction;
    const transactionDetailId = params.id;
    const transaction = await TransactionModel.findOrFail(transactionId);
    const detailQuery = transaction.related("details").query();
    const detail = await detailQuery
      .where("id", transactionDetailId)
      .firstOrFail();

    const payload = await request.validate(TransactionDetailUpdateValidator);
    detail.merge(payload);
    await detail.save();

    return detail;
  }

  public async destroy({ params, response }: HttpContextContract) {
    const transactionId = params.transaction;
    const transactionDetailId = params.id;
    const transaction = await TransactionModel.findOrFail(transactionId);
    const detailQuery = transaction.related("details").query();
    const detail = await detailQuery
      .where("id", transactionDetailId)
      .firstOrFail();

    await detail.delete();

    response.status(204);
  }
}
