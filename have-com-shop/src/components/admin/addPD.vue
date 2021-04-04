<template>
  <div class="container">
    <h2>Add new Product</h2>
    <form @submit.prevent="newPD">
      <input placeholder="name" type="text" required v-model="product.name" />
      <input
        placeholder="price"
        type="number"
        required
        v-model="product.price"
      />
      <input
        placeholder="count"
        type="number"
        required
        v-model="product.count"
      />
      <input
        placeholder="imageURL"
        type="text"
        
        v-model="product.url"
      />
      <input type="submit" value="add product" />
      <br>
      <select name="type" id="" v-model="product.type">
        <option value="CPU">CPU</option>
        <option value="RAM">RAM</option>
        <option value="Mainboard">Mainboard</option>
        <option value="VGA">VGA</option>
        <option value="HDD-SSD">HDD-SSD</option>
        <option value="PSU">PSU</option>
        <option value="Case">Case</option>
        <option value="Cooler">Cooler</option>
        <option value="more">อื่นๆ</option>
      </select>
      <input type="text" placeholder="(cpu,mainboard)socket" v-model="product.more.socket">
      <input type="number" placeholder="(ram)DIMM" v-model="product.more.DIMM">
    </form>
  </div>
  <div><h1>{{error}}</h1></div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      product: {
        name: "",
        price: "",
        count: "",
        url: "",
        type:'',
        more:{socket:'',DIMM:''}
      },
      error: ''
    };
  },
  methods: {
    newPD() {
      let apiURL = "http://localhost:3000/product/addPD";
      axios
        .post(apiURL, this.product)
        .then((res) => {
          if (res.data.status == "error") {
            this.error = res.data.status
          } else {
            this.error = ''
            location.reload();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>