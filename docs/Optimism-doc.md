---
id: Optimism-doc
title: Optimism
sidebar_label: Optimism
---

### Description
Optimistic Rollups (ORs) are one type of layer 2 constructions that do not run on Ethereum's base layer but on top of it. 
This enables running smart contracts at scale while still being secured by Ethereum. These constructions resemble Plasma,
but trade the almost infinite scalability of Plasma to run an EVM compatible Virtual Machine called OVM (Optimistic Virtual Machine)
which enables ORs to run anything Ethereum can.

### Finality Time

Optimism block production is primarily managed by a single party, called the "sequencer," which helps the network by providing the following services:

1. Providing instant transaction confirmations and state updates.
2. Constructing and executing L2 blocks.
3. Submitting user transactions to L1.

The sequencer has no mempool and transactions are immediately accepted or rejected in the order they were received. 
When a user sends their transaction to the sequencer, the sequencer checks that the transaction is valid (i.e. pays a sufficient fee) and then applies the transaction to its local state as a pending block. 
These pending blocks are periodically submitted in large batches to Ethereum for finalization. This batching process significantly reduces overall transaction fees by spreading fixed costs over all of the 
transactions within a given batch. The sequencer also applies some basic compression techniques to minimize the amount of data published to Ethereum.


### Theoretical Max Transactions Per Second
2000 tps

### Measured Max Transactions Per Second
200 tps


### Consensus Mechanism
Optimism is an "Optimistic Rollup," which is basically just a fancy way of describing a blockchain that piggy-backs off of the security of another "parent" blockchain.
Specifically, Optimistic Rollups take advantage of the consensus mechanism (like PoW or PoS) of their parent chain instead of providing their own.
In Optimism's case this parent blockchain is Ethereum.


### Transactional Token
- What token is used to pay for gas on the chain?
Ether for the initial Optmism mainnet chains, although in principle a chain could be created with any ERC20 asset as the native token.


### Links
[Ethhub](https://docs.ethhub.io/ethereum-roadmap/layer-2-scaling/optimistic_rollups/) <br />
[Optimism](https://community.optimism.io/docs/how-optimism-works/#rollup-protocol)
