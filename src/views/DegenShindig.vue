<template>
  <div>
    <div class="text-center mt-16 text-4xl text-dah-header">
        <div class="flex justify-center">
            <img
                class="h-52 w-52"
                src="../../public/degen-shindigs-sm.png"
                alt=""
            />
        </div>
        <div class="flex justify-center">
            <p class="text-center mt-3 mb-24 text-xl text-white">
                Degen Carnival with P2E NFT mini games
            </p>
        </div>
    </div>
    <div
      class="
        grid grid-cols-1
        sm:grid-cols-3
        m-auto
        mt-6
        w-11/12
        sm:max-w-screen-2xl
        gap-8
      "
    >
      <div class="flex justify-center">
        <div
          class="
            rounded-lg
            shadow-lg
            max-w-sm
            bg-gray-900 bg-opacity-60
            border border-black
          "
        >
          <div class="p-4">
            <h5 class="text-gray-400 text-xl font-medium mb-10">
              Current Game
            </h5>
            <img
              class="img-zoom"
              src="../../public/brackets-logo.png"
              alt=""
            />
          </div>

          <div class="p-6">
            <h5 class="text-gray-400 text-xl font-medium mb-2">
              Brackets22
            </h5>
            <p class="text-gray-500 text-base mb-4">
                Heighten your 2022 March Madness experience with this NFT mini game.
                More details inside our private discord and twitter.  Hurry before the game ends on April 1st.

            </p>
            <div class="flex justify-center">
                <a href="https://www.twitter.com/degenshindigs" target="_blank">
                    <img
                    class="w-8 h-8 mt-2"
                    src="../../public/twitter-square.png"
                    alt=""
                    />
                </a>
                <!-- <a href="https://discord.gg/s4VXjx4G" target="_blank">
                    <img
                    class="w-10 h-10 mt-2 ml-2"
                    src="../../public/discord.png"
                    alt=""
                    />
                </a> -->
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <div
          class="
            rounded-lg
            shadow-lg
            max-w-sm
            bg-gray-900 bg-opacity-60
            border border-black
          "
        >
          <!-- <div class="p-4">
            <img
              class="rounded-full border-2 border-black"
              src="../../public/avatar-recon.jpg"
              alt=""
            />
          </div> -->

          <div class="p-6">
            <h5 class="text-gray-400 text-xl font-medium mb-10">
            Upcoming Games
            </h5>
            <p class="text-gray-500 text-base mb-4">
            Upcoming games include a <span class="text-white"><b>World Cup 2022 Soccer</b></span> game and more! Use past game NFTs for early access to upcoming games.
            </p>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <div
          class="
            rounded-lg
            shadow-lg
            max-w-sm
            bg-gray-900 bg-opacity-60
            border border-black
          "
        >
          <!-- <div class="p-4">
            <img
              class="rounded-full border-2 border-black"
              src="../../public/avatar-recon.jpg"
              alt=""
            />
          </div> -->

          <div class="p-6">
            <h5 class="text-gray-400 text-xl font-medium mb-10">
              Previous Games
            </h5>
            <p class="text-gray-500 text-base mb-4">
                Brackets22 is our first P2E NFT game, but you can be certain it won't be our last!
            </p>
          </div>
        </div>
      </div>

    </div>
    <div class="mt-48">&nbsp;</div>
  </div>
</template>

<script>


export default {
  name: 'degenshindig',
  components: {
  }
}
</script>
<style scoped>
</style>
