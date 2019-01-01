<template>
  <div id="app">
    <my-test></my-test>
  </div>
</template>

<script>
import myTest from "./views/myTest/index";

export default {
  name: "App",
  components: {
    myTest
  }
};
</script>