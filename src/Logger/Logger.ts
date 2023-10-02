import { format } from "https://deno.land/std@0.203.0/datetime/format.ts";
import { Console, ConsoleColor } from '../../mod.ts';

/**
 * Basic Logger class for some nicely formated messages.
 * @class Logger
 */
export class Logger {
  /**
   * Creates a new timestamp then prints it to the console.
   * @memberof Logger
   */
  static #timestamp = () => {
    Console.foregroundColor = ConsoleColor.BrightBlack;
    Console.Write(format(new Date(), 'dd/MM/yyyy~hh:mm:ss a '));
    Console.ResetColor();
  }

  /**
   * Writes the provided content to the console with a timestamp and
   * a message type prefix.
   *
   * `LOG`
   * @static
   * @param {string} content Your string.
   * @memberof Logger
   */
  static log(content: string) {
    this.#timestamp();
    Console.foregroundColor = ConsoleColor.BrightGreen;
    Console.Write('LOG ');
    Console.ResetColor();
    Console.WriteLine(content);
  }


  /**
   * Writes the provided content to the console with a timestamp and
   * a message type prefix.
   *
   * `DEBUG`
   * @static
   * @param {string} content Your string.
   * @memberof Logger
   */
  static debug(content: string) {
    this.#timestamp();
    Console.foregroundColor = ConsoleColor.Cyan;
    Console.Write('DBG ');
    Console.ResetColor();
    Console.WriteLine(content);
  }

  /**
   * Writes the provided content to the console with a timestamp and
   * a message type prefix.
   *
   * `WARN`
   * @static
   * @param {string} content Your string.
   * @memberof Logger
   */
  static warn(content: string) {
    this.#timestamp();
    Console.foregroundColor = ConsoleColor.Yellow;
    Console.Write('WRN ');
    Console.ResetColor();
    Console.WriteLine(content);
  }

  /**
   * Writes the provided content to the console with a timestamp and
   * a message type prefix.
   *
   * `ERROR`
   * @static
   * @param {string} content Your string.
   * @memberof Logger
   */
  static error(content: string) {
    this.#timestamp();
    Console.foregroundColor = ConsoleColor.BrightRed;
    Console.Write('ERR ');
    Console.ResetColor();
    Console.WriteLine(content);
  }

  /**
   * Writes the provided content to the console with a timestamp and
   * a message type prefix.
   *
   * `INFO`
   * @static
   * @param {string} content Your string.
   * @memberof Logger
   */
  static info(content: string) {
    this.#timestamp();
    Console.foregroundColor = ConsoleColor.BrightBlue;
    Console.Write('IFO ');
    Console.ResetColor();
    Console.WriteLine(content);
  }
}
