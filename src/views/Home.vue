<template>
  <div class="container">
    <header class="jumbotron">
      <h3>Work in progress...</h3>
      <h5>Login for more options</h5>
    </header>
  </div>
</template>
<script>
import UserService from "../services/user.service";
export default {
  name: "Home",
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    // UserService.getAllMeasures().then(
    //     (response) => {
    //       this.content = response.data;
    //     },
    //     (error) => {
    //       this.content =
    //           (error.response &&
    //               error.response.data &&
    //               error.response.data.message) ||
    //           error.message ||
    //           error.toString();
    //     }
    // );
  },
};
</script>