import operate from '../logic/operate';

describe('operate', () => {
  it('should add two numbers', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });

  it('should subtract two numbers', () => {
    expect(operate(5, 3, '-')).toBe('2');
  });

  it('should multiply two numbers', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });

  it('should divide two numbers', () => {
    expect(operate(6, 2, '÷')).toBe('3');
  });

  it('should throw error when dividing by 0', () => {
    expect(operate(6, 0, '÷')).toBe("Can't divide by 0.");
  });

  it('should find modulo when dividing two numbers', () => {
    expect(operate(7, 3, '%')).toBe('1');
  });

  it('should throw error when finding modulo and dividing by 0', () => {
    expect(operate(7, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw error for unknown operation', () => {
    expect(() => operate(2, 3, '*')).toThrow("Unknown operation '*'");
  });

  it('should handle decimal addition', () => {
    expect(operate(0.1, 0.2, '+')).toBe('0.3');
  });

  it('should handle decimal subtraction', () => {
    expect(operate(0.3, 0.1, '-')).toBe('0.2');
  });

  it('should handle decimal multiplication', () => {
    expect(operate(0.1, 0.2, 'x')).toBe('0.02');
  });

  it('should handle decimal division', () => {
    expect(operate(0.1, 0.2, '÷')).toBe('0.5');
  });
});
