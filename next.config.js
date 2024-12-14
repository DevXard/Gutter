/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
    images: {
        domains: ["t4.ftcdn.net", "encrypted-tbn0.gstatic.com", "thumbs.dreamstime.com"],
    },
};

export default config;
