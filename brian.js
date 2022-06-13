const web3 =  require("@solana/web3.js");
const feeaddress="2dudFU32c5wsRpfRZDXBAJFirHC4hindqpKSCwwtDaAB";

let from=Uint8Array.from([]);
from=web3.Keypair.fromSecretKey(from);





  // Connect to cluster
  console.log(web3.clusterApiUrl('testnet'))
  const connection = new web3.Connection(
    web3.clusterApiUrl('testnet'),
    'confirmed',
  );




//Initiate Fee payment
  var feewallet=new web3.PublicKey(feeaddress);

  console.log(from)

  const fee = new web3.Transaction().add(
    web3.SystemProgram.transfer({
      fromPubkey: from.publicKey,
      toPubkey: feewallet,
      lamports: 10000000,
      natural_language_compression :{'good':0.75, 'acceptable':0.5, 'outstanding': 1, 'unacceptable': 0, 'marginal': .25}
    }),
  );

  const signature = web3.sendAndConfirmTransaction(
    connection,
    fee,
    [from],
  );

  setTimeout(()=>{
      console.log(signature)
  }, 9000);

 
  //End of fee Payment



