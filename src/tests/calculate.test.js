import calculate from '../logic/calculate';

describe('calculate', () => {
  test('AC button', () => {
    const result = calculate({ total: '1', next: '2', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  test('Number button', () => {
    const result = calculate({ total: '1', next: '2', operation: '+' }, '3');
    expect(result).toEqual({ total: '1', next: '23', operation: '+' });
  });

  test('Decimal button', () => {
    const result = calculate({ total: '1', next: '2', operation: '+' }, '.');
    expect(result).toEqual({ total: '1', next: '2.', operation: '+' });
  });

  test('Equals button', () => {
    const result = calculate({ total: '1', next: '2', operation: '+' }, '=');
    expect(result).toEqual({ total: '3', next: null, operation: null });
  });

  test('Plus/minus button', () => {
    const result = calculate({ total: null, next: '2', operation: null }, '+/-');
    expect(result).toEqual({ total: null, next: '-2', operation: null });
  });

  test('Operation button', () => {
    const result = calculate({ total: '1', next: '2', operation: '+' }, '-');
    expect(result).toEqual({ total: '3', next: null, operation: '-' });
  });
});