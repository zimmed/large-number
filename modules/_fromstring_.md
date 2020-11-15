**[large-number - v0.1.1](../README.md)**

> [Globals](../globals.md) / "fromString"

# Module: "fromString"

## Index

### Functions

* [fromString](_fromstring_.md#fromstring)

## Functions

### fromString

▸ **fromString**(`str`: string): [LargeNumber](../interfaces/_types_.largenumber.md)

*Defined in [fromString.ts:17](https://github.com/zimmed/large-number/blob/08a74e5/src/fromString.ts#L17)*

Creates a new large number from a number string (cannot have thousand-separators).

**`usage`** 
```typescript
import { fromString } from 'large-number';

let num = fromString('-1e25');
num = fromString('.0000000000000000000000000000000000000000000000001');
num = fromString('-425283.141526539');
```

#### Parameters:

Name | Type |
------ | ------ |
`str` | string |

**Returns:** [LargeNumber](../interfaces/_types_.largenumber.md)
