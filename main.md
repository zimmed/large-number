# @zimmed/large-number

## About

Simple library for storing very large numbers with infinite floating point precision.

It uses the somewhat naive approach of using arrays of numbers where each number
element represents a power of 1000. It's not the most performant implementation,
but it's also not the worst.

## Installation

First, edit existing or create new `.npmrc` file in your project root, and add:

`@zimmed:registry=https://npm.pkg.github.com`

Then you can use:

`$ npm i --save @zimmed/large-number`

## Usage

```typescript
import * as LargeNumber from '@zimmed/large-number';

let x = LargeNumber.fromString('-1234567890987654321.123456789123456789123456789123456789');
let y = LargeNumber.fromNumber(2.3);
let z = LargeNumber.fromNumber(1, 2);

LargeNumber.inc(z, 1.01);
x = LargeNumber.sub(x, LargeNumber.fromString('-3e-3')); // ...1.123... -> ...1.126...
```

```typescript
console.log(LargeNumber.toString(x));
```

`-1234567890987654321.126456789123456789123456789123456789`

```typescript
console.log(LargeNumber.toString(z, '.', ','));
```

`1.000.001,01`

```typescript
console.log(LargeNumber.toString(LargeNumber.add(y, z)));
```

`1000003.31`

```typescript
console.log(LargeNumber.trunc(y));
```

_(This is an important test, as anyone who has ever used `x % 1` or `x - Math.trunc(x)`
knows, floating point precision will give you 0.299999...)_

`0.3`

## Docs

You can check out the generated API docs [here](globals.md)

## License: MIT

Copyright 2020 zimmed.io

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation file (the "Software"), to deal in the
Software without restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
