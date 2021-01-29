---
id: arbitrum-doc
title: Arbitrum
sidebar_label: Arbitrum
---

### Links (Social)

[Twitter](https://twitter.com/offchainlabs?lang=en)

### Type

POS/plasma

### Tx Cost

gas = 30 gwei

Tx Fee = 0.00122 ETH

Uses ArbGas which is a variable calculation

### Finality

See 5.2 Iterated Hashing for [usenixsecurity18](https://www.usenix.org/system/files/conference/usenixsecurity18/sec18-kalodner.pdf)

TLDR:
using a 2013 Apple MacBook Pro, 2.7GHz Intel Core
i7

1.7 million hashes per second

### Consensus

consortium

##### "consensus-agnostic"

- Arbitrum uses and refers to consensus as 'verifiers' that assumes the existence of a consensus mechanism, including a...

  - single centralized publisher,
  - a quorum-based consensus system,
  - or Nakamoto consensus as used in Bitcoin

- Verifier: "global entity or distributed protocol"

### Efficency

Arbitrum’s VM architecture makes dispute resolution very efficient.

Even if parties behave counter to their incentives, Arbitrum verifiers can
efficiently adjudicate disputes about contract behavior
without needing to examine the execution of more than
one instruction by the contract.

### Max TPS

Up To 4,500 transactions per second

### Additional Info

- Compatible with Ethereum, Solidity Smart Contract code is comipled with Arbitrum
- Only verifies digital signatures instead of every part of the contract for the VM

### Sources

[usenix.org](https://www.usenix.org/conference/usenixsecurity18/presentation/kalodner)

[Forbes article](https://www.forbes.com/sites/forbes-personal-shopper/2021/01/13/the-best-planners-for-2021/?sh=6b46e6905255)

[Official Site](https://offchainlabs.com/)

[usenixsecurity18](https://www.usenix.org/system/files/conference/usenixsecurity18/sec18-kalodner.pdf)

[Offchainlabs dev docs](https://developer.offchainlabs.com/docs/rollup_basics)

[Offchainlabs white paper](https://offchainlabs.com/Arbitrum_Rollup_Whitepaper.pdf)

[How Arbitrum Channels Work](https://medium.com/offchainlabs/how-arbitrum-works-6eaccb47cd86#:~:text=Arbitrum%20deters%20misbehavior%20by%20requiring,it%20will%20forfeit%20its%20stake.)
