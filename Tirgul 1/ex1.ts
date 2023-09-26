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

export function getNextNumberInFib(array: Array<number>): number | undefined {
  try {
    for (let i = 2; i < array.length; i++) {
      if (array[i] !== array[i - 1] + array[i - 2]) {
        throw new Error("The array is not a Fibonacci sequence.");
      }
    }
    const num1 = array[array.length - 1];
    const num2 = array[array.length - 2];
    const nextNumber = num1 + num2;
    return nextNumber;
  } catch (error) {
    console.log(error);
  }
}
