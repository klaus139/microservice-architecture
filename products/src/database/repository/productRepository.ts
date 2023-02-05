import { ProductModel, IProduct } from "../models";

export class ProductRepositiory {
  async CreateProduct({ name,
    desc,
    banner,
    type,
    unit,
    price,
    avaialble,
    supplier}: IProduct) {
    try {
      const product = new ProductModel({
        name,
    desc,
    banner,
    type,
    unit,
    price,
    avaialble,
    supplier
      });

      const productResult = product.save();
      return productResult;
    } catch (err) {
      throw err;
    }
  }

  async FindCustomer({email}:{email:string}){
    const existingCustomer = await ProductModel.findOne({email});
    return existingCustomer;

  }
}
