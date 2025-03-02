/**
 * Formats a number into British Pounds currency format with 2 decimal places
 * @param amount - The number to format
 * @returns Formatted currency string with £ symbol and 2 decimal places
 * @example
 * formatCurrency(5.12) // Returns "£5.12"
 * formatCurrency(5.1) // Returns "£5.10"
 * formatCurrency(5) // Returns "£5.00"
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};


export const Fee = 2;