<template>
  <div class="flex flex-col h-screen text-sm text-gray-400">
    <div class="flex-1 flex overflow-y-hidden">
      <sidebar/>
      <main-view/>
    </div>
    <player-controlls/>
  </div>
</template>

<script>
  import MainView from '~/components/Main/MainView'
  import Sidebar from '~/components/Main/Sidebar'
  import PlayerControlls from '~/components/Controlls/PlayerControlls'

  export default {
    components: {
      MainView,
      Sidebar,
      PlayerControlls
    },
    async fetch({store}) {
      await store.dispatch('artists/GET_ARTISTS')
    }
  }
</script>
