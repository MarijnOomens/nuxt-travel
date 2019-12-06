<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="Name:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.name" type="text" required placeholder="Name"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Country:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.country"
          type="text"
          required
          placeholder="Country"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Population:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.population"
          type="text"
          required
          placeholder="Population"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        country: "",
        population: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$store.commit('locations/addLocation', this.form)
      this.$router.push('/locations')
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.name = "";
      this.form.country = "";
      this.form.population = "";
    }
  }
};
</script>