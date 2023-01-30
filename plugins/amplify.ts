import { defineNuxtPlugin } from "#app";
import { Auth } from "aws-amplify";

// New format of the amplify.ts file

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$auth = Auth;
});
