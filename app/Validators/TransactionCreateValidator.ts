import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class TransactionCreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    cashierName: schema.string({}, [rules.required(), rules.maxLength(100)]),
    total: schema.number([rules.required(), rules.unsigned()]),
    bayar: schema.number([rules.required(), rules.unsigned()]),
  });

  public messages: CustomMessages = {};
}
