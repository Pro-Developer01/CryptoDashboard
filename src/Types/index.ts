export interface Wallet {
  id: string;
  name: string;
  address: string;
  balance: number;
}

export interface Transaction {
  txid?: string;
  amount?: number;
  confirmations?: number;
  time?: string;
  wallet?: string;
  result?: string;
  status?: string;
}

export interface SyncItem {
  type: "balance" | "history";
  walletId: string;
}

export interface RootState {
  wallets: Wallet[];
  transactions: Transaction[];
  syncQueue: SyncItem[];
  syncStatus: "Syncing" | "Synced";
}
