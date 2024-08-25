---
id: 4
title: Vanilla Extract 에서 Palette Token 사용할
date: 2024-08-25
category: 메모
banner: ./banner.png
tags:
  - React
  - CSS
  - TypeScript
---

다음과 같이 palette 색상을 테마에 정의하고 사용하고 있었다.

```javascript
const themeContract = {
  palette: {
    primary: {
      ...
    },
    secondary: {
      ...
    },
    success: {
      ...
    },
    danger: {
      ...
    },
  }
}
```

그리고 `@vanilla-extract/recipes`의 `recipe`를 사용하면 variants를 줄 수 있어서 사용하려고 했다.

사용방법은 아래와 같다.

```javascript
export const button = recipe({
  base: {
    ...
  },

  variants: {
    color: {
      primary: { background: theme.palette.primary },
      secondary: { background: theme.palette.secondary },
      success: { background: theme.palette.success }
    },
  }
});
```

처음에는, 매번 themeContract에 정의된 모든 palette를 직접 입력해 줘야 하나?

너무 귀찮고, type-safe하지 못한 방법인 것 같다고 생각했는데...

그냥 아래처럼 reduce를 사용해서 쉽게 해결할 수 있다. 😅

```javascript
export const button = recipe({
  variants: {
    color: Object.keys(theme.palette).reduce((acc, palette) => {
      const color = theme.palette[palette as Palette];

      acc[palette as Palette] = {
        backgroundColor: color;
        ...
      };

      return acc;
    }, {} as Record<Palette, object>),
  }
});
```

그리고 추가로, `emotion`을 사용할 때는 디자인 토큰에 대한 타입을 먼저 정의하고,

그 타입에 맞추어 디자인 토큰을 만들었는데...

Vanilla Extract는 디자인 토큰을 먼저 만든 다음에 타입은 다음과 같이 정의해서 사용했다.

```typescript
type Palette = keyof typeof themeContract.palette;

type ButtonVariants = RecipeVariants<typeof button>;

interface ButtonProps extends Exclude<s.ButtonVariants, undefined>;
```
