<template>
  <div>
    <h2>Users</h2>
    <b-table striped hover :items="users">
    </b-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      users: 'users/getUsers'
    })
  },
  async fetch({ store }) {
    await store.dispatch('users/FETCH_USERS');
  }
};
</script>