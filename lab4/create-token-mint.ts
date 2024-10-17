import {createMint} from "@solana/spl-token"
import "dotenv/config"
import {getKeypairFromEnvironment, getExplorerLink } from "@solana-developers/helpers"

import {Connection, clusterApiUrl} from "@solana/web3.js"

const connection = new Connection(clusterApiUrl("devnet"),"confirmed")
const DECIMALS = 6
const user = getKeypairFromEnvironment("SECRET_KEY")
console.log(`usser account loaded ${user.publicKey.toBase58()}`)

const tokenMint = await createMint(
    connection,
    user,
    user.publicKey,
    null,
    DECIMALS
);
const link = getExplorerLink("address", tokenMint.toBase58(), "devnet");

console.log(`token mint created: ${link}`)