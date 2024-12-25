# MongoDB $inc Operator Unexpected Behavior with Negative Increments

This repository demonstrates an uncommon error related to the `$inc` operator in MongoDB when using negative increments on fields that might not exist.

## Problem

The `$inc` operator in MongoDB is commonly used to increment numeric fields in documents. However, when using a negative increment on a field that does not exist, it might not behave as expected. Specifically, instead of creating the field and setting it to the negative value, the field remains unset.

## Solution

To correctly handle negative increments and ensure the field is created if it doesn't exist, it's recommended to combine `$inc` with other update operators, such as `$setOnInsert` within a conditional statement.

## Reproduction

1. Clone this repository.
2. Run the provided JavaScript script. It will attempt to decrement a counter field. If the field does not exist, you will see that the field is not set after the update.