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

export const CurrencySymbol = "£";
export const PROTECTION_FEE_PERCENTAGE = 0.05;

export function cardNumberFormatter(
  oldValue: string,
  newValue: string
): string {
  // user is deleting so return without formatting
  if (oldValue.length > newValue.length) {
    return newValue;
  }
  return newValue
    .replace(/\W/gi, "")
    .replace(/(.{4})/g, "$1 ")
    .substring(0, 19);
}

export function expirationDateFormatter(
  oldValue: string,
  newValue: string
): string {
  // If user is deleting, return without formatting
  if (oldValue.length > newValue.length) {
    return newValue;
  }

  // Remove any non-numeric characters
  newValue = newValue.replace(/\D/g, "");

  // Ensure the length does not exceed 4 characters
  if (newValue.length > 4) {
    newValue = newValue.substring(0, 4);
  }

  // Format the string as MM/YY
  if (newValue.length >= 4) {
    newValue = newValue.replace(/(\d{2})(\d{1,2})/, "$1/$2");
  }

  return newValue;
}
