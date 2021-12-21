<template>
  <div class="home">
    <img src="Dig-A-Hash.jpg" class="logo" />
	<div class="copyright">&copy; Dig-A-Hash 2022</div>
  </div>
</template>

<script>


export default {
  name: 'home',
  components: {
  }
}
</script>
<style scoped>
.home {
  text-align: center;
}

.logo {
  margin-top: 30px;
  width: 50%;
}

.copyright {
	text-align: center;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	color:gray;
	font-size: 10px;
}
</style>
