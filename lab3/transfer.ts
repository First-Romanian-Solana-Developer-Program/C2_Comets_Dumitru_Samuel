import "dotenv/config"
import {getKeypairFromEnvironment } from "@solana-developers/helpers";
import {
    LAMPORTS_PER_SOL,
    PublicKey,
    Transaction,
    clusterApiUrl,
    Connection,
    sendAndConfirmTransaction,
    SystemProgram,
} from "@solana/web3.js";
import {createMemoInstruction} from '@solana/spl-memo';


const sender = getKeypairFromEnvironment("SECRET_KEY");
const connection = new Connection(clusterApiUrl("devnet"));
console.log("sender pub key: ", sender.publicKey.toString());
const receiver = new PublicKey("H5bKPaTjsx3Ug2ELXRYfbkPRtct4p11Kk4v1rgzjymq7");
const transaction = new Transaction();
const amount = 0.1;
const transferInstruction = SystemProgram.transfer({
    fromPubkey: sender.publicKey,
    toPubkey: receiver,
    lamports: LAMPORTS_PER_SOL * amount

});

transaction.add(transferInstruction);

const createMemo = createMemoInstruction("hello world")
transaction.add(createMemo);

const signiture = await sendAndConfirmTransaction(connection,transaction,[sender]);
console.log("transactions done: " ,signiture);
