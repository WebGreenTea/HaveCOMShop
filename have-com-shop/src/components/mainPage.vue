<template>
  <!-- Nav bar -->
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between flex-nowrap flex-row"
  >
    <div class="container">
      <router-link to="/" class="navbar-brand float-left"
        >HaveCOM SHOP</router-link
      >
      <div class="collapse navbar-collapse topnav-right" id="navbarDropdown">
        <ul class="nav navbar-nav ml-auto" v-if="Inlogin">
          <li class="nav-item dropdown">
            <a
              href=""
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenu"
              data-toggle="dropdown"
              >{{ username }}</a
            >
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenu">
              <li>
                <a href="" @click="Logout" class="dropdown-item">Logout</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="nav navbar-nav ml-auto" v-else>
          <li class="nav-item">
            <router-link to="/login" class="nav-link pr-3">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link pr-3"
              >Register</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container-fulid bg-overlay">
    <div class="text-center">
      <h1>จัดสเปคคอมของคุณเอง พร้อมบริการประกอบฟรี</h1>
      <button type="button" class="btn btn-primary btn-lg bg-info">เริ่มจัดสเปค</button>
    </div>
  </div>

  <ul class="nav nav-pills nav-fill bg-dark">
    <li class="nav-item">
      <a href="#" class="nav-link bg-info text-light active ">สินค้าทั้งหมด</a>
    </li>
    <li class="nav-item">
      <a href="/CPU" class="nav-link bg-dark text-light">CPU</a>
    </li>
    <li class="nav-item">
      <a href="/RAM" class="nav-link bg-dark text-light">RAM</a>
    </li>
    <li class="nav-item">
      <a href="/VGA" class="nav-link bg-dark text-light">VGA</a>
    </li>
    <li class="nav-item">
      <a href="MainBoard" class="nav-link bg-dark text-light">MainBoard</a>
    </li>
    <li class="nav-item">
      <a href="/HDD-SSD" class="nav-link bg-dark text-light">HDD/SSD</a>
    </li>
    <li class="nav-item">
      <a href="/PSU" class="nav-link bg-dark text-light">PSU</a>
    </li>
    <li class="nav-item">
      <a href="/Case" class="nav-link bg-dark text-light">Case</a>
    </li>
    <li class="nav-item">
      <a href="/Cooler" class="nav-link bg-dark text-light">Cooler</a>
    </li>
    <li class="nav-item">
      <a href="/more" class="nav-link bg-dark text-light">อืนๆ</a>
    </li>
  </ul>
  <div class="container-fluid mt-4">
    <div class="row">
      <div
        class="col-lg-2"
        v-for="(product, index) in products"
        :key="index"
        @click="viewProduct(product._id)"
      >
        <div class="card" id="productArea">
          <img :src="prefixIMGurl + product.img" alt="" />
          <div class="card-body" v-if="product.count != 0">
            <h6 class="card-title">{{ product.PDname }}</h6>
            <h5 class="card-text" id="price">
              {{ product.price.toLocaleString() }} THB
            </h5>
            <h6 class="card-text" id="price">
              {{ priceInBTC(product.price) }}
              <img
                src="https://drive.google.com/uc?export=view&id=1ldi5YT6pk21W3SBj1dr0zggtlwPcKV3m"
                style="max-width: 9%"
              />
            </h6>
          </div>
          <div class="card-body" v-else>
            <h6 class="card-title">{{ product.PDname }}</h6>
            <h4 class="card-text" id="price">
              สินค้าหมด
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import {MainURL} from './js/MainUrl';
import axios from "axios";
import { checklogin } from "./js/verify";
import { BTCprice } from "./js/BTCprice";

export default {
  data() {
    return {
      username: "",
      Inlogin: false,
      products: null,
      prefixIMGurl: "https://drive.google.com/uc?export=view&id=",
      btc: null,
    };
  },
  methods: {
    Logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
    priceInBTC(thb) {
      return (thb / this.btc).toFixed(7);
    },
    viewProduct(id) {
      this.$router.push({ name: "productDetail", params: { id: id } });
    },
  },
  async created() {
    //checkLogin
    const { username, login } = await checklogin();
    this.Inlogin = login;
    this.username = username;
    //console.log(this.Inlogin+" "+this.username)

    //get product data
    const apiURL = MainURL +"/product/getPD";
    axios.get(apiURL).then((res) => {
      this.products = res.data;
      //console.log(res.data)
      //console.log(this.products[0].price)
    });
    //get BTC price
    this.btc = await BTCprice();
  },
};
</script>
<style >
#productArea {
  cursor: pointer;
}

.bg-overlay {
  background: url("https://drive.google.com/uc?export=view&id=1lw1o9JVs42xuZB_zly4zzdc6QurYrjW0");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  color: #fff;
  height: 300px;
  padding-top: 100px;
}

.card:hover{
  background-color: #17a2b8;
  color: #fff;
}
</style>



