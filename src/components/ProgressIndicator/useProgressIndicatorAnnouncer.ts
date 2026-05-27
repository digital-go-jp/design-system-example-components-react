import { useEffect, useRef, useState } from 'react';

const DEFAULT_ANNOUNCE_INTERVAL_SEC = 5;

export type ProgressIndicatorAnnouncerMessages = {
  start?: string;
  end?: string;
  long?: string;
  longWithValue?: string;
};

const defaultMessages: Required<ProgressIndicatorAnnouncerMessages> = {
  start: '読み込みを開始しました',
  end: '読み込みが完了しました',
  long: '読み込み中です',
  longWithValue: '{value}% 読み込みました。',
};

export type UseProgressIndicatorAnnouncerProps = {
  active: boolean;
  value?: number;
  announceInterval?: number;
  messages?: ProgressIndicatorAnnouncerMessages;
};

const format = (template: string, variables: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (match, key) =>
    variables[key] !== undefined ? String(variables[key]) : match,
  );

/**
 * スクリーンリーダーへの通知テキストを管理する hook。
 * 戻り値を `role="status"` のビジュアル上隠した要素に差し込んで使用する。
 */
export const useProgressIndicatorAnnouncer = (props: UseProgressIndicatorAnnouncerProps) => {
  const { active, value, announceInterval, messages } = props;
  const [text, setText] = useState('');

  const valueRef = useRef(value);
  valueRef.current = value;

  const messagesRef = useRef(messages);
  messagesRef.current = messages;

  const previousActiveRef = useRef(false);

  useEffect(() => {
    const getMessage = (key: keyof ProgressIndicatorAnnouncerMessages) =>
      messagesRef.current?.[key] ?? defaultMessages[key];

    const timers: number[] = [];

    const announce = (nextText: string) => {
      const showTimer = window.setTimeout(() => {
        setText(nextText);
        const clearTextTimer = window.setTimeout(() => setText(''), 1000);
        timers.push(clearTextTimer);
      }, 100);
      timers.push(showTimer);
    };

    const announceLong = () => {
      const currentValue = valueRef.current;
      if (currentValue !== undefined && Number.isFinite(currentValue)) {
        announce(format(getMessage('longWithValue'), { value: Math.round(currentValue) }));
      } else {
        announce(getMessage('long'));
      }
    };

    const wasActive = previousActiveRef.current;
    previousActiveRef.current = active;

    if (active) {
      if (!wasActive) {
        announce(getMessage('start'));
      }

      const intervalMs =
        (announceInterval && announceInterval > 0
          ? announceInterval
          : DEFAULT_ANNOUNCE_INTERVAL_SEC) * 1000;

      const longTimer = window.setTimeout(() => {
        announceLong();
        const repeatTimer = window.setInterval(announceLong, intervalMs);
        timers.push(repeatTimer);
      }, intervalMs);
      timers.push(longTimer);
    } else if (wasActive) {
      announce(getMessage('end'));
    }

    return () => {
      for (const id of timers) {
        window.clearTimeout(id);
        window.clearInterval(id);
      }
    };
  }, [active, announceInterval]);

  return text;
};
