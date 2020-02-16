export const state = () => ({
  artists: []
})

export const mutations = {
  SET_ARTISTS(state, artist) {
    state.artists = artist
  }
}

export const actions = {
  async GET_ARTISTS({commit}) {
    const requestURL = `${ process.env.API_ROOT_URL }?method=geo.gettopartists&country=germany&api_key=${ process.env.API_KEY }&format=json`
    const {topartists: {artist}} = await this.$axios.$get(requestURL)
    commit('SET_ARTISTS', artist)
  }
}
