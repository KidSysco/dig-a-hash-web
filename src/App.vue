<template>
  <div id="app">
    <header class="sticky top-0 shadow border-b border-purple-900 bg-black">
      <div class="grid md:grid-cols-2 text-white">
        <div class="flex justify-start h-14">
          <img src="../public/logo-header-transparent.png" class="p-2" alt="" />
          <div v-on:click="toggleMobileMenu()" class="md:hidden flex items-center flex-row-reverse mr-5 w-full">
						<button class="outline-none mobile-menu-button">
						<svg class=" w-6 h-6 text-gray-400 hover:text-gray-100"
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
				</div>
        </div>
        <div class="justify-end items-center h-14 gap-x-8 mr-8 hidden md:flex">
          <a v-bind:href="roadmapHref" class="whitespace-nowrap text-gray-400 hover:text-gray-100 transition duration-300 ease-in-out">Road Map</a>
          <a v-bind:href="legacyHref" class="whitespace-nowrap text-gray-400 hover:text-gray-100 transition duration-300 ease-in-out">Dig-A-1st Project</a>
          <a href="/degenshindigs" class="whitespace-nowrap text-gray-400 hover:text-gray-100 transition duration-300 ease-in-out">Degen Shindigs</a>
          <a v-bind:href="teamHref" class="whitespace-nowrap text-gray-400 hover:text-gray-100 transition duration-300 ease-in-out">Team</a>
        </div>
        <div v-bind:hidden="mobileMenuHidden" class="mobile-menu hover:text-gray-100 ">
          <ul class="">
            <li class="active"><a href="/" class="block text-md px-2 py-4 text-gray-400 hover:text-gray-100 font-semibold">Home</a></li>
            <li><a v-bind:href="roadmapHref" v-on:click="toggleMobileMenu()" class="block text-gray-400 hover:text-gray-100 text-md px-2 py-4 transition duration-300">Road Map</a></li>
            <li><a v-bind:href="legacyHref" v-on:click="toggleMobileMenu()" class="block text-gray-400 hover:text-gray-100 text-md px-2 py-4 transition duration-300">Dig-A-1st Project</a></li>
            <li><a href="/degenshindigs" class="block text-gray-400 hover:text-gray-100 text-md px-2 py-4 transition duration-300">Degen Shindigs</a></li>
            <li><a v-bind:href="teamHref" v-on:click="toggleMobileMenu()" class="block text-gray-400 hover:text-gray-100 text-md px-2 py-4 transition duration-300">Team</a></li>
          </ul>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    toggleMobileMenu() {
      this.mobileMenuHidden = !this.mobileMenuHidden;
    }
  }, 
  data: function() {
    return {
      mobileMenuHidden: true,
      roadmapHref: this.$router.currentRoute.path === '/' ? '#Roadmap' : '/#Roadmap',
      legacyHref: this.$router.currentRoute.path === '/' ? '#Legacy' : '/#Legacy',
      teamHref: this.$router.currentRoute.path === '/' ? '#Team' : '/#Team'
    }
  }
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
