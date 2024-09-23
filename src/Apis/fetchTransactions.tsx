import axios from "axios";

const fetchTransactions = async (walletAddress: string) => {
  try {
    if (walletAddress) {
      const API_KEY = process.env.REACT_APP_BLOCKCYPHER_API_KEY;
      const response = await axios.get(
        `https://api.blockcypher.com/v1/btc/test3/addrs/${walletAddress}/full?token=${API_KEY}`
      );
      if (response) return response;
    }
  } catch (error) {
    console.error("Failed to import wallet:", error);
  }
};

export default fetchTransactions;
