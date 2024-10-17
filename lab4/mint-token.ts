import {getOrCreateAssociatedTokenAccount, mintTo} from "@solana/spl-token"
import "dotenv/config"
import {getKeypairFromEnvironment, getExplorerLink } from "@solana-developers/helpers"

import {Connection, PublicKey,clusterApiUrl} from "@solana/web3.js"

const connection = new Connection(clusterApiUrl("devnet"),"confirmed")
const DECIMALS = 6
const AMOUNT = 59
const user = getKeypairFromEnvironment("SECRET_KEY")


const tokenMint = new PublicKey("3RAh5tKMuLLe8kZB5DtgQvmMneAHTqHdLsGyt7XRHPru") // adresa token
//const destTokenAccount = new PublicKey("42b2aQ78jZX8Xo6yvBZL7rjDeQVbqH4EzaKwhJDigj6w") // unde vreau sa trimit token creati(tokenaddres)

const destTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    user,
    tokenMint,
    user.publicKey

);



const sig = await mintTo(
    connection,
    user, 
    tokenMint,
    destTokenAccount.address,
    user,
    AMOUNT * (10**DECIMALS)

)




console.log(`tokens sent: ${sig}`)