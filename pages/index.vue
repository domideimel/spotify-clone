<template>
  <div class="grid grid-rows-main-rows grid-cols-main-layout h-full ">
      <sidebar
        class="max-w-xs"
      />
      <main-view />
      <player-controlls class="col-span-2"/>
  </div>
</template>

<script>
  import MainView from '~/components/Main/MainView';
  import Sidebar from '~/components/Main/Sidebar';
  import PlayerControlls from '~/components/Controlls/PlayerControlls';
  export default {
    components: {
      MainView,
      Sidebar,
      PlayerControlls
    }
  }
</script>
