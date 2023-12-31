import { ConsoleColor, DefaultColor, RestColor } from './ConsoleColor.ts';

type PrivateConsoleColor = number | ConsoleColor;

/**
 * I got tired of having to rewrite this every time i wanted my own console format.. this is a heavy WIP. Its really nothing compared to my other console class where ever that went, if you see it let me know. 😛
 *
 * @class Console
 */
export class Console {
  static #foregroundColor: PrivateConsoleColor;
  static #backgroundColor: PrivateConsoleColor;

  /**
   * Inialized the default colors for some reason 😊.
   */
  static #setDefaultColor = () => {
    this.#backgroundColor = DefaultColor+10;
    this.#foregroundColor = DefaultColor;
  }

  static #initializeColor = this.#setDefaultColor();

  /**
   * Gets/Sets the foreground color
   */
  static get foregroundColor() {
    return this.#foregroundColor;
  }

  static set foregroundColor(color: ConsoleColor) {
    this.#foregroundColor = color;
  }

  /**
   * Gets/Sets the background color
   */
  static get backgroundColor() {
    return this.#backgroundColor;
  }

  static set backgroundColor(color: ConsoleColor) {
    this.#backgroundColor = color+10
  }



  /**
   * This is the internal writer. if you see this you did a bad.
   * @param content a string of characters.
   */
  static #write = (...content: string[]) => {
    Deno.writeSync(Deno.stdout.rid, new TextEncoder().encode(...content));
  }

  /**
   * Resets the console colors
   */
  static ResetColor() {
    this.#write(`\x1b[${RestColor}m`);
    this.#setDefaultColor();
  }

  /**
   * Writes the console.
   * @param content a string of characters.
   */
  static Write(...content: string[]) {
    this.#write(`\x1b[${this.#foregroundColor};${this.#backgroundColor}m`)
      this.#write(...content);
      this.#write(`\x1b[${RestColor}m`);
  }

  /**
   * Writes the console and prints a new line at the end.
   * @param content a string of characters.
   */
  static WriteLine(...content: string[]) {
    this.Write(...content);
    this.Write('\n');
  }

}
