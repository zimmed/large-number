**[large-number - v0.1.5](../README.md)**

> [Globals](../globals.md) / "fromNumber"

# Module: "fromNumber"

## Index

### Functions

* [fromNumber](_fromnumber_.md#fromnumber)

## Functions

### fromNumber

▸ **fromNumber**(`num`: number, `bucketUnits?`: number): [LargeNumber](../interfaces/_types_.largenumber.md)

*Defined in [fromNumber.ts:11](https://github.com/zimmed/large-number/blob/6505d78/src/fromNumber.ts#L11)*

Creates a new `LargeNumber` from a `number` value, starting at the specified bucket (power of 1000).

_Note: Can only maintain accuracy as far as floating point precision allows. If large number accuracy
is needed, use `fromString`._

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`num` | number | - |
`bucketUnits` | number | 0 |

**Returns:** [LargeNumber](../interfaces/_types_.largenumber.md)
