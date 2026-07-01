# Presenter Guide

Commands in this guide assume you are in the repository root:

```bash
cd /home/chris/git/linuxfest-hermes-workshop
```

## Start the slides

Start the Marp web server:

```bash
./node_modules/.bin/marp --server slides
```

Open the deck in a browser:

```bash
xdg-open http://localhost:8080/linuxfest-hermes-workshop.md
```

The server keeps running in the terminal. Stop it with `Ctrl-C` when you are
done presenting.

## Rebuild exported slides

The live browser view reads from `slides/linuxfest-hermes-workshop.md`. Rebuild
the exported HTML and PDF after editing the deck:

```bash
./node_modules/.bin/marp slides/linuxfest-hermes-workshop.md \
  --output dist/linuxfest-hermes-workshop.html

./node_modules/.bin/marp slides/linuxfest-hermes-workshop.md \
  --pdf \
  --allow-local-files \
  --output dist/linuxfest-hermes-workshop.pdf
```

## If the Marp CLI is missing

This repository currently has the Marp CLI installed at
`node_modules/.bin/marp`. If that file is missing on a fresh machine, install the
CLI first:

```bash
npm install --save-dev @marp-team/marp-cli
```
