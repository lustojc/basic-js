import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    let keystream = key
      .repeat(Math.ceil(message.length / key.length))
      .slice(0, message.length)
      .toUpperCase();
    let result = "";
    message = message.toUpperCase();

    for (let i = 0, j = 0; i < message.length; i++) {
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) {
        result += message[i];
        continue;
      }
      result += String.fromCharCode(
        ((message.charCodeAt(i) + keystream.charCodeAt(j) - 130) % 26) + 65
      );
      j++;
    }

    return this.type ? result : result.split("").reverse().join("");
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    let keystream = key
      .repeat(Math.ceil(message.length / key.length))
      .slice(0, message.length)
      .toUpperCase();
    let result = "";
    message = message.toUpperCase();

    for (let i = 0, j = 0; i < message.length; i++) {
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) {
        result += message[i];
        continue;
      }
      result += String.fromCharCode(
        ((message.charCodeAt(i) - keystream.charCodeAt(j) + 26) % 26) + 65
      );
      j++;
    }

    return this.type ? result : result.split("").reverse().join("");
  }
}
