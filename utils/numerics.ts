export const shorter = (number: number): string => {
  let result = number.toString()
  if (number > 1000) {
    result = `${Math.round(number / 1000)}k`
  }
  return result
}
