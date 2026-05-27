import { addons } from "storybook/preview-api";
import { EVENTS, VALIDATOR_URL } from "./constants";

/**
 * Nu HTML Checker の URL。
 * preview は Vite (ESM) でビルドされるため import.meta.env が使える。
 * 環境変数 VITE_VALIDATOR_URL でローカルインスタンスに切り替え可能。
 * 例: VITE_VALIDATOR_URL=http://localhost:8888/ npm run storybook
 */
const validatorUrl = import.meta.env.VITE_VALIDATOR_URL || VALIDATOR_URL;

/**
 * - style: Nu HTML Checker の CSS 追従が遅いため除外
 * - #storybook-docs: Storybook Docs が注入するマークアップ
 * - .sb-wrapper: Storybook のラッパー要素
 */
const EXCLUDE_SELECTORS = ["style", "#storybook-docs", ".sb-wrapper", "body > textarea"];

const getCleanHtml = () => {
  const cloned = document.documentElement.cloneNode(true);
  for (const sel of EXCLUDE_SELECTORS) {
    for (const el of cloned.querySelectorAll(sel)) {
      el.parentNode.removeChild(el);
    }
  }
  return cloned.outerHTML;
};

const channel = addons.getChannel();

channel.on(EVENTS.REQUEST, async () => {
  try {
    const html = `<!DOCTYPE html>\n${getCleanHtml()}`;

    const res = await fetch(`${validatorUrl}?out=json`, {
      method: "POST",
      headers: { "Content-Type": "text/html; charset=utf-8" },
      body: html,
    });

    if (!res.ok) {
      channel.emit(EVENTS.ERROR, `Validator API error: ${res.status} ${res.statusText}`);
      return;
    }

    const json = await res.json();
    channel.emit(EVENTS.RESULT, json);
  } catch (err) {
    channel.emit(
      EVENTS.ERROR,
      err instanceof Error ? err.message : String(err),
    );
  }
});

// Storybook preview annotation として認識させるために空の配列をエクスポート
export const decorators = [];
