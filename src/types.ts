import { LovelaceCardConfig } from 'custom-card-helpers';

// TODO Add your configuration elements here for type-checking
export interface AppleTVRemoteConfig extends LovelaceCardConfig {
  type: string;
  name?: string;
  show_warning?: boolean;
  show_error?: boolean;
  test_gui?: boolean;
  entity?: string;
}
