---
date: '2025-02-17 03:54:00'
title: '쌓임 맥락 (stacking context)'
slug: 'stacking-context'
tags: ['CSS']
---

# 쌓임 맥락 (stacking context)

사람: DA WOON KIM
생성 일시: 2025년 2월 17일 오전 3:51

[01.webm](01.webm)

[02.webm](02.webm)

`position: sticky`가 적용된 navbar를 사용하다보면 `transform`, `filter` 등 특정 css가 적용된 요소들이 navbar 위에 배치되는 현상이 있습니다.

navbar에 `z-index`를 정의하면 간단하게 해결할 수 있지만 왜 이런 현상이 생기는 걸까요?

그 이유는 **stacking context**와 관련되어 있습니다.

# stacking context

요소들이 화면에 쌓이는 순서(Z축)를 결정하는 계층 구조입니다.

특별한 속성을 가진 요소들이 만들어지면 **stacking context**가 생성됩니다.

아래와 같은 특성을 알고 있으면 **stacking context**를 이해하고 활용하는 데 도움이 됩니다.

- **stacking context**를 가지지 않는 요소는 부모의 **stacking context**에 배치됩니다.
- `z-index` 의 기준은 해당 요소의 **stacking context**입니다.

## stacking context를 생성하는 요소들

- 문서의 루트 요소. (`<html>`)
- [`position`](https://developer.mozilla.org/ko/docs/Web/CSS/position)이 `absolute` 또는 `relative`이고, [`z-index`](https://developer.mozilla.org/ko/docs/Web/CSS/z-index)가 `auto`가 아닌 요소.
- [`position`](https://developer.mozilla.org/ko/docs/Web/CSS/position)이 `fixed` 또는 `sticky`인 요소. (`sticky`는 모든 모바일 브라우저에서는 해당하지만 구형 데스크톱 브라우저에서는 해당하지 않음)
- [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)를 위한 [`container-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/container-type)이 `size` 또는 `inline-size`인 요소.
- 플렉스([`flexbox`](https://developer.mozilla.org/ko/docs/Web/CSS/flexbox)) 컨테이너의 자식 중 [`z-index`](https://developer.mozilla.org/ko/docs/Web/CSS/z-index)가 `auto`가 아닌 요소.
- 그리드([`grid`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid)) 컨테이너의 자식 중 [`z-index`](https://developer.mozilla.org/ko/docs/Web/CSS/z-index)가 `auto`가 아닌 요소.
- [`opacity`](https://developer.mozilla.org/ko/docs/Web/CSS/opacity)가 1보다 작은 요소.
- [`mix-blend-mode`](https://developer.mozilla.org/ko/docs/Web/CSS/mix-blend-mode)가 `normal`이 아닌 요소.
- 다음 속성 중 하나라도 `none`이 아닌 값을 가진 요소.
  - [`transform`](https://developer.mozilla.org/ko/docs/Web/CSS/transform)
  - [`filter`](https://developer.mozilla.org/ko/docs/Web/CSS/filter)
  - [`backdrop-filter`](https://developer.mozilla.org/ko/docs/Web/CSS/backdrop-filter)
  - [`perspective`](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective)
  - [`clip-path`](https://developer.mozilla.org/ko/docs/Web/CSS/clip-path)
  - [`mask`](https://developer.mozilla.org/ko/docs/Web/CSS/mask) / [`mask-image`](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image) / [`mask-border`](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border)
- [`isolation`](https://developer.mozilla.org/ko/docs/Web/CSS/isolation)이 `isolate`인 요소.
- [`will-change`](https://developer.mozilla.org/ko/docs/Web/CSS/will-change)의 값으로, 초깃값이 아닐 때 새로운 쌓임 맥락을 생성하는 속성을 지정한 요소.
- [`contain`](https://developer.mozilla.org/ko/docs/Web/CSS/contain)이 `layout`, `paint`, 또는 둘 중 하나를 포함하는 값(`strict`, `content` 등)인 요소.
- [top layer](https://developer.mozilla.org/ko/docs/Glossary/Top_layer)에 배치된 요소와 이에 상응하는 [`::backdrop`](https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop)

_출처: [https://developer.mozilla.org/ko/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context#설명](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context#%EC%84%A4%EB%AA%85)_

## 예제

![image.png](image.png)

_출처: [https://developer.mozilla.org/ko/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context#예제](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context#%EC%98%88%EC%A0%9C)_

위 예제는 아래와 같은 계층 구조를 가지고 있습니다.

- 루트
  - DIV #1
  - DIV #2
  - DIV #3
    - DIV #4
    - DIV #5
    - DIV #6

**DIV #4**의 `z-index`는 6으로 **DIV #1**의 5보다 더 높은 값을 가지고 있지만 **DIV #4**는 **DIV #3**의 **stacking context**에 속해있으므로 루트 기준 `z-index` 가 4 보다 높은 요소 위에 배치될 수 없습니다.

추가로, 예제에 있는 다른 요소에 대한 설명을 보고 싶으면 [여기](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context#%EC%98%88%EC%A0%9C)에서 확인할 수 있습니다.

# Reference

- [https://developer.mozilla.org/ko/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
