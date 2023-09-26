export function getStringLength(str: string) {
  return str.length;
}

export function isPalindrome(str: string): boolean {
  if (str.length === 1) {
    return true;
  }

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

export function toAscendingOrder(array: Array<number>): Array<number> {
  return array.sort((a, b) => a - b);
}

export function sqrt(num: number): number {
  if (num < 0) {
    throw new Error("Cannot calculate square root of a negative number");
  }
  return Math.sqrt(num);
}

export function sumArray(array: Array<number>): number {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

export async function fetchUserData(userId: number) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch user data.");
    }

    const userData = await response.json();
    console.log(userData);
    return userData;
  } catch (error) {
    throw new Error(`Error fetching user data ${userId}`);
  }
}
