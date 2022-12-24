import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TransactionDetailUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    jumlah: schema.number([rules.required(), rules.unsigned()]),
  })

  public messages: CustomMessages = {}
}
