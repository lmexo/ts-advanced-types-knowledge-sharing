/**
 * Simple string literal union type
 */
export type OperationMode = 'default' | 'extended';

/**
 * Task 1.1: Derive "OperationModeDefault" and "OperationModeExtended" from OperationMode
 * @see https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#intrinsic-string-manipulation-types
 */
// type CapitalizedOperationMode = ...

/**
 * Task 1.2: Create an imperative type which obtains `somemode` from `OperationModeSomeMode` (i.e. reverts `CapitalizedOperationMode`)
 * Hint: Use extends ... infer syntax
 * @see https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#inference-with-template-literals
 */
// type InferOperationMode<T> ...

/**
 * Task 1.3: Use InferOperationMode<T> to
 *  * infer the normal operation modes from CapitalizedOperationMode and
 *  * add another operation mode which is inferred
 */
//type InferredOperationMode =
