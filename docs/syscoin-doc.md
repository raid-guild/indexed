---
id: syscoin-doc
title: Syscoin
sidebar_label: Syscoin
---

## Type

Stand-alone blockchain protocol with 2-way bridge for ERC-20 tokens and with ability to create custom blockchain-based tokens.

## Tx Cost

0.0000582 SYS (0.00000464 USD as of 2021/01/15) for simple transaction ([source](https://syscoin.org/fees/)).

## Finality

10 seconds on first layer.
1 minute on second layer which ensures confirmation and conflict resolution.

## Consensus

Syscoin has two consensus layers. In the first layer, Z-DAG (Zero-Confirmation Directed Acyclic Graph) is used to arrange transactions in order before being written to the blockchain. The second layer – Masternode – uses hybrid PoW/PoS model to confirm transactions, resolve conflicts and prevent double-spending.

## $ Efficient

YES.
Record 60158 TPS was achieved with only 24 masternodes ([source](https://syscoin.org/news/z-dag-performance-analysishttps://syscoin.org/news/z-dag-performance-analysis)). Low-end to mid-range HW is recommended for masternodes.

## Max TPS

~61000 TPS across a worldwide network ([source](https://whiteblock.io/wp-content/uploads/2019/07/ZDAG-Analysis.pdf)).
