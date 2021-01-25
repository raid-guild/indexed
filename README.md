## Collaborate with us

We aim for indexed.eth to be a robust source for developers to utilize as a resource for research and development for Layer 2 solutions.

## Submit an Issue or PR to keep information up to date

Please open a new issue in the [Github Repo](https://github.com/raid-guild/indexed).

OR

Fork this repo, create a new branch and submit a PR:

```
Fork the repo in githhub
git clone <your-forked-repo>
cd indexed
git checkout -b <your-branch-name>
```

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

Feel free to include additional info and data!!!

## Dev Stuff

### React Libraries

We utilize the following react libraries:

- [react-modal](https://www.npmjs.com/package/react-modal)

- [react-data-table-component](https://www.npmjs.com/package/react-data-table-component)

### Doc Structure

All docs are written in markdown and can be found in the `docs/` directory.

Please update pertinent docs by creating a PR via the [official repo](https://github.com/raid-guild/indexed).

If creating a brand new doc page, please follow the naming and id conventions outlined in the docusaurus v2 docs, and make sure to include the new page in the `sidebars.js` file.

### Component Structure

Components not included in the "classic" docusaurus template can be found in `src/components/` and the accompanying css in `src/css/`.

### Data Structure

The data displayed within the `Hero` and `Table` compononents is derived from the json files in `src/data/`. If data is to be updated within these components simply updated the appropriate files.

### Run Locally

```
git clone https://github.com/raid-guild/indexed

cd indexed/

yarn install

yarn start
```
