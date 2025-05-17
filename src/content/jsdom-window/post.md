---
date: '2025-05-18 00:09:00'
title: 'jest + jsdom 환경에서 window instanceof Window'
slug: 'jsdom-window'
tags: ['JavaScript', 'Jest']
---

![window](1.png)

jsdom 환경에서 정의된 window는 브라우저의 Window 객체가 아니라, 테스트를 목적으로 별도로 구현된 객체입니다.

만약 아래와 같은 코드가 있을 때, element에 window를 대입하면 조건문을 통과할 수 없습니다.

```js
if (element instanceof Window) {
	// ...
}
```

## 해결법

```js
Object.setPrototypeOf(window, Window.prototype);
expect(window instanceof Window).toBe(true);
```

window 객체의 프로토타입을 Window.prototype으로 변경하면 됩니다.

## 더 알아보기

- instanceof의 동작 원리
    - `instanceof` 연산자는 `object`의 프로토타입 체인에 `constructor.prototype`이 존재하는지 판별합니다.
    - 직접 구현한 instanceof
    
    ```js
    const isInstanceof = (object, constructor) => {
      if (object == null) {
    	  return false;
      }
    
    	const prototype = constructor.prototype;
      let proto = Object.getPrototypeOf(object);
    
      while (proto !== null) {
        if (proto === prototype) {
    	    return true;
        }
        proto = Object.getPrototypeOf(proto);
      }
      
      return false;
    };
    ```

## Reference

- 해결법 (https://github.com/jsdom/jsdom/issues/2740#issuecomment-629792008)
- instanceof (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/instanceof)