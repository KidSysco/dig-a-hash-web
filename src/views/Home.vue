<template>
  <div>
    <!-- row 1 -->
    <div
      class="
        grid grid-cols-1
        sm:grid-cols-2
        m-auto
        my-12
        lg:mt-24
        max-w-screen-2xl
      "
    >
      <div class="p-12 lg:p-24">
        <img src="../../public/logo-text-transparent.png" class="" alt="" />
      </div>
      <div class="p-12 lg:p-24">
        <img src="../../public/logo-hero-transparent.png" class="" alt="" />
      </div>
    </div>

    <!-- row 2 -->

    <!-- row 4 -->

    <div
      id="Roadmap"
      class="
        grid grid-cols-1
        m-auto
        mt-6
        px-4
        w-11/12
        sm:max-w-screen-2xl
        gap-8
      "
    >
      <div class="text-center mt-24 text-4xl text-dah-header">
        Dig-A-Hash Road Map
      </div>
      <div class="flex justify-center">
        <img
          class="rounded-lg block md:hidden"
          src="../../public/roadmap-tall.jpg"
          alt=""
        />
        <img
          class="rounded-lg hidden md:block xl:w-10/12"
          src="../../public/roadmap-wide.jpg"
          alt=""
        />
      </div>
    </div>

    <!-- row Legacy -->

    <div
      id="Legacy"
      class="grid grid-cols-1 m-auto mt-6 px-4 w-96 sm:max-w-screen-2xl gap-8"
    >
      <div class="text-center mt-36 text-4xl text-dah-header">
        Dig-A-1st Project
        <p class="text-center mt-10 mb-36 text-2xl white-font">
          Coming soon...
        </p>
      </div>

      <!--
      <div class="mb-36">
        <img class="rounded-lg" src="../../public/legacy-logo.gif" alt="" />
      </div>
      -->
    </div>

    <!-- row Team -->
    <div class="text-center mt-16 text-4xl text-dah-header" id="Team">
      Team Dig-A-Hash
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
            <img
              class="rounded-full border-2 border-black"
              src="../../public/avatar-recon.jpg"
              alt=""
            />
          </div>

          <div class="p-6">
            <h5 class="text-gray-400 text-xl font-medium mb-2">
              recon whispers
            </h5>
            <p class="text-gray-500 text-base mb-4">
              <ul>
                <li>Business Builder</li>
                <li>Strategic Mastermind</li>
                <li>Serial Entrepreneur</li>
              </ul>
              <a href="https://www.twitter.com/reconwhispers" target="_blank">
                <img
                  class="w-8 h-8 mt-2"
                  src="../../public/twitter-square.png"
                  alt=""
                />
              </a>
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
          <div class="p-4">
            <img
              class="rounded-full border-2 border-black"
              src="../../public/avatar-kid.jpg"
              alt=""
            />
          </div>
          <div class="p-6">
            <h5 class="text-gray-400 text-xl font-medium mb-2">
              kid dig-a-hash
            </h5>
            <p class="text-gray-500 text-base mb-4">
            <ul>
              <li>FinTech Software Developer & Crypto Miner</li>
              <li>25 years in JavaScript</li>
              <li>Now working with Dig-A-Hash Holdings</li>
            </ul>
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
          <div class="p-4">
            <img
              class="rounded-full"
              src="../../public/avatar-boris.png"
              alt=""
            />
          </div>
          <div class="p-6">
            <h5 class="text-gray-400 text-xl font-medium mb-2">boristotle</h5>
            <p class="text-gray-500 text-base mb-4">
            <ul>
              <li>Software Engineer</li>
              <li>Real Estate Investor</li>
              <li>Cinnamon bun enthusiast</li>
            </ul>
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
  name: 'home',
  components: {
  }
}
</script>
<style scoped>
</style>
