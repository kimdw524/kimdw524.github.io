import { globalStyle, style } from '@vanilla-extract/css';

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

// 문단 스타일
globalStyle(`${markdown} p`, {
  marginTop: '16px',
  marginBottom: '16px',
});

// 코드 블록 스타일
globalStyle(`${markdown} pre`, {
  backgroundColor: '#f6f8fa',
  borderRadius: '3px',
  padding: '16px',
  fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
  fontSize: '14px',
  color: '#24292f',
  overflowX: 'auto',
  whiteSpace: 'pre-wrap',
});

globalStyle(`${markdown} code`, {
  fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
  fontSize: '14px',
  backgroundColor: '#f6f8fa',
  borderRadius: '3px',
  padding: '0 4px',
  color: '#d73a49',
});

// 링크 스타일
globalStyle(`${markdown} a`, {
  color: '#0366d6',
  textDecoration: 'none',
});

globalStyle(`${markdown} a:hover`, {
  textDecoration: 'underline',
});

// 목록 스타일
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

// 인용문 스타일
globalStyle(`${markdown} blockquote`, {
  borderLeft: '4px solid #dfe2e5',
  paddingLeft: '16px',
  marginLeft: 0,
  marginRight: 0,
  color: '#6a737d',
  fontStyle: 'italic',
});

// 테이블 스타일
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

// 이미지 스타일
globalStyle(`${markdown} img`, {
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '3px',
  marginTop: '16px',
  marginBottom: '16px',
});
