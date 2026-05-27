export const ADDON_ID = "html-validator";
export const PANEL_ID = `${ADDON_ID}/panel`;
export const EVENTS = {
  /** manager → preview: チェック開始を要求 */
  REQUEST: `${ADDON_ID}/request`,
  /** preview → manager: バリデーション結果 */
  RESULT: `${ADDON_ID}/result`,
  /** preview → manager: fetch 失敗などのエラー */
  ERROR: `${ADDON_ID}/error`,
};
export const VALIDATOR_URL = "https://validator.w3.org/nu/";
