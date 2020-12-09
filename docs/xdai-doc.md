---
id: xdai-doc
title: XDAI
sidebar_label: XDAI
---

## Tx Cost

1 Gwei with stable currency. For a simple tx with a 21000 gas limit this = .000021 cents per tx

## Finality

Time to finality varies on the number of validators (f) and is reached at 2f+1≤n, so that any faulty nodes cannot finalize a block all on their own.

## Consensus

Currently a nominated proof-of-stake protocol which uses AuRa for block signing. Transitioning shortly to public delegated Proof-of-Stake called POSDAO. https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3368483

## $ Efficient

Energy Efficiency: https://www.xdaichain.com/about-xdai/news-and-information/xdai-energy-efficiency#energy-consumption-statistics

## Max TPS

5 second blocks with ~70 transactions per second, which aligns with current transactional volume requirements. Gas limits purposefully match Ethereum block limits (12.5M gas per block), and as needs increase, xDai is built to scale with those requirements. In article above Artis reports xDai at ~119 TPS as the absolute max capacity with simple Txs.
