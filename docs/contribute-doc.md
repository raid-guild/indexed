---
id: contribute-doc
title: Contribution Guide
sidebar_label: Contribution Guide
---

# 🌻 Help us grow! 🌻

## Collaborate with us

We aim for indexed.eth to be a robust source for developers to utilize as a resource for research and development for Layer 2 solutions.

## Keeping information up to date

### For Non-Developers

Please open a new issue in the [Github Repo](https://github.com/raid-guild/indexed).

Navigate to "Issues" in the top nav and click the green "New Issue" button.

Please include the information below if requesting to add a new service/chain:

- Tx cost ( average )
- Consensus
- Finality
- $ Efficiency
- Max TPS

Using the Ethereum mainnet as an example, the data would look something like:

```
Tx cost (average): $0.36 (29 gwei)
Consensus: Proof of work
Finality: Probablistic
Efficiency: Medium
Max TPS: 12.6
```

Feel free to include additional info and data.

### For Developers

[Github Repo](https://github.com/raid-guild/indexed)

Below you can find notes on the libraries we use for this project. Docusaurus follows a very simple pattern. If you only need to update the markdown file for a specific doc, simply create a PR and follow the instructions (there are only a few) in the PR template.

If you are creating a brand new doc page, follow the instructions for creating a new doc page on the [Docusaurus V2](https://v2.docusaurus.io/docs/) docs site.

## Docusaurus

We use [Docusaurus V2](https://v2.docusaurus.io/docs/), high level (and low level) docs can be found at their official site. We do not deviate from the "classic" template.

## React Libraries

We utilize the following react libraries:

- [react-modal](https://www.npmjs.com/package/react-modal)

- [react-data-table-component](https://www.npmjs.com/package/react-data-table-component)

## Doc Structure

All docs are written in markdown and can be found in the `docs/` directory.

Please update pertinent docs by creating a PR via the [official repo](https://github.com/raid-guild/indexed).

If creating a brand new doc page, please follow the naming and id conventions outlined in the docusaurus v2 docs, and make sure to include the new page in the `sidebars.js` file.

## Component Structure

Components not included in the "classic" docusaurus template can be found in `src/components/` and the accompanying css in `src/css/`.

## Data Structure

The data displayed within the `Hero` and `Table` compononents is derived from the json files in `src/data/`. If data is to be updated within these components simply updated the appropriate files.

## Run Locally

```
git clone https://github.com/raid-guild/indexed

cd indexed/

yarn install

yarn start
```
