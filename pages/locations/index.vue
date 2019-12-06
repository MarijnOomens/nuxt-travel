<template>
  <div>
    <h2>Locations</h2>
    <b-table striped hover :items="locations" :fields="fields">
      <template slot="[link]" slot-scope="data">
        <a v-if="data.value != ''" :href="'/locations' + data.value">Link</a>
      </template>
    </b-table>
    <location-search />
  </div>
</template>

<script>
import LocationSearch from "~/components/LocationSearch.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    LocationSearch
  },
  data() {
    return {
      fields: ["name", "country", "population", "link"]
    };
  },
  computed: {
    ...mapGetters({
      locations: "locations/getAllLocations"})
  }
};
</script>