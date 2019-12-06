<template>
  <div>
    <h1>{{ capitalLetter }}</h1>
    <i class="fas fa-adjust"></i>
    <p>Temperature: {{ temp }}</p>
    <b-img
      :src="'https://source.unsplash.com/1920x1080/?' + cityName "
      fluid-grow
      alt="City photo"
    />
    <hr />
    <div>
      <p>{{ baseball }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    //await this.$api.getWeather('eindhoven');
  },
  async asyncData({ route }) {
    // app.$helloWorld();

    let cityName = route.params.city;

    // Weather data from openweathermap
    let resultPromise;
    try {
      resultPromise = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6efc35c3c2611e414ea66da76b2e3f0b&units=metric`
      );
    } catch (e) {
      console.log(e);
      resultPromise = "Not found";
    }

    const baseballIpsumPromise = await axios.get(
      `http://baseballipsum.apphb.com/api/?paras=20`
    );

    const [result, ipsum] = await Promise.all([
      resultPromise,
      baseballIpsumPromise
    ]);

    let baseball = ipsum.data[0];

    if (result != "Not found") {
      return {
        temp: result.data.main.temp + '°C',
        cityName,
        baseball
      };
    } else {
      return {
        temp: result,
        cityName,
        baseball
      };
    }
  },
  computed: {
    capitalLetter: function() {
      return this.cityName.charAt(0).toUpperCase() + this.cityName.slice(1);
    }
  }
};
</script>