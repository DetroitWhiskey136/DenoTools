import { Logger } from '../mod.ts'


Deno.test('Assert Log Test', () => {
  Logger.log('Hello World');
});

Deno.test('Assert Debug Test', () => {
  Logger.debug('Hello World');
});

Deno.test('Assert Warn Test', () => {
  Logger.warn('Hello World');
});

Deno.test('Assert Error Test', () => {
  Logger.error('Hello World');
});

Deno.test('Assert Info Test', () => {
  Logger.info('Hello World');
});

Deno.test('Assert Log Test / New Lines', () => {
  Logger.log('Hello World!\n\nHello Deno!');
})
