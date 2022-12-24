import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class TransactionUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    total: schema.number.optional([rules.unsigned()]),
    bayar: schema.number.optional([rules.unsigned()]),
    kembali: schema.number.optional([rules.unsigned()]),
  });

  public messages: CustomMessages = {};
}
