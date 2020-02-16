<template>
  <div class="bg-gray-800-spotify flex-1 flex flex-col">
    <div class="top-bar flex items-center justify-between px-4 py-2">
      <div class="flex items-center">
        <button>
          <svg class="fill-current text-gray-400 hover:text-white h-10 w-10" viewBox="0 0 24 24" width="24" height="24">
            <path d="M14.7 15.3a1 1 0 01-1.4 1.4l-4-4a1 1 0 010-1.4l4-4a1 1 0 011.4 1.4L11.42 12l3.3 3.3z"/>
          </svg>
        </button>
        <button class="ml-1">
          <svg class="fill-current text-gray-400 hover:text-white h-10 w-10" viewBox="0 0 24 24" width="24" height="24">
            <path class="heroicon-ui"
                  d="M9.3 8.7a1 1 0 011.4-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.4-1.4l3.29-3.3-3.3-3.3z"/>
          </svg>
        </button>
        <div class="ml-4 relative">
          <input type="text" placeholder="Search"
                 class="bg-white text-gray-800 placeholder-gray-800 rounded-full px-3 pl-8 py-1">
          <div class="absolute top-0">
            <svg class="fill-current text-gray-800 h-6 w-6 pt-1 pl-2" viewBox="0 0 24 24" width="24" height="24">
              <path class="heroicon-ui"
                    d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <button>
          <svg class="fill-current text-gray-400 hover:text-white w-6 h-6" viewBox="0 0 496 512">
            <path
              d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"/>
          </svg>
        </button>
        <a href="#" class="ml-2 hover:underline hover:text-white">dredrehimself</a>
        <button class="ml-4">
          <svg class="fill-current text-gray-400 hover:text-white w-6 h-6" viewBox="0 0 24 24" width="24" height="24">
            <path class="heroicon-ui"
                  d="M15.3 9.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4l3.3 3.29 3.3-3.3z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchBar'
  }
</script>
