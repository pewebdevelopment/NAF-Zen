const cwd = process.cwd();

import { defineNuxtPlugin } from "#app";
import { Amplify, Auth } from "aws-amplify";
import awsmobile from cwd + "/aws-exports";

// aws-exports should be dynamically generated

export default defineNuxtPlugin((nuxtApp) => {
  Amplify.configure(awsmobile);

  return {
    provide: {
      auth: Auth,
    },
  };
});
