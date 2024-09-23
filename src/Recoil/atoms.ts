// src/Recoil/atoms.ts
import { atom } from "recoil";
import { SyncItem, Wallet } from "../Types";

export const walletsState = atom<Wallet[]>({
  key: "walletsState",
  default: [], // Default value for wallets
});

export const transactionsState = atom({
  key: "transactionsState",
  default: [], // Default value for transactions
});

export const syncQueueState = atom<SyncItem[]>({
  key: "syncQueueState",
  default: [], // Default value for sync queue
});

export const syncStatusState = atom({
  key: "syncStatusState",
  default: "Synced", // Default sync status
});
