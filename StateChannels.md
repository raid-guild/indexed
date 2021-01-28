The following items should be included as headers in the markdown document (##).

This is the MIN information required, and you are encouraged to include as much information as you can track down.

Please include links to

StateChannels     (This is an actual platform offering sidechain services)
https://statechannels.org/?ref=block123

- [ ] Type:
<!-- What type of chain is this? (e.g.: EVM) -->
State Channel

- [ ] Transaction cost:
<!-- Give an average transaction cost gas-wise, for example saying how many transactions you can make with $0.01 or gas prices -->
Minimal - Not specified
state channels do off chain transaction processing and then upload single results to the chain.  this allows for many transactions to be processed by an offchain 
network and then uploaded to the chain as a single transaction or state

- [ ] Finality
<!-- How much time does it take to achieve finality in this chain? -->
essentially instant  https://blog.statechannels.org/instant-finality/

- [ ] Consensus:
<!-- what type of consensus mechanism is used? Such as Proof of Stake, Delegated Proof of Stake, etc. -->
State channel / consensus

- [ ] Capital Efficiency:
<!-- Is this chain capital efficient? (YES/NO) [link to explanation?] -->
Yes - is capable of off chain processing of transactions

- [ ] Max TPS:
<!-- Maximum  number of Transactions per second on this network -->
Not specified

- [ ] Additional info:
<!-- links to docs -->
Nitro Protocol White Paper   https://magmo.com/nitro-protocol.pdf

- [ ] Social media and community links:
<!-- links to reddit, discord, etc. -->
github https://github.com/statechannels

## Reviewer checklist

- [ ] The code follows the guidelines outlined in the Contribution Guide

## Developer checklist

- [ ] Please provide proof of participation within the service/project you are updating
- [ ] The code follows the guidelines outlined in the Contribution Guide
