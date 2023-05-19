/**
 * Use `RoomServiceConfig['mode']` to create a new mapped object which maps the mode to its type, i.e. { basic: BasicConfiguration, extended: ExtendedConfiguration }
 */
// type MappedServiceConfig = ...

// declare const distributiveMapping: MappedServiceConfig;

/**
 * Create a type from `MappedServiceConfig` which exactly matches `RoomServiceConfig`
 */
// type UnmappedRoomServiceConfig

/**
 * Derive a type from which contains only the boolean fields from `ExtendedConfig`
 * Hint: Do not hesitate to create some intermediate helper type(s) if you need
 */
// type ExtractFieldsForType<Type, Target> = ...
// declare const foo: ExtractFieldsForType<boolean, ExtendedConfig>;
