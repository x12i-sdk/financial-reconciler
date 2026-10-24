# @x12i/financial-reconciler usage example

Balance and transaction reconciliation against external evidence.

This consuming application demonstrates **compare a synthetic book balance with matching external evidence** using the published npm package, pinned to `1.0.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Compare book balances and transactions with explicitly supplied external evidence.
- Inspect unmatched or ambiguous transactions without creating a journal automatically.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/financial-reconciler)
- [Implementation monorepo](https://github.com/x12i/finanfix)
- [Reviewed package source](https://github.com/x12i/finanfix/tree/8630e4c4f201deb35cd10c3790c9d5abdbce4633/packages/reconciler)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Synthetic input

All amounts, accounts, mappings and evidence in this example are synthetic. The example demonstrates the software API; it does not establish filing support or validate a real financial report. No external account or service is contacted.
