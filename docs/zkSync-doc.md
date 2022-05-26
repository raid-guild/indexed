---
id: zkSync-doc
title: zkSync
sidebar_label: zkSync
---

### Descriptipn

zkSync is a scaling and privacy engine for Ethereum. Its current functionality scope includes low gas transfers of ETH and ERC20 tokens in the Ethereum network,
atomic swaps & limit orders as well as native L2 NFT support. This is a high-level description of the zkSync development ecosystem.

zkSync is built on ZK Rollup architecture. ZK Rollup is an L2 scaling solution in which all funds are held by a smart contract on the mainchain, 
while computation and storage are performed off-chain. For every Rollup block, a state transition zero-knowledge proof (SNARK) is generated and verified 
by the mainchain contract. This SNARK includes the proof of the validity of every single transaction in the Rollup block. Additionally, the public data 
update for every block is published over the mainchain network in the cheap calldata.

This architecture provides the following guarantees:

1. The Rollup validator(s) can never corrupt the state or steal funds (unlike Sidechains).
2. Users can always retrieve the funds from the Rollup even if validator(s) stop cooperating because the data is available (unlike Plasma).
3. Thanks to validity proofs, neither users nor a single other trusted party needs to be online to monitor Rollup blocks in order to prevent fraud (unlike payment channels or Optimistic Rollups).

In other words, ZK Rollup strictly inherits the security guarantees of the underlying L1

### Capabilities

First of all, zkSync, as a scaling solution, is capable of making transfers, and doing them quick and cheap.
Secondly, zkSync is smart-contract friendly. Targeting 2021, it will be possible to either write contracts in Zinc, Rust-based type-safe programming language, or even reuse existing Solidity code. 
Thirdly, zkSync is friendly for exchanges. Atomic swaps — an essential component of exchange protocols — are already available on mainnet!
Fourthly, zkSync has native support of NFTs.
Finally, zkSync support is implemented for all the main platforms. 

### Theoretical Max Transactions Per Second

20000 tps

### Measured Max Transactions Per Second

2000 tps

### Transaction Costs/fees
- send token cost = $0.05
- swap token cost = $0.12

### Consensus Mechanism
-  It is achieved by introducing an independent consensus mechanism for block construction with two different roles: Validators and Guardians

### Transactional Token

- What token is used to pay for gas on the chain?
Transfers in zkSync support "gasless meta-transactions": users pay transaction fees in the tokens being transferred. Thus, for example, 
if you want to transfer DAI stable-coin, there is no need for you to own ETH or any other tokens. Just pay your fees in a fraction of DAI.

### Links

-[zkSync 2.0](https://v2.zksync.io/) <br />
-[zkSync Documentation](https://docs.zksync.io/userdocs/)
