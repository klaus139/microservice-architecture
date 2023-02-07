// REPOSITORY COMMUNNICATE WITH THE DATABASE

import {CustomerModel, ICustomer} from "../models"
import { Iproduct, ItemProduct } from "./customer-repository.dto"

// THIS IS NOT REQ.BODY, IT IS JUST LIKE A PAYLOAD TO 
// WHAT IS EXPECTED TO BE SAVED TO THE DATABASE ON CREATE ACCOUNT
export class CustomerRepository{

    //************* CREATE CUSTOMER*************** */ 
    async CreateCustomer({email, phone, password, salt}: ICustomer){
        try {
            const customer = await CustomerModel.create({
                email,
                phone, 
                password, 
                salt,
            })
            return customer
        } catch (err) {
            console.log(err)
        }
    }

    //************* FIND CUSTOMER BY EMAIL*************** */ 
        // CHECK IF CUSTOMER ALREADY EXISIT
    async FindCustomer(email:string){
        const customer = await CustomerModel.findOne({email})
        return customer
    }

    // async FindById({_id}:{_id:string}){
    //   const existingCustomer = await CustomerModel.findById(_id)

    // }

    async AddCartItem(customerId: string, {_id, name, price, banner}: Iproduct, qty: number, isRemove:boolean){
      const profile = await CustomerModel.findById(customerId).populate('cart')
      if(profile){
        const cartItem = {
          product: {
            _id,
            name,
            price,
            banner
          },
          unit: qty
        }

        let cartItems = profile.cart
        if(cartItems.length > 0 ){
          let isExist = false;
          cartItems.map((item: any) => {
            if(item.product._id.toString() === _id.toString()){
             if(isRemove){
              cartItems.splice(cartItems.indexOf(item), 1);
             } else {
              item.unit = qty;
             }
             isExist = true;
            }
          });

          if(!isExist){
            cartItems.push(cartItem);
          } else {
            cartItems.push(cartItem);
          }

        }
      }

    }


}