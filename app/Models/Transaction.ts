import { DateTime } from "luxon";
import { BaseModel, column, hasMany, HasMany } from "@ioc:Adonis/Lucid/Orm";
import TransactionDetail from "App/Models/TransactionDetail";

export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public cashierName: string;

  @column()
  public total: number;

  @column()
  public bayar: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => TransactionDetail)
  public details: HasMany<typeof TransactionDetail>
}
