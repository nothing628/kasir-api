import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class TransactionDetailCreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    transactionId: schema.number([rules.required(), rules.unsigned()]),
    productId: schema.number([rules.required(), rules.unsigned()]),
    productName: schema.string({}, [rules.required(), rules.maxLength(120)]),
    jumlah: schema.number([rules.required(), rules.unsigned()]),
    harga: schema.number([rules.required(), rules.unsigned()]),
  });

  public messages: CustomMessages = {};
}
