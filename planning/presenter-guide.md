# Presenter Guide

Commands in this guide assume you are already in the `hermes-workshop`
repository root.

## Start the slides

Start the Marp web server:

```bash
./node_modules/.bin/marp --server slides
```

Open the deck in a browser:

```bash
xdg-open http://localhost:8080/hermes-workshop.md
```

The server keeps running in the terminal. Stop it with `Ctrl-C` when you are
done presenting.

## Rebuild exported slides

The live browser view reads from `slides/hermes-workshop.md`. Rebuild
the exported HTML and PDF after editing the deck:

```bash
./node_modules/.bin/marp slides/hermes-workshop.md \
  --output dist/hermes-workshop.html

./node_modules/.bin/marp slides/hermes-workshop.md \
  --pdf \
  --allow-local-files \
  --output dist/hermes-workshop.pdf
```

## If the Marp CLI is missing

This repository currently has the Marp CLI installed at
`node_modules/.bin/marp`. If that file is missing on a fresh machine, install the
CLI first:

```bash
npm install --save-dev @marp-team/marp-cli
```
