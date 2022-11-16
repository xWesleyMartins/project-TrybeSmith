import OrderModel from '../models/orderModel';
import IOrder from '../interface/IOrder';

export default class ProductService {
  model = new OrderModel();

  async findAll(): Promise<IOrder[]> {
    const resultList = await this.model.findAll();

    return resultList;
  }
}