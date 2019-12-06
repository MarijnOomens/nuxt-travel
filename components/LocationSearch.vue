<template>
  <div>
    <b-form @submit="findLocationById">
      <h4>Find location by id:</h4>
      <b-form-group>
        <b-form-input v-model="id" type="number" min="0" placeholder="Search location"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <hr />
    <p v-if="foundlocation">
      <b>Found:</b>
      {{ foundlocation.name }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      id: 0,
      foundlocation: ""
    };
  },
  methods: {
    findLocationById(evt) {
      evt.preventDefault();
      let found = this.$store.getters['locations/getLocationById'](this.id);
      if (found == null) {
        this.showMessage("No location found for that id");
        this.foundlocation = "";
      } else {
        this.foundlocation = found;
      }
    },
    showMessage(text) {
      this.$toasted.show(text, { theme: "bubble", duration: 1500 });
    }
  }
};
</script>