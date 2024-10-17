import {getOrCreateAssociatedTokenAccount, transfer} from "@solana/spl-token"
import "dotenv/config"
import {getKeypairFromEnvironment, getExplorerLink } from "@solana-developers/helpers"

import {Connection,PublicKey, clusterApiUrl} from "@solana/web3.js"

const connection = new Connection(clusterApiUrl("devnet"),"confirmed")
const DECIMALS = 6
const user = getKeypairFromEnvironment("SECRET_KEY")
console.log(`usser account loaded ${user.publicKey.toBase58()}`)

const tokenMint = new PublicKey("3RAh5tKMuLLe8kZB5DtgQvmMneAHTqHdLsGyt7XRHPru")

//const sourceTokenAccount = new PublicKey("3RAh5tKMuLLe8kZB5DtgQvmMneAHTqHdLsGyt7XRHPru")
const destPubkey = new PublicKey("3X72u1TKjzn885P8xSsNkBUAx35eJdiJwFnjPVw5gQDj") // cheia publica a destinatarului cui vreau sa transmit token

const sourceTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    user,
    tokenMint,
    user.publicKey

);
console.log("source token address: ", sourceTokenAccount.address);

console.log("ammount available to send: ", sourceTokenAccount.amount);


const destTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    user,
    tokenMint,
    destPubkey

);
console.log("destination done or finded: ", destTokenAccount.address)

const signature = await transfer(
    connection,
    user,
    sourceTokenAccount.address,
    destTokenAccount.address,
    user,
    6*(10**DECIMALS)
);
//const destPubkey = new PublicKey("FgRv34GopxDVsu7rhgqK2jsmfP7yQ3HEyohSMgyVrGWL")

console.log("token sig", signature)