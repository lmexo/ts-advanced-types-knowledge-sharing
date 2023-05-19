# 1. Unions, string literals, `infer` keyword

- Derive "OperationModeDefault" and "OperationModeExtended" from OperationMode:

```typescript
type CapitalizedOperationMode = `OperationMode${Capitalize<OperationMode>}`;
```

- Create an imperative type which obtains `somemode` from `OperationModeSomeMode` (i.e. reverts `CapitalizedOperationMode`)

```typescript
type InferOperationMode<T> = T extends `OperationMode${infer Mode}`
  ? Lowercase<Mode>
  : never;
```

- Use `InferOperationMode<T>` to
  - infer the normal operation modes and
  - add another operation mode which is inferred

```typescript
type InferredOperationMode = InferOperationMode<
  CapitalizedOperationMode | 'OperationModeBasic'
>;
```

# 2. Tagged types

- Use the tag (config.mode) to safely access RoomServiceConfig

```typescript
if (config.mode === 'extended') {
  console.log(config.canServeDrinks);
}
```

# 3. Re-mapping types

- Use `RoomServiceConfig['mode']` to create a new mapped object which maps the mode to its type, i.e. { basic: BasicConfiguration, extended: ExtendedConfiguration }

```typescript
type MappedServiceConfig = {
  [K in RoomServiceConfig['mode']]: RoomServiceConfig & { mode: K };
};
```

- Create a type from `MappedServiceConfig` which exactly matches `RoomServiceConfig`

```typescript
type UnmappedRoomServiceConfig = MappedServiceConfig[keyof MappedServiceConfig];
```

- Derive a type from which contains only the boolean fields from `ExtendedConfig`

```typescript
type ExtractFieldNamesForTypes<Type, Target> = {
  [K in keyof Target]: Target[K] extends Type ? K : never;
}[keyof Target];

type ExtractFieldsForType<Type, Target> = {
  [K in ExtractFieldNamesForTypes<Type, Target>]: Target[K];
};
```
