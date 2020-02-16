<template>
  <div class="bg-gray-800-spotify flex-1 flex flex-col">
    <SearchBar/>
    <div class="content-spotify overflow-y-auto">
      <div class="container mx-auto">
        <h2 class="mt-24 text-5xl font-semibold text-white">Home</h2>

        <div class="mt-12">
          <h3 class="font-semibold text-xl border-b border-gray-900 pb-2">Top Artists</h3>
          <div class="flex items-center mt-4 -mx-4">
            <div
              v-for="(artist, index) in artists.slice(0,5)"
              :key="index"
              class="w-1/5 px-4">
              <div>
                <a :href="artist.url"><img v-lazy="artist.image[2]['#text']" alt="album cover"></a>
              </div>
              <div>
                <a :href="artist.url" class="font-semibold block hover:text-white mt-2">{{ artist.name }}</a>
                <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">{{artist.listeners}} Listener</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12">
          <h3 class="font-semibold text-xl border-b border-gray-900 pb-2">Top Artists</h3>
          <div class="flex items-center mt-4 -mx-4">
            <div
              v-for="(artist, index) in artists.slice(0,5)"
              :key="index"
              class="w-1/5 px-4">
              <div>
                <a :href="artist.url"><img v-lazy="artist.image[2]['#text']" alt="album cover"></a>
              </div>
              <div>
                <a :href="artist.url" class="font-semibold block hover:text-white mt-2">{{ artist.name }}</a>
                <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">{{artist.listeners}} Listener</div>
              </div>
            </div>
          </div>
        </div>

        <div class="my-12">
          <h3 class="font-semibold text-xl border-b border-gray-900 pb-2">Top Artists</h3>
          <div class="flex items-center mt-4 -mx-4">
            <div
              v-for="(artist, index) in artists.slice(0,5)"
              :key="index"
              class="w-1/5 px-4">
              <div>
                <a :href="artist.url"><img v-lazy="artist.image[2]['#text']" alt="album cover"></a>
              </div>
              <div>
                <a :href="artist.url" class="font-semibold block hover:text-white mt-2">{{ artist.name }}</a>
                <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">{{artist.listeners}} Listener</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import SearchBar from './SearchBar'

  export default {
    name: 'MainView',
    components: {
      SearchBar
    },
    computed: {
      artists() {
        return this.$store.state.artists.artists
      }
    }
  }
</script>

<style scoped>
  .content-spotify::-webkit-scrollbar {
    width: 8px;
    background-color: #181818;
  }

  .content-spotify::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #535353;
  }
</style>
