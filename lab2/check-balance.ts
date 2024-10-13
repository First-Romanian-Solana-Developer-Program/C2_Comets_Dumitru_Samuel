import "dotenv/config"
import {Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js"

import {airdropIfRequired} from "@solana-developers/helpers"
const connection = new Connection(clusterApiUrl("devnet"), "confirmed")

console.log("connected to devnet", connection.rpcEndpoint)

const samipublicKey = new PublicKey("9HccTUdELCnUP9fPpv2i9gNcx5JJeQnpAxkwkqXE9SvK")

const balanceInLamports = await connection.getBalance(samipublicKey);
console.log("sami balance: ", balanceInLamports)

console.log("airdrop 1 sol to sami....")

await airdropIfRequired(
    connection,
    samipublicKey,
    1*LAMPORTS_PER_SOL,
    1.5*LAMPORTS_PER_SOL,

);

console.log("airdrop done")

const balanceInLamports2 = await connection.getBalance(samipublicKey);
console.log("sami balance: ", balanceInLamports2)