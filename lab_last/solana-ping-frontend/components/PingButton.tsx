import { FC, useState } from "react";
import styles from "../styles/PingButton.module.css";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { connect } from "http2";
import * as web3 from "@solana/web3.js";

export const PingButton: FC = () => {
  const {connection} = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  
  const onClick = async () => {
    if(!connection || !publicKey) return;
  
    const programId = new web3.PublicKey(PROGRAM_ID);
    const programDataAccount = new web3.PublicKey(PROGRAM_DATA_ACCOUNT);
    const transaction = new web3.Transaction();
  
    const instruction = new web3.TransactionInstruction({
      keys: [
        { pubkey: programDataAccount,
          isSigner: false, 
          isWritable: true 
        }
      ],
      programId,
      
    });
  
    transaction.add(instruction);
    const signature = await sendTransaction(transaction, connection);
    console.log("Signature", signature);
  }

  return (
    <div className={styles.buttonContainer} onClick={onClick}>
      <button className={styles.button}>Ping!</button>
    </div>
  );


};


