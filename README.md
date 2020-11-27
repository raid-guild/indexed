# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Collaborate with us

We aim for indexed.eth to be a robust source for developers to utilize as a resource for research and development for Layer 2 solutions.

Members of included projects may submit a pull request containting additions and updates as pertinent. We encourage project members to update as often as possible!

[Github Repo](https://github.com/raid-guild/indexed)

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
