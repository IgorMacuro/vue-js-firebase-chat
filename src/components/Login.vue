<template>
  <aside class="section">
    <h3>Sign in anonymously</h3>
    <button class="button" @click="auth.signInAnonymously()">Sign in</button>

    <div v-if="newUser">
      <h3>Sign up for a new account</h3>
      <a href="#" @click="newUser = false">Returning user?</a>
    </div>
    <div v-else>
      <h3>Sign in with email</h3>
      <a href="#" @click="newUser = true"></a>
    </div>

    <label for="email"> Email</label><br />
    <input v-model="email" placeholder="email" type="email" class="input" />
    <label for="password"> Password</label><br />
    <input v-model="password" type="password" class="input" />
    <br />
    <button
      class="button is-info"
      :class="{ 'is-loading': loading }"
      @click="signInOrCreateUser()"
    >
      {{ newUser ? "Sign up" : "Login" }}
    </button>


    <p class="has-text-danger" v-if="errorMessage"> {{ errorMessage }}</p>

  </aside>
</template>

<script>
import { auth } from "../firebase";

export default {
  data() {
    return {
      auth,
      newUser: true,
      email: "",
      password: "",
      loading: false,
      errorMessage: "",
    };
  },
  methods: {
    async signInOrCreateUser() {
      this.loading = true;
      this.errorMessage = "";
      try {
        if (this.newUser) {
          await auth.createUserWithEmailAndPassword(this.email, this.password);
        } else {
          await auth.signInWithEmailAndPassword(this.email, this.password);
        }
      } catch (err) {
        this.errorMessage = err.message;
      }
      this.loading = false;
    },
  },
};
</script>
