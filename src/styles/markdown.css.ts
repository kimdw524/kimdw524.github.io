import { globalStyle, style } from '@vanilla-extract/css';

import colorPalette from './colorPalette';

export const markdown = style({});

globalStyle(`${markdown} h1`, {
  borderBottom: '0.125rem solid #eaeaea',
  fontSize: '2rem',
  fontWeight: '700',
  margin: '1rem 0',
  paddingBottom: '0.375rem',
});

globalStyle(`${markdown} h2`, {
  fontSize: '1.75rem',
  fontWeight: '600',
  margin: '0.875rem 0',
});

globalStyle(`${markdown} h3`, {
  fontSize: '1.5rem',
  fontWeight: '500',
  margin: '0.75rem 0',
});

globalStyle(`${markdown} h4, ${markdown} h5, ${markdown} h6`, {
  fontSize: '1.25rem',
  fontWeight: '500',
  margin: '0.5rem',
});

// Paragraphs
globalStyle(`${markdown} p`, {
  margin: '0.5rem 0',
});

// Blockquotes
globalStyle(`${markdown} blockquote`, {
  margin: '1rem 0',
  padding: '0.5rem 1rem',
  backgroundColor: '#f9f9f9',
  borderLeft: '0.25rem solid #00aaff',
  color: '#555',
  fontStyle: 'italic',
});

// Lists
globalStyle(`${markdown} ul, ${markdown} ol`, {
  margin: '1rem 0',
  paddingLeft: '1.5em',
});

globalStyle(`${markdown} ul li`, {
  listStyleType: 'disc',
  margin: '0.5rem 0',
});

globalStyle(`${markdown} ol li`, {
  listStyleType: 'decimal',
  margin: '0.5rem 0',
});

// Code Blocks
globalStyle(`${markdown} pre`, {
  margin: '1rem 0',
  padding: '1rem',
  backgroundColor: '#282c34',
  color: '#fff',
  borderRadius: '0.5rem',
  overflowX: 'auto',
});

globalStyle(`${markdown} hr`, {
  border: 'none',
  borderTop: '1px solid #eaeaea',
  margin: '2rem 0',
  height: '0.0125rem',
  backgroundColor: '#eaeaea',
});

globalStyle(`${markdown} table`, {
  width: '100%',
  borderCollapse: 'collapse',
  margin: 'r1em 0',
});

globalStyle(`${markdown} table th, ${markdown} table td`, {
  border: '0.0625rem solid #ddd',
  padding: '0.5rem 1rem',
  textAlign: 'left',
});

globalStyle(`${markdown} table th`, {
  backgroundColor: '#f5f5f5',
  fontWeight: 'bold',
});

// Links
globalStyle(`${markdown} a`, {
  color: '#00aaff',
  textDecoration: 'none',
});

globalStyle(`${markdown} a:hover`, {
  textDecoration: 'underline',
});

// Images
globalStyle(`${markdown} img`, {
  maxWidth: '100%',
  margin: '1rem 0',
});

// PrismJS

globalStyle("code[class*='language-'], pre[class*='language-']", {
  color: '#ff5f5f',
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
  padding: '0.25rem',
  borderRadius: '0.3em',
  fontSize: '0.875rem',
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
