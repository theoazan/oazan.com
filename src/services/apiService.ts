// src/services/apiService.ts

export const fetchExchangeRate = async (): Promise<number> => {
    try {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      const data = await response.json();
      return data.rates.INR; // Returns the exchange rate for INR
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
      return 83.50; // Fallback rate in case of error
    }
  };
  