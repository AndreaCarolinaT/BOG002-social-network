import { signUpSave, signInSave } from "../src/lib/firebaseAuth";

const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockAuthentication();
const mocksdk = new firebasemock.MockFirebaseSdk(
  () => {
    return null;
  },
  () => {
    return mockauth;

  },
);
mockauth.autoFlush();
global.firebase = mocksdk;
jest.spyOn(window, "alert").mockImplementation(() => { });

describe("registro usuario", () => {
  it("debería ser una función", () => {
    expect(typeof signUpSave).toBe("function");
  });
  it("debería registrar usuario", async () => {
    const userInfo = await signUpSave("hola@hotmail.com", "12345678");
    expect(userInfo.email).toBe("hola@hotmail.com");
  });
});



describe("login usuario", () => {
  it("debería ser una función", () => {
    expect(typeof signInSave).toBe("function");
  });
  it("debería loguear usuario", async () => {
    const userInfo = await signInSave("hola@hotmail.com", "12345678");
    expect(typeof userInfo).toBe("object");
    expect(userInfo.email).toBe("hola@hotmail.com");
  });
});