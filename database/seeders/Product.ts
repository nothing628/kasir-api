import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Product.createMany([
      {
        productName: "Indomie Goreng",
        productCategory: "Makanan",
        harga: 3500,
      },
      {
        productName: "CocaCola 1500ml",
        productCategory: "Minuman",
        harga: 15000,
      },
      {
        productName: "Ultramilk Coklat 2000ml",
        productCategory: "Minuman",
        harga: 20400,
      }
    ])
  }
}
