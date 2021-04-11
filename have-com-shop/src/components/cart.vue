<template>
  <h1>{{userID}}</h1>
</template>

<script>
import axios from "axios";
import { MainURL } from "../MainUrl.js";
export default {
  emits:['set-nav','update-cart'],
  props:['Inlogin','userID'],
  data(){
      return{
          CartProductList: [],
          lawCart:[]
      }
  },
    async created() {
    if(!this.Inlogin){
      this.$router.push('/login')
    }
    let apiURL = MainURL + `/cart/list/${this.userID}`
    await axios.get(apiURL).then(res =>{
      this.lawCart = res.data
    })
    for (let lawCarts of this.lawCart){
      apiURL = MainURL+`/product/getPD/${lawCarts.productID}`
      await axios.get(apiURL).then(res =>{
        this.CartProductList.push({
          ProductID:lawCarts.productID,
          count:lawCarts.count,
          ProductName:res.data.PDname,
          price:res.data.price,
          img:res.data.img
          }) 
      })
    }
    console.log(this.CartProductList)
    
  },
};
</script>