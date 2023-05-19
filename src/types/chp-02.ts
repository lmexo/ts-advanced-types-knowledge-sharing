export interface BasicConfig {
  mode: 'basic';
  canCleanRoom: boolean;
}

export interface ExtendedConfig {
  mode: 'extended';
  canCleanRoom: boolean;
  canServeDrinks: boolean;
}

export type RoomServiceConfig = BasicConfig | ExtendedConfig;

declare const config: RoomServiceConfig;

// Task 2: Use the tag (config.mode) to safely access RoomServiceConfig
//
