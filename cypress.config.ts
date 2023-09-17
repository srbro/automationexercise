import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {},
    baseUrl: "https://automationexercise.com",
  },
});
