<template>
  <!-- Nav bar -->
  <nav
    class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row"
  >
    <div class="container">
      <router-link to="/" class="navbar-brand float-left"
        >HaveCOM SHOP</router-link
      >
      <ul class="nav navbar-nav flex-row float-right">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">Register</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <div class="container mt-5">
    <div><p>{{error}}</p></div>
    <form @submit.prevent="handleLogin">
      <input
        type="text"
        placeholder="Username"
        v-model="login.username"
      /><br />
      <input
        type="password"
        placeholder="Password"
        v-model="login.password"
      /><br />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  emits:['set-nav'],
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    handleLogin() {
      let apiURL = "http://localhost:3000/user/login";
      axios
        .post(apiURL, this.login)
        .then((res) => {
          if(res.data.error){
            this.error = res.data.error
          }else{
            localStorage.setItem("token", res.data.data);
            //this.$router.push("/");
            location.reload();
          }
          console.log(res.data.data);
          
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.$emit('set-nav',false)


    let token = localStorage.getItem("token");

    if (token) {
      //alert('don\'t have token')
      this.$router.push("/");
    }

    

    
  },
  
};
</script>