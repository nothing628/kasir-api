import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProductUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    productName: schema.string.optional({}, [
      rules.trim(),
      rules.maxLength(120),
    ]),
    productCategory: schema.string.optional({}, [
      rules.trim(),
      rules.maxLength(100),
    ]),
    harga: schema.number.optional([
      rules.unsigned(),
    ])
  })

  public messages: CustomMessages = {}
}
