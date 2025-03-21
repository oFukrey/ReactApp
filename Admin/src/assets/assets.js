import logo from './logo.png'
import searchBar from './search_bar.png'
import customer from './customer.png'
import order from './order.png'
import revenue from './revenue.png'
import expenses from './expenses.png'
import cloth from './cloth.jpg'

import cloth2 from './cloth2.jpg'

import cloth3 from './cloth3.jpg'



export const assets = {
  logo,
  searchBar,
  customer,
  order,
  revenue,
  expenses,
  cloth,
  cloth2,
  cloth3,
}

export const imageData = [
  {
    id : 1,
    image : cloth,
    price : 326,
    description:"Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.",
    name : "Suit ",
    field: "bestSeller",
    isValid:false,
    sizes:["S","M","L","XL","XXL"]
  },
  {
    id : 2,
    image : cloth2,
    price : 569,
    description:"Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.",
    name : "tshirt ",
    field: "bestSeller",
    isValid:false,
    sizes:["S","M","L","XL","XXL"]
  },
  {
    id : 3,
    image : cloth3,
    price : 489,
    description:"Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.",
    name : "Jacket ",
    field: "bestSeller",
    isValid:false,
    sizes:["S","M","L","XL","XXL"]
  }
]