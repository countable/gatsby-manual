FROM node:12.10

RUN npm i -g gatsby-cli
RUN apt-get update && apt-get install -y libvips-dev --no-install-recommends

CMD ./command.sh

