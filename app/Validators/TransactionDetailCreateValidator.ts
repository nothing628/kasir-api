import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class TransactionDetailCreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    productId: schema.number([rules.required(), rules.unsigned()]),
    jumlah: schema.number([rules.required(), rules.unsigned()]),
  });

  public messages: CustomMessages = {};
}
