import * as bitcoin from "bitcoinjs-lib";
import * as bip39 from "bip39";
import { BIP32Factory } from "bip32";
import * as ecc from "tiny-secp256k1";

const bip32 = BIP32Factory(ecc);

export const getBitcoinAddresses = async (
  mnemonic: string,
  numberOfAddresses: number,
  networkType: "mainnet" | "testnet" = "mainnet"
) => {
  try {
    if (!bip39.validateMnemonic(mnemonic)) {
      throw new Error("Invalid mnemonic");
    }

    const seed = await bip39.mnemonicToSeed(mnemonic);

    // Select Bitcoin network (mainnet or testnet)
    const network =
      networkType === "mainnet"
        ? bitcoin.networks.bitcoin
        : bitcoin.networks.testnet;

    const root = bip32.fromSeed(seed, network);

    const addresses: string[] = [];

    for (let i = 0; i < numberOfAddresses; i++) {
      const path = `m/44'/0'/0'/0/${i}`;
      const child = root.derivePath(path);

      const { address } = bitcoin.payments.p2pkh({
        pubkey: child.publicKey,
        network,
      });

      if (address) {
        addresses.push(address);
      }
    }

    return addresses[0];
  } catch (error) {
    console.error("Error generating Bitcoin addresses:", error);
    return null;
  }
};