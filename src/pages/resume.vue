<template>
<!--  <div>User {{ $route.params.resumeid }}</div>-->
<!--  <component :is="'side-bar'"></component>-->
<!--  <SideBar></SideBar>-->


  <div class="page-wrapper">
    <div class="page" :id="$route.params.resumeid">
      <div class="page-inner">
<!--        <keep-alive>-->
        <component :is="$route.params.resumeid"></component>
<!--        </keep-alive>-->
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import '../resumes/resumes';
// import SideBar from "@/resumes/side-bar";
// export default Vue.component('resume', {
//   name: 'app'
// });
export default {
  name: "resume",
  // name: "app",
  // components: {
  //   SideBar
  // }
}
</script>

<style scoped>
.page-inner{
  height: 100%;
  width: 100%;
}
.page-wrapper {
  overflow-x: hidden;
  background: #CCCCCC;
  margin: 0;
  padding: 0;
  -webkit-print-color-adjust: exact;
  box-sizing: border-box;
}
.resume {
  height: 100%;
  width: 100%;
}
.page {
  background: white;
  position: relative;
  width: 21cm;
  height: 29.68cm;
  display: block;
  page-break-after: auto;
  overflow: hidden;
}
</style>
