export function numberWithCommas(number: number): string {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function calculateDiscount(number: number, discount: number): number {
  return parseFloat((number - (number * (discount / 100))).toFixed(2));
}

export function fixedNumber(number: number): number {
  return parseFloat(number.toFixed(2));
}