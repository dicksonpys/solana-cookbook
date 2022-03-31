const routes = await jupiter.computeRoutes({
    inputMint: new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'),
    outputMint: new PublicKey('Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB'),
    inputAmount: 1,
    slippage: 1.0,
    forceFetch: true,
})

const { execute } = await jupiter.exchange({
    routeInfo: routes!.routesInfos[0],
});

const swapResult = await execute();
console.log(`https://explorer.solana.com/tx/${swapResult.txid}`);
