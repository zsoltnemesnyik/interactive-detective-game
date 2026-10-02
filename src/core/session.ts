export const generateJoinCode = (): string => {
  // generate 5 characters randomly
  return Math.random().toString(36).substring(2, 7);
}