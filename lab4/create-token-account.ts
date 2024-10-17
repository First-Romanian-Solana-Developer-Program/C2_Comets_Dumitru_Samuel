import {getOrCreateAssociatedTokenAccount} from "@solana/spl-token"
import "dotenv/config"
import {getKeypairFromEnvironment, getExplorerLink } from "@solana-developers/helpers"

import {Connection,PublicKey, clusterApiUrl} from "@solana/web3.js"

const connection = new Connection(clusterApiUrl("devnet"),"confirmed")
const DECIMALS = 6
const user = getKeypairFromEnvironment("SECRET_KEY")
console.log(`usser account loaded ${user.publicKey.toBase58()}`)

const tokenMint = new PublicKey("3RAh5tKMuLLe8kZB5DtgQvmMneAHTqHdLsGyt7XRHPru") // adresa la care sta tokenul
                                                                                // (informatii despre el)

                                                                                

const destPubkey = new PublicKey("3X72u1TKjzn885P8xSsNkBUAx35eJdiJwFnjPVw5gQDj") // tocken account with user.pubkey and mint

const destTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    user, // the owner of the token
    tokenMint,
    destPubkey // the addres of the owner of the token account 

)
console.log(`token account created: ${destTokenAccount.address.toBase58()}`)
