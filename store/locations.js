export const state = () => ({
  locations: [
    {
      id: 0,
      name: "Amsterdam",
      country: "Netherlands",
      countrycode: "nl",
      population: "863.202",
      link: "/amsterdam"
    },
    {
      id: 1,
      name: "Tokyo",
      country: "Japan",
      countrycode: "jp",
      population: "13.227.730",
      link: "/tokyo"
    },
    {
      id: 2,
      name: "Paris",
      country: "France",
      countrycode: "fr",
      population: "2.249.975",
      link: "/paris"
    }
  ]
});

export const mutations = {
    addLocation (state, location) {
      location.id = state.locations.length
      location.link = '/' + location.name
      state.locations.push(location)
    }
}

export const actions = {
  addLocation ({commit}, location) {
    commit('addLocation', location);
  }
}

export const getters = {
  getLocationById: (state) => (id) => {
    return state.locations.find(location => location.id == id)
  },
  getAllLocations: (state) => {
    return state.locations
  }
}