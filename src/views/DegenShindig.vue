<template>
  <div>
    <div class="text-center mt-16 text-4xl text-dah-header">
      Degen Shindig  
        <div class="flex justify-center">
            <a href="https://www.twitter.com/degenshindig" target="_blank">
                <img
                class="w-8 h-8 mt-2"
                src="../../public/twitter-square.png"
                alt=""
                />
            </a>
            <a href="https://discord.gg/s4VXjx4G" target="_blank">
                <img
                class="w-10 h-10 mt-2 ml-2"
                src="../../public/discord.png"
                alt=""
                />
            </a>
        </div>
    </div>
    <p class="text-center mt-10 mb-15 text-2xl white-font">
        Degen Carnival with P2E NFT mini games
    </p>
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
            <h5 class="text-gray-400 text-xl font-medium mb-10 text-center">
              Current Game
            </h5>
            <img
              class="rounded-full border-2 border-black"
              src="../../public/brackets-logo.png"
              alt=""
            />
          </div>

          <div class="p-6">
            <h5 class="text-gray-400 text-xl font-medium mb-2 text-center">
              Brackets22
            </h5>
            <p class="text-gray-500 text-base mb-4 text-center">
            256 seeded NFTs for a chance at the college basketball national championship and a winners take all jackpot in March 2022. 
            If your region and seed wins the national championship, you win the pot. 
            The more they trade the bigger the payout becomes!
            </p>
            <!-- <div class="flex justify-center">
                <a href="https://www.twitter.com/degenshindig" target="_blank">
                    <img
                    class="w-8 h-8 mt-2"
                    src="../../public/twitter-square.png"
                    alt=""
                    />
                </a>
                <a href="https://discord.gg/s4VXjx4G" target="_blank">
                    <img
                    class="w-10 h-10 mt-2 ml-2"
                    src="../../public/discord.png"
                    alt=""
                    />
                </a>
            </div> -->
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
            <h5 class="text-gray-400 text-xl font-medium mb-10 text-center">
              Future Games
            </h5>
            <p class="text-gray-500 text-base mb-4 text-center">
            This is a placeholder for future mini games!
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
            <h5 class="text-gray-400 text-xl font-medium mb-10  text-center">
              Past Games
            </h5>
            <p class="text-gray-500 text-base mb-4 text-center">
                This is a placeholder for past mini games!
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
