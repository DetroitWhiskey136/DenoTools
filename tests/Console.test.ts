import { Console, ConsoleColor } from '../mod.ts'
import { assertEquals } from "https://deno.land/std@0.202.0/assert/mod.ts";



Deno.test('Assert Write', () => {
  // should write the content to the output terminal.
  Console.Write('Hello ');
});

Deno.test('Assert WriteLine', () => {
  // should write the content to the output terminal as well as a new line character.
  Console.WriteLine('World!');
});

Deno.test('Assert Color Values', () => {
  // set the color of the text, (both foreground and background), should not see a change when set until the next call to write.
  Console.foregroundColor = ConsoleColor.Black;
  Console.backgroundColor = ConsoleColor.Cyan;
  assertEquals(Console.foregroundColor, 30);
  assertEquals(Console.backgroundColor, 46);
  Console.WriteLine('The background should be "Cyan", the foreground should be "Black"!');
  Console.ResetColor();
});


Deno.test('Assert ResetColor', () => {
  // This should return the color format to the default.
  Console.ResetColor();
  Console.WriteLine('This should not have any color changes any more!')
});


