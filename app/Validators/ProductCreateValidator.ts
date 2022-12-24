import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class ProductCreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    productName: schema.string({}, [
      rules.required(),
      rules.trim(),
      rules.maxLength(120),
    ]),
    productCategory: schema.string({}, [
      rules.required(),
      rules.trim(),
      rules.maxLength(100),
    ]),
    price: schema.number([
      rules.required(),
      rules.unsigned(),
    ])
  });

  public messages: CustomMessages = {};
}
