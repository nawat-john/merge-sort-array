# Merge Sorted Arrays

A TypeScript project that merges three sorted arrays
into one ascending array.

## Requirements

- Node.js >= 22.12
- npm

## Input

- collection_1: Ascending
- collection_2: Descending
- collection_3: Ascending

## Installation

```bash
npm install
```

## Run

```bash
npm start
```

## Unit Tests

```bash
npm test
```

## Example

```typescript
merge([1, 3, 5], [6, 4, 2], [0, 7, 8]);
```

Output:

```text
[0, 1, 2, 3, 4, 5, 6, 7, 8]
```

## Complexity

- Time: O(n1 + n2 + n3)
- Space: O(n1 + n2 + n3)
