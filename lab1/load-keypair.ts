import "dotenv/config";
import { getKeypairFromEnvironment} from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`Finish! public key is: ${keypair.publicKey.toBase58()}`)