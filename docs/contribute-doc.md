---
id: contribute-doc
title: Contribution Guide
sidebar_label: Contribution Guide
---

## Collaborate with us

We aim for indexed.eth to be a robust source for research and development for Layer 2 solutions.

Please provide at least the minimum data specified below, feel free to include as much information as you please if you think it would be useful for developers!

## Keeping information up to date

Please open a new issue in the [Github Repo](https://github.com/raid-guild/indexed).

Navigate to "Issues" in the top nav and click the green "New Issue" button.

Please include the information below if requesting to add a new service/chain. This will be used to populate the homepage table.

- Tx cost ( average )
- Consensus
- Finality
- Max TPS

Using the Ethereum mainnet as an example, the data would look something like:

```
Tx cost (average): $0.36 (29 gwei)
Consensus: Proof of work
Finality: Probablistic
Max TPS: 12.6
```

Feel free to include additional info and data. The more the better!

## Run Locally

```
git clone https://github.com/raid-guild/indexed

cd indexed/

yarn install

yarn start
```
