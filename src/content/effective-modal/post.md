---
date: '2024-12-16 21:15:00'
title: '효율적으로 모달 구현하기'
thumbnail: './thumbnail.png'
slug: 'effective-modal'
tags: ['React']
---

## 1. 기존 모달의 문제점과 개선하기

`react-modal` `Chakra UI` 등 여러 라이브러리에서는 모달을 다음과 같이 관리한다.

```tsx
const [isOpen, setIsOpen] = useState(false);

return (
  <div>
    <button onClick={() => setIsOpen(true)}>Open Modal</button>
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={() => setIsOpen(false)}
    >
  </div>
);
```

하지만 위와 같은 로직은 여러 문제점이 있다.,

1. 보일러 플레이트가 상당하다.
2. 하나의 컴포넌트에서 여러 종류의 모달을 띄울 경우 로직이 복잡해진다.
3. 모달의 상태가 바뀔 때마다 리렌더링이 발생한다.

1, 2번 문제의 경우 전역 상태 관리를 함으로써 해결할 수 있다.

```tsx
const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modals, setModals] = useState<Modal[]>([]);

  const push = useCallback((data: Modal) => {
    setModal((prev) => [...prev, data]);
  }, []);

  const pop = useCallback(() => {
    setModal((prev) => prev.slice(0, -1));
  }, []);

  const contextValue = useMemo(() => {
    return { push, pop };
  }, [push, pop]);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {modals.map((modal) => (
        <Modal key={modal.id}>{modal.children}</Modal>
      ))}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const modalContext = useContext(ModalContext);

  return modalContext;
};
```

```tsx
const { push } = useModal();

push({
  children: <Component />,
});
```

이처럼 로직을 별도의 컴포넌트에서 처리하고, `Context API`를 통해 모달 관련 함수를 전달 받으면 간편하게 모달을 띄울 수 있다.

그리고 모달 상태를 한 곳에서 관리하기 때문에 다중 모달 또한 쉽게 구현이 가능하다.

하지만, 큰 문제점이 하나 존재하는데 `ModalProvider`에서 상태를 관리하기 때문에, 모달을 `push`, `pop` 할 때마다 `ModalProvider` 하위의 모든 컴포넌트가 리렌더링 되는 문제가 있다.

이를 해결하기 위해서는 전역 상태 관리 라이브러리를 사용하여 모달을 출력하는 컴포넌트를 분리하는 방법이 있다.

하지만 여러 이유로, 라이브러리 의존성이 생기지 않는 모듈을 만들고 싶었고 React 내부 API만으로 이 문제를 해결할 방법을 생각했다.

## 2. 리렌더링 문제 해결하기

기존의 `ModalProvider` 에서 리렌더링 문제를 전역 상태 관리 라이브러리 없이 해결하려면 상태를 변경하는 로직이 상태를 가지고 있는 곳보다 상위에 위치해야 한다.

이와 같은 로직은 `useImperativeHandle` hook을 통해 구현할 수 있다.

기존(1번)의 `ModalProvider` 에서 정의된 모달의 상태와 모달을 출력하는 로직을 `ModalList` 라는 새로운 컴포넌트를 만들어 분리하고 `ModalProvider` 하위에 `ModalList` 컴포넌트를 위치시킨다.

그리고 `ModalList` 에서는 모달를 제어하는 함수 `pop`, `push` 를 `useImperativeHandle` 훅을 통해 전달하고 `ModalProvider` 는 `ModalList` 에서 전달한 `pop`, `push` 함수를 `ref`를 통해 받아서 사용하면 된다.

```tsx
const ModalList = forwardRef<ModalListRef>((_, ref) => {
  const [modals, setModals] = useState<Modal[]>([]);

  useImperativeHandle(
    ref,
    () => {
      return {
        pop() {
         ...
        },

        push() {
          ...
        }
    },
    [modals]
  );

  return (
    <>
      {modals.map((modal) => (
        <Modal key={modal.id} {...modal} />
      ))}
    </>
  );
});
```

```tsx
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const modalListRef = useRef<ModalListRef>(null);

  const push = useCallback(
    (data: Modal) => {
      if (!modalListRef.current) {
        return;
      }

      modalListRef.current.push(data);
    },
    [modalListRef],
  );

  const pop = useCallback(() => {
    if (!modalListRef.current) {
      return;
    }

    modalListRef.current.pop();
  }, [modalListRef]);

  const contextValue = useMemo(() => {
    return { push, pop };
  }, [push, pop]);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      <ModalList ref={modalListRef} />
    </ModalContext.Provider>
  );
};
```

이처럼 구현하면 `Context API`만 사용했을 때 생기는 리렌더링 문제를 전역 상태 관리 라이브러리의 의존 없이 해결할 수 있다.
