<template>
  <div id="app">
    <header class="sticky top-0 shadow border-b border-purple-900 bg-black">
      <div class="grid grid-cols-2 text-white">
        <div class="flex justify-start h-14">
          <img src="../public/logo-header-transparent.png" class="p-2" alt="" />
        </div>
        <div class="justify-end items-center h-14 gap-x-8 mr-8 hidden sm:flex">
          <a href="#Roadmap" class="whitespace-nowrap text-gray-400 hover:text-gray-100 transition duration-300 ease-in-out">Road Map</a>
          <a href="#Legacy" class="whitespace-nowrap text-gray-400 hover:text-gray-100 transition duration-300 ease-in-out">Dig-A-1st Project</a>
          <a href="/degenshindig" class="whitespace-nowrap text-gray-400 hover:text-gray-100 transition duration-300 ease-in-out">Degen Shindig</a>
          <a href="#Team" class="whitespace-nowrap text-gray-400 hover:text-gray-100 transition duration-300 ease-in-out">Team</a>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>


<style>
body,
html {
  height: 100%;
  padding: 0;
  margin: 0;
  color: rgb(194, 194, 194);
}
body {
  background: url("../public/background.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.text-dah-header {
  color: rgb(13, 205, 13);
}
.white-font {
  color: rgb(255, 255, 255);
}
</style>
