# What is this?
A drawing app built with Angular. Draw on a canvas with a limited selection of tools.

# How to build and deploy
If running on an ARM-based machine such as Apple M1:
1. Run `pnpm build:docker-arm64`
2. Run `pnpm run:docker-arm64`

Else, if running on an x86-based machine:
1. Run `pnpm build:docker-amd64`
2. Run `pnpm run:docker-amd64`

Once the Docker image is built and deployed, open a browser and go to `localhost:8080`

# How to build and serve locally:
Run `pnpm start`