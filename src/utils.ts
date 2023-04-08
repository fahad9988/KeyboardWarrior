// utils.ts

// Generate a random string of characters with a given length
export function generateRandomString(length: number): string {
 const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
 let result = '';
 for (let i = 0; i < length; i++) {
   result += chars.charAt(Math.floor(Math.random() * chars.length));
 }
 return result;
}
