import React, { useCallback, useState } from "react";
import { addons, types, useChannel } from "storybook/manager-api";
import { AddonPanel, Badge, Button, Placeholder } from "storybook/internal/components";
import { styled } from "storybook/theming";
import { ADDON_ID, EVENTS, PANEL_ID } from "./constants";

// --- 定数 ---

const TYPE_META = {
  error:   { label: "エラー", color: "#ec0000" },
  warning: { label: "警告",   color: "#927200" },
  info:    { label: "情報",   color: "#0017c1" },
};

// --- スタイル ---

const PanelContainer = styled.div({
  padding: 16,
});

const ActionBar = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 12,
  marginBottom: 16,
});

const SummaryText = styled("span")(({ color }) => ({
  fontWeight: 700,
  color: color ?? "inherit",
}));

const SummaryItem = styled.span({
  display: "inline-flex",
  alignItems: "center",
  gap: 4,
});

const MessageList = styled.ul({
  listStyle: "none",
  margin: 0,
  padding: 0,
});

const MessageItem = styled.li(({ theme }) => ({
  padding: "10px 12px",
  borderBottom: `1px solid ${theme.appBorderColor}`,
  "&:last-child": {
    borderBottom: "none",
  },
}));

const TypeBadge = styled.span(({ color }) => ({
  display: "inline-block",
  fontSize: 11,
  fontWeight: 700,
  lineHeight: 1,
  padding: "2px 6px",
  borderRadius: 3,
  color: "#fff",
  background: color,
  marginRight: 8,
  verticalAlign: "middle",
}));

const MessageText = styled.p({
  margin: "0 0 4px",
  fontWeight: 500,
  lineHeight: 1.4,
});

const MessageMeta = styled.span(({ theme }) => ({
  fontSize: 12,
  color: theme.color.mediumdark,
}));

const Extract = styled.code(({ theme }) => ({
  display: "block",
  marginTop: 6,
  padding: "6px 8px",
  lineHeight: 1.4,
  background: theme.background.hoverable,
  borderRadius: 3,
  overflowX: "auto",
  whiteSpace: "pre",
  fontFamily: theme.typography.fonts.mono,
}));

// --- パネルコンポーネント ---

function HtmlValidatorPanel() {
  const [status, setStatus] = useState("idle");
  const [messages, setMessages] = useState([]);
  const [errorText, setErrorText] = useState("");

  const emit = useChannel(
    {
      [EVENTS.RESULT]: (result) => {
        setMessages(result.messages ?? []);
        setStatus("done");
      },
      [EVENTS.ERROR]: (msg) => {
        setErrorText(msg);
        setStatus("error");
      },
      // ストーリー切り替え時にリセット
      storyChanged: () => {
        setStatus("idle");
        setMessages([]);
        setErrorText("");
      },
    },
    [],
  );

  const handleCheck = useCallback(() => {
    setStatus("checking");
    setMessages([]);
    setErrorText("");
    emit(EVENTS.REQUEST);
  }, [emit]);

  const errors = messages.filter((m) => m.type === "error");
  const warnings = messages.filter((m) => m.subType === "warning");
  const infos = messages.filter((m) => m.type === "info" && m.subType !== "warning");
  const hasMessages = messages.length > 0;

  return (
    <PanelContainer>
      <ActionBar>
        <Button
          variant="solid"
          size="small"
          onClick={handleCheck}
          disabled={status === "checking"}
          style={{ fontSize: 16, padding: "14px 16px", height: "auto" }}
        >
          {status === "checking" ? "チェック中..." : "チェックする"}
        </Button>

        {status === "done" && !hasMessages && (
          <SummaryText color="#197a4b">
            問題は検出されませんでした
          </SummaryText>
        )}
        {status === "done" && hasMessages && (
          <span style={{ display: "inline-flex", gap: 12, alignItems: "center" }}>
            {errors.length > 0 && (
              <SummaryItem>
                <Badge status="negative">{errors.length}</Badge>
                <SummaryText color="#ec0000">エラー</SummaryText>
              </SummaryItem>
            )}
            {warnings.length > 0 && (
              <SummaryItem>
                <Badge status="warning">{warnings.length}</Badge>
                <SummaryText color="#c59000">警告</SummaryText>
              </SummaryItem>
            )}
            {infos.length > 0 && (
              <SummaryItem>
                <Badge status="neutral">{infos.length}</Badge>
                <SummaryText color="#029CFD">情報</SummaryText>
              </SummaryItem>
            )}
          </span>
        )}
      </ActionBar>

      {status === "error" && (
        <Placeholder style={{ fontSize: 16, padding: 0, textAlign: 'left' }}>
          Validator API との通信に失敗しました: {errorText}
        </Placeholder>
      )}

      {status === "done" && hasMessages && (
        <MessageList>
          {messages.map((msg, i) => {
            const kind = msg.type === "error" ? "error" : msg.subType === "warning" ? "warning" : "info";
            const meta = TYPE_META[kind];
            return (
              <MessageItem key={i}>
                <MessageText>
                  <TypeBadge color={meta.color}>{meta.label}</TypeBadge>
                  {msg.message}
                </MessageText>
                <MessageMeta>
                  {msg.lastLine != null && `行 ${msg.lastLine}`}
                  {msg.lastColumn != null && `:${msg.lastColumn}`}
                </MessageMeta>
                {msg.extract && <Extract>{msg.extract}</Extract>}
              </MessageItem>
            );
          })}
        </MessageList>
      )}

      {status === "idle" && (
        <Placeholder style={{ fontSize: 16, padding: 0, textAlign: 'left' }}>
          「チェックする」ボタンをクリックすると、現在表示中のストーリーの HTML を
          Nu HTML Checker (validator.w3.org/nu) で検証します。
        </Placeholder>
      )}
    </PanelContainer>
  );
}

// --- アドオン登録 ---

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    title: "HTML",
    type: types.PANEL,
    render: ({ active }) => (
      <AddonPanel active={active ?? false}>
        <HtmlValidatorPanel />
      </AddonPanel>
    ),
  });
});
