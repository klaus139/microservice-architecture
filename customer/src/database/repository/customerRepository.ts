import { CustomerModel, Icustomer } from "../models";

export class CustomerRepositiory {
  async CreateCustomer({ email, password, salt, phone }: Icustomer) {
    try {
      const customer = new CustomerModel({
        email,
        password,
        salt,
        phone,
      });

      const customerResult = customer.save();
      return customerResult;
    } catch (err) {
      throw err;
    }
  }
}
