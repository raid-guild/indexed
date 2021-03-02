---
id: arbitrum-doc
title: Arbitrum
sidebar_label: Arbitrum
---

### Description

Arbitrum Rollup is an Optimistic Rollup layer 2 protocol that runs on top of Ethereum, supporting full Ethereum smart contract functionality. Arbitrum inherits security and censorship resistance from layer 1, and is trustelss and permissionless for both users and validators.

### Finality Time

In pure-rollup mode, Arbitrum inherits the same finality as Ethereum’s layer 1.

Alternatively, an Arbitrum chain can be created in “sequencer” mode, in which users can (if they wish) consider transactions finalized via semi-trusted promises from a permissioned entity; these promises can arrive faster than L1 blocks (likely within a few seconds).

### Theoretical Max Transactions Per Second

4500 tps

### Measured Max Transactions Per Second

600 tps

### Consensus Mechanism

Consensus on Arbitrum doesn’t require any security assumptions outside of those on L1 itself; disagreements between validators about the state of the Arbitrum chain (i.e., a “forks”) are resolved via an interactive fraud-proof verification game, the safety of which is directly enforced and guaranteed by L1.

### Transactional Token

- What token is used to pay for gas on the chain?

Ether for the initial Arbitrum mainnet chains, although in principle a chain could be created with any ERC20 asset as the native token.

### Links

[usenix.org](https://www.usenix.org/conference/usenixsecurity18/presentation/kalodner)

[Forbes article](https://www.forbes.com/sites/forbes-personal-shopper/2021/01/13/the-best-planners-for-2021/?sh=6b46e6905255)

[Official Site](https://offchainlabs.com/)

[usenixsecurity18](https://www.usenix.org/system/files/conference/usenixsecurity18/sec18-kalodner.pdf)

[Offchainlabs dev docs](https://developer.offchainlabs.com/docs/rollup_basics)

[Offchainlabs white paper](https://offchainlabs.com/Arbitrum_Rollup_Whitepaper.pdf)

[How Arbitrum Channels Work](https://medium.com/offchainlabs/how-arbitrum-works-6eaccb47cd86#:~:text=Arbitrum%20deters%20misbehavior%20by%20requiring,it%20will%20forfeit%20its%20stake.)
