**[large-number - v0.1.4](../README.md)**

> [Globals](../globals.md) / "shift"

# Module: "shift"

## Index

### Functions

* [shift](_shift_.md#shift)

## Functions

### shift

▸ **shift**(`ln`: [LargeNumber](../interfaces/_types_.largenumber.md), `cols?`: number): [LargeNumber](../interfaces/_types_.largenumber.md)

*Defined in [shift.ts:11](https://github.com/zimmed/large-number/blob/82e5210/src/shift.ts#L11)*

Shift the `LargeNumber` by the specified power of 10.

*Mutates argument*

_Works like a bitshift operation, but base10 instead of base2._

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`ln` | [LargeNumber](../interfaces/_types_.largenumber.md) | - |
`cols` | number | 3 |

**Returns:** [LargeNumber](../interfaces/_types_.largenumber.md)
