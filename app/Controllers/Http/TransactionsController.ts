import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import TransactionModel from "App/Models/Transaction";
import TransactionCreateValidator from "App/Validators/TransactionCreateValidator";
import TransactionUpdateValidator from "App/Validators/TransactionUpdateValidator";

export default class TransactionsController {
  public async index({}: HttpContextContract) {
    const transactions = await TransactionModel.all();

    return transactions;
  }

  public async create({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    const payload = await request.validate(TransactionCreateValidator);
    const newTransaction = new TransactionModel();
    newTransaction.fill(payload);
    await newTransaction.save();

    return newTransaction;
  }

  public async show({ params }: HttpContextContract) {
    const transactionId = params.id;
    const transaction = await TransactionModel.findOrFail(transactionId);

    return transaction;
  }

  public async edit({}: HttpContextContract) {}

  public async update({ params, request }: HttpContextContract) {
    const transactionId = params.id;
    const transaction = await TransactionModel.findOrFail(transactionId);
    const payload = await request.validate(TransactionUpdateValidator);

    transaction.merge(payload);
    await transaction.save();

    return transaction;
  }

  public async destroy({ params, response }: HttpContextContract) {
    const transactionId = params.id;
    const transaction = await TransactionModel.findOrFail(transactionId);
    await transaction.delete();

    response.status(204);
  }
}
