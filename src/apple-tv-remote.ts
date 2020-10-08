import { LitElement, html, customElement, property, CSSResult, TemplateResult, css } from 'lit-element';
import {
  ActionConfig,
  HomeAssistant,
  hasAction,
  handleAction,
  LovelaceCardEditor,
  getLovelace,
  LovelaceCard,
} from 'custom-card-helpers';

import './editor';

import { AppleTVRemoteConfig } from './types';
import { actionHandler } from './action-handler-directive';
import { CARD_VERSION } from './const';

import { localize } from './localize/localize';

/* eslint no-console: 0 */
console.info(
  `%c  Apple TV Remote  \n%c  ${localize('common.version')} ${CARD_VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'apple-tv-remote',
  name: 'Apple TV Remote',
  description: 'A remote to control Apple TV',
});

@customElement('apple-tv-remote')
export class AppleTVRemote extends LitElement {
  @property() public hass!: HomeAssistant;
  @property() private _config!: AppleTVRemoteConfig;

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement('apple-tv-remote-editor') as LovelaceCardEditor;
  }

  public getCardSize(): number {
    return 5;
  }

  public static getStubConfig(): object {
    return {};
  }

  public setConfig(config: AppleTVRemoteConfig): void {
    if (!config || !config.entity || config.show_error) {
      throw new Error(localize('common.invalid_configuration'));
    }

    if (config.test_gui) {
      getLovelace().setEditMode(true);
    }

    this._config = {
      name: 'Apple TV Remote',
      ...config,
    };
  }

  protected render(): TemplateResult | void {
    if (!this._config || !this.hass) {
      return html``;
    }

    if (this._config.show_warning || !this._config.entity) {
      return this.showWarning(localize('common.show_warning'));
    }

    const stateObj = this.hass.states[this._config.entity];

    if (this._config.entity && !stateObj) {
      return html`
        <ha-card>
          <div class="warning">Entity Unavailable</div>
        </ha-card>
      `;
    }

    return html`
      <ha-card
        @action=${this._handleAction}
        .actionHandler=${actionHandler({
          hasHold: hasAction(this._config.hold_action),
        })}
        tabindex="0"
        aria-label=${`Apple TV`}
        class="card"
      >
        <div class="header">
          <div class="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="33.626" height="17.091" viewBox="0 0 33.626 17.091">
              <path
                fill="rgb(255, 255, 255)"
                fill-rule="evenodd"
                d="M10.31636186 0c.07168857.99331665-.24367824 1.97589111-.88000858 2.7420044-.60822088.77493286-1.54501435 1.21929931-2.52997751 1.19998168-.06200432-.96179199.2619148-1.90866088.90000592-2.63098144C8.44082549.56436157 9.34108295.0941162 10.31636186 0zm6.4700188 2.10702515V5h-1.74001983v1.89001465h1.79001316v6.95599365c0 2.29901123.9100046 3.21600342 3.27000474 3.21600342.45201527.0057373.90371611-.02770996 1.35000888-.1000061v-1.8999939c-.27203924.03500366-.54577637.05505371-.82001658.05999756-.9999926 0-1.44999556-.51400757-1.44999556-1.52200318V6.84500122h2.2800108V4.96002197h-2.2800108V2.105011l-2.39999482.00201416zM8.01377544 4.62713623c.62325033-.24771118 1.39233029-.55334473 2.2425944-.50415039V4.1210022c1.24165853.05307007 2.3877323.68154907 3.10002737 1.69998169-1.12381258.70367431-1.81315474 1.93014526-1.83000784 3.25601196.00767194 1.50216675.8964215 2.8598938 2.27001214 3.46798706-.2709702.85897827-.66506866 1.6741333-1.17003285 2.42001343-.69996967 1.0920105-1.47999157 2.07498169-2.5999682 2.1000061-.5472227.01220703-.91780228-.14865112-1.30416592-.31637573-.40441154-.17556763-.82611639-.35864258-1.48583984-.35864258-1.29001687 0-1.63997026.66101074-2.77000844.7000122-1.12997529.03900147-1.97998786-1.16000365-2.69001908-2.16601562C.31637296 12.80700684-.78360633 8.93399048.71638258 6.33398437 1.41748417 5.04611207 2.75063994 4.228302 4.21641957 4.1869812c.62381628-.01132202 1.22197561.22692871 1.74511349.43533325.399255.1590271.75480513.3006897 1.0448294.3006897.26304672 0 .60469933-.13580322 1.00741299-.29586792zM31.18641246 5h2.4399895l-4.190008 11.95800781h-2.4999815L22.73640581 5h2.48998283l2.95004735 9.6080017h.05999201L31.18641246 5z"
              />
            </svg>
          </div>
          <div class="title">${stateObj.attributes.friendly_name}</div>
        </div>
        <div class="remote">
          <div class="row">
            ${this._renderButton('up', 'mdi:chevron-up', 'Up')}
          </div>
          <div class="row">
            ${this._renderButton('left', 'mdi:chevron-left', 'Left')}
            ${this._renderButton('select', 'mdi:checkbox-blank-circle', 'Select')}
            ${this._renderButton('right', 'mdi:chevron-right', 'Right')}
          </div>
          <div class="row">
            ${this._renderButton('down', 'mdi:chevron-down', 'Down')}
          </div>
          <div class="row">
            ${this._renderButton('menu', 'mdi:menu', 'Menu')} ${this._renderButton('home', 'mdi:home', 'Home')}
          </div>
          <div class="row">
            <div style="width: 48px;"></div>
            ${this._renderButton('play_pause', 'mdi:play-pause', 'Play/Pause')}
          </div>
        </div>
      </ha-card>
    `;
  }

  private _handleAction(ev): void {
    if (this.hass && this._config && ev.currentTarget && ev.currentTarget.button) {
      const button = ev.currentTarget.button;
      const entity = this._config.entity;

      const actionInfo: {
        entity?: string;
        camera_image?: string;
        hold_action?: ActionConfig;
        tap_action?: ActionConfig;
        double_tap_action?: ActionConfig;
      } = {
        tap_action: {
          action: 'call-service',
          service: 'remote.send_command',
          service_data: {
            entity_id: entity,
            command: button,
          },
        },
        hold_action:
          button === 'home' || button === 'menu'
            ? {
                action: 'call-service',
                service: 'remote.send_command',
                service_data: {
                  entity_id: entity,
                  command: button === 'home' ? 'home_hold' : 'top_menu',
                },
              }
            : undefined,
      };
      handleAction(this, this.hass, actionInfo, ev.detail.action);
    }
  }

  private _renderButton(button: string, icon: string, title: string): TemplateResult {
    if (this._config) {
      return html`
        <ha-icon-button
          .button=${button}
          icon=${icon}
          title=${title}
          @action=${this._handleAction}
          .actionHandler=${actionHandler({
            hasHold: button === 'home' || button === 'menu',
          })}
        ></ha-icon-button>
      `;
    } else {
      return html``;
    }
  }

  private showWarning(warning: string): TemplateResult {
    return html`
      <hui-warning>${warning}</hui-warning>
    `;
  }

  private showError(error: string): TemplateResult {
    const errorCard = document.createElement('hui-error-card') as LovelaceCard;
    errorCard.setConfig({
      type: 'error',
      error,
      origConfig: this._config,
    });

    return html`
      ${errorCard}
    `;
  }

  static get styles(): CSSResult {
    return css`
      .card {
        background-color: #222233;
      }
      .header {
        padding: 16px 16px 0 16px;
        color: white;
        display: flex;
      }
      .title {
        margin-left: 10px;
      }
      .remote {
        padding: 16px;
        display: flex;
        flex-direction: column;
        color: white;
      }
      .row {
        display: flex;
        padding: 10px;
        justify-content: space-evenly;
      }
    `;
  }
}
