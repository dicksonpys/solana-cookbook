import { Connection, PublicKey } from "@solana/web3.js";
import fetch from "isomorphic-fetch";
import { Jupiter, TOKEN_LIST_URL } from "@jup-ag/core";

(async () => {
    const tokens = await (await fetch(TOKEN_LIST_URL['mainnet-beta'])).json(); // Fetch token list from Jupiter API
    const connection = new Connection('https://ssc-dao.genesysgo.net')
    const jupiter = await Jupiter.load({
        connection,
        cluster: 'mainnet-beta',
        user: '', // USER_PUBLIC_KEY
    });

    const routeMap = jupiter.getRouteMap();

    // If you know which input/output pair you want
    const inputToken = tokens.find((t) => t.address == 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'); // USDC Mint Info
    const outputToken = tokens.find((t) => t.address == 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB'); // USDT Mint Info

    const routes = await jupiter.computeRoutes({
        inputMint: new PublicKey(inputToken.address),
        outputMint: new PublicKey(outputToken.address),
        inputAmount: 1, // raw input amount of tokens
        slippage: 1.0, // 1%
        forceFetch: true,
    })

    const { execute } = await jupiter.exchange({
        routeInfo: routes!.routesInfos[0],
    });

    const swapResult = await execute();
    console.log(`https://explorer.solana.com/tx/${swapResult.txid}`);
})()