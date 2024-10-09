import {Keypair} from "@solana/web3.js";

const keypair = Keypair.generate();

console.log('generated keypair');
console.log(`the public key is : `, keypair.publicKey.toBase58());
console.log(`the private key is : `, keypair.secretKey);
console.log('generated keypair');