---
title: Jupiter
head:
  - - meta
    - name: title
      content: Solana Cookbook | Jupiter helps you access to the widest range of tokens and best route discovery between any token pair.  
  - - meta
    - name: og:title
      content: Solana Cookbook | Jupiter helps you access to the widest range of tokens and best route discovery between any token pair.  
  - - meta
    - name: description
      content: Jupiter | is the key liquidity aggregator for Solana, offering the widest range of tokens and best route discovery between any token pair. 
  - - meta
    - name: og:description
      content: Jupiter | is the key liquidity aggregator for Solana, offering the widest range of tokens and best route discovery between any token pair. 
  - - meta
    - name: og:image
      content: https://solanacookbook.com/cookbook-sharing-card.png
  - - meta
    - name: og:image:alt
      content: Solana splash card
  - - meta
    - name: twitter:card
      content: summary
  - - meta
    - name: twitter:site
      content: "@solanacookbook"
  - - meta
    - name: twitter:image
      content: "https://solanacookbook.com/cookbook-sharing-card.png"
  - - meta
    - name: robots
      content: index,follow,noodp
  - - meta
    - name: googlebot
      content: index,follow
---

# Jupiter (https://jup.ag)

[Jupiter](https://jup.ag) is the key liquidity aggregator for Solana, offering the widest range of tokens and best route discovery between any token pair. 

Checkout our [Complete guide](https://docs.jup.ag/) here.

## How to Swap
<SolanaCodeGroup>
  <SolanaCodeGroupItem title="TS" active>

  <template v-slot:default>

@[code](@/code/jupiter/core/how-to-swap.ts)

  </template>

  <template v-slot:preview>

@[code](@/code/jupiter/core/how-to-swap.preview.en.ts)

  </template>

  </SolanaCodeGroupItem>

</SolanaCodeGroup>

## Why Jupiter?
Integrate with Jupiter in order to:
- Offer best price swaps for your users
- Automatically stay up to date with the latest tokens and liquidity sources
- Make swaps a revenue source by adding your own platform fee to the transaction 
- Set caching options to make your swap as speedy or as precise you wish.

## Program Address
Our Jupiter V2 program address is `JUP2jxvXaqu7NQY1GmNF4m1vodw12LVXYxbFL2uJvfo`.

## Available SDKs
Currently, we provide the following sdks:

- Jupiter Core Library  [NPM](https://www.npmjs.com/package/@jup-ag/core). Use this to build your own custom frontend or bot.
- Jupiter React-Hook [NPM](https://www.npmjs.com/package/@jup-ag/react-hook). Use this to add the same jup.ag frontend to your frontend.
APIs and on-chain program support coming soon.
- [Jupiter API](https://docs.jup.ag/jupiter-api/swap-api-for-solana). The easiest way for developers to access liquidity on Solana
- Checkout our [complete guide here](https://docs.jup.ag/)
