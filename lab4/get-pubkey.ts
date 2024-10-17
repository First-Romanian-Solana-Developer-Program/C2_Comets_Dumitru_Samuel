import "dotenv/config";
import {getKeypairFromEnvironment} from "@solana-developers/helpers"

const user = await getKeypairFromEnvironment("SECRET_KEY");

console.log("my pub key: ", user.publicKey.toBase58())
