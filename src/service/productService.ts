import ProductModel from '../models/productModel';
import IProduct from '../interface/IproductIndex';

export default class ProductService {
  model = new ProductModel();
  
  async addProducts(name: string, amount: string): Promise<IProduct> {
    const userId = await this.model.addProducts(name, amount);
    return userId;
  }
}
