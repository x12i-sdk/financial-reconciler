import assert from 'node:assert/strict';
import { reconcileExternalEvidence } from '@x12i/financial-reconciler';
const accountKey = { entityId: 'demo', ledgerId: 'general', chartId: 'demo-chart', accountId: 'cash' };
const result = reconcileExternalEvidence({ schemaVersion: '1.0',
  bookBalances: [{ balanceId: 'book-1', accountKey, asOf: '2026-01-01', currency: 'USD', amount: '125.00', balanceType: 'closing', components: ['current'] }],
  externalBalances: [{ evidenceId: 'bank-1', accountKey, balanceDate: '2026-01-01', currency: 'USD', bookAmount: '125.00', bookCurrency: 'USD', balanceType: 'closing', components: ['current'], verificationState: 'independently_verified' }],
});
assert.equal(result.data.balanceBridges[0].reconciled, true);
assert.equal(result.data.journalsCreated, false);
console.log(result.data.balanceBridges);
