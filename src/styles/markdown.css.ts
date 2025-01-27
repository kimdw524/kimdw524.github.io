import { globalStyle, style } from '@vanilla-extract/css';

import colorPalette from './colorPalette';

export const markdown = style({});

globalStyle(`${markdown} h1`, {
  fontWeight: 600,
  fontSize: '32px',
  borderBottom: '2px solid #e1e4e8',
  paddingBottom: '6px',
  marginTop: '24px',
  marginBottom: '8px',
});

globalStyle(`${markdown} h2`, {
  fontWeight: 600,
  fontSize: '28px',
  marginTop: '24px',
  marginBottom: '8px',
});

globalStyle(`${markdown} h3`, {
  fontWeight: 600,
  fontSize: '24px',
  marginTop: '24px',
  marginBottom: '8px',
});

globalStyle(`${markdown} h4`, {
  fontWeight: 600,
  fontSize: '20px',
  marginTop: '24px',
  marginBottom: '8px',
});

globalStyle(`${markdown} h5`, {
  fontWeight: 600,
  fontSize: '16px',
  marginTop: '24px',
  marginBottom: '8px',
});

globalStyle(`${markdown} h6`, {
  fontWeight: 600,
  fontSize: '14px',
  color: '#6a737d',
  marginTop: '24px',
  marginBottom: '8px',
});

globalStyle(`${markdown} p`, {
  marginTop: '16px',
  marginBottom: '16px',
});

globalStyle(`${markdown} a`, {
  color: '#0366d6',
  textDecoration: 'none',
});

globalStyle(`${markdown} a:hover`, {
  textDecoration: 'underline',
});

globalStyle(`${markdown} ul`, {
  paddingLeft: '20px',
  marginTop: 0,
  marginBottom: '16px',
});

globalStyle(`${markdown} ul li`, {
  marginBottom: '8px',
});

globalStyle(`${markdown} ol`, {
  paddingLeft: '20px',
  marginTop: 0,
  marginBottom: '16px',
});

globalStyle(`${markdown} ol li`, {
  marginBottom: '8px',
});

globalStyle(`${markdown} blockquote`, {
  borderLeft: '4px solid #dfe2e5',
  paddingLeft: '16px',
  marginLeft: 0,
  marginRight: 0,
  color: '#6a737d',
  fontStyle: 'italic',
});

globalStyle(`${markdown} table`, {
  width: '100%',
  marginTop: '16px',
  marginBottom: '16px',
  borderCollapse: 'collapse',
});

globalStyle(`${markdown} th`, {
  backgroundColor: '#f6f8fa',
  fontWeight: 'bold',
  padding: '8px',
  border: '1px solid #dfe2e5',
  textAlign: 'left',
});

globalStyle(`${markdown} td`, {
  padding: '8px',
  border: '1px solid #dfe2e5',
  textAlign: 'left',
});

globalStyle(`${markdown} img`, {
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '3px',
  marginTop: '16px',
  marginBottom: '16px',
});

// PrismJS

globalStyle("code[class*='language-'], pre[class*='language-']", {
  color: '#657b83',
  textAlign: 'left',
  whiteSpace: 'pre',
  wordSpacing: 'normal',
  wordBreak: 'normal',
  wordWrap: 'normal',
  lineHeight: 1.5,
  MozTabSize: 2,
  OTabSize: 2,
  tabSize: 2,
  WebkitHyphens: 'none',
  MozHyphens: 'none',
  msHyphens: 'none',
  hyphens: 'none',
});

globalStyle(
  "pre[class*='language-']::-moz-selection, pre[class*='language-'] ::-moz-selection, code[class*='language-']::-moz-selection, code[class*='language-'] ::-moz-selection",
  {
    background: '#073642',
  },
);

globalStyle(
  "pre[class*='language-']::selection, pre[class*='language-'] ::selection, code[class*='language-']::selection, code[class*='language-'] ::selection",
  {
    background: '#073642',
  },
);

globalStyle("pre[class*='language-']", {
  display: 'flex',
  flexDirection: 'row-reverse',

  margin: '0.5em 0',
  overflow: 'auto',
  borderRadius: '0.3em',
});

globalStyle(":not(pre) > code[class*='language-'], pre[class*='language-']", {
  borderRadius: '0.5rem',
  backgroundColor: colorPalette.grey[100],
});

globalStyle(":not(pre) > code[class*='language-']", {
  padding: '0.1em',
  borderRadius: '0.3em',
});

globalStyle('.token.comment, .token.prolog, .token.doctype, .token.cdata', {
  color: '#93a1a1',
});

globalStyle('.token.punctuation', {
  color: '#586e75',
});

globalStyle('.namespace', {
  opacity: 0.7,
});

globalStyle(
  '.token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted',
  {
    color: '#268bd2',
  },
);

globalStyle(
  '.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.url, .token.inserted',
  {
    color: '#2aa198',
  },
);

globalStyle('.token.entity', {
  color: '#657b83',
  background: '#eee8d5',
});

globalStyle('.token.atrule, .token.attr-value, .token.keyword', {
  color: '#859900',
});

globalStyle('.token.function', {
  color: '#b58900',
});

globalStyle('.token.regex, .token.important, .token.variable', {
  color: '#cb4b16',
});

globalStyle('.token.important, .token.bold', {
  fontWeight: 'bold',
});

globalStyle('.token.italic', {
  fontStyle: 'italic',
});

globalStyle('.token.entity', {
  cursor: 'help',
});

globalStyle('pre.line-numbers', {
  position: 'relative',

  counterReset: 'linenumber',
});

globalStyle('pre.line-numbers > code', {
  flex: '1 1 auto',
  position: 'relative',

  padding: '0 1rem',
});

globalStyle('.line-numbers .line-numbers-rows', {
  flex: '0 0 auto',

  padding: '0 0.625rem',
  borderRight: `0.0625rem solid ${colorPalette.blueGrey[100]}`,

  pointerEvents: 'none',
  userSelect: 'none',
});

globalStyle('.line-numbers-rows > span', {
  pointerEvents: 'none',
  display: 'block',
  counterIncrement: 'linenumber',
});

globalStyle('.line-numbers-rows > span:before', {
  content: 'counter(linenumber)',
  color: colorPalette.blueGrey[400],
  display: 'block',
  textAlign: 'right',
});
