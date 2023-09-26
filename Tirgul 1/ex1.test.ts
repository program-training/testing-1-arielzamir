import { describe, expect, test } from "vitest";
import { getStringLength, toAscendingOrder } from "./ex1";
import { isPalindrome } from "./ex1";
import { sqrt } from "./ex1";
import { sumArray } from "./ex1";
import { fetchUserData } from "./ex1";
import { getNextNumberInFib } from "./ex1";

interface userData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phone: string;
  website: string;
  company: { name: string; catchPhrase: string; bs: string };
}

describe("ex1", () => {
  test("getStringLength", () => {
    //Arrange
    const str = "Hello";

    //Act
    const result = getStringLength(str);

    //Assert
    expect(result).toBe(5);
  });
  test("isPalindrome", () => {
    //Arrange
    const str = "5253";

    //Act
    const result = isPalindrome(str);

    //Assert
    expect(result).toEqual(false);
  });
  test("toAscendingOrder", () => {
    //Arrange
    const array = [3, 2, 4, 1];

    //Act
    const result = toAscendingOrder(array);

    //Assert
    expect(result).toEqual([1, 2, 3, 4]);
  });
  test("sqrt", () => {
    //Arrange
    const num = 9;

    //Act
    const result = sqrt(num);

    //Assert
    expect(result).toEqual(3);
  });
  test("sumArray", () => {
    //Arrange
    const array = [1, 2, 3, 4];

    //Act
    const result = sumArray(array);

    //Assert
    expect(result).toEqual(10);
  });
  test("sumArray", () => {
    //Arrange
    const array = [1, 2, 3, 4];

    //Act
    const result = sumArray(array);

    //Assert
    expect(result).toBeGreaterThan(9);
  });
  test("fetchUserData", async () => {
    //Arrange
    const userId = 1;
    const userData = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    };

    //Act
    const result: userData = await fetchUserData(userId);

    //Assert
    expect(result).toMatchObject(userData);
  });
  test("getNextNumberInFib", () => {
    //Arrange
    const fibArray = [1, 1, 2, 3, 5, 8];

    //Act
    const result = getNextNumberInFib(fibArray);

    //Assert
    expect(result).toBe(13);
  });
});
