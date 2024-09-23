import React from "react";

const WalletList = React.lazy(() => import("../Pages/WalletList"));
const Transactions = React.lazy(() => import("../Pages/Transactions"));

const navRoutes = [
  {
    path: "walletlist",
    component: WalletList,
  },
  {
    path: "transactions",
    component: Transactions,
  },
];

export default navRoutes;
