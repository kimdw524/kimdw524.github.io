---
date: '2025-01-06 02:14:00'
title: 'npm 라이브러리 개발부터 배포까지'
slug: 'npm-publish'
tags: ['JavaScript']
---

`pnpm` + `TypeScript` 환경에서 React 라이브러리를 개발하고 배포까지 하는 과정

`부족한 내용이 많아 수정 중인 글입니다.`

# 프로젝트 만들기

라이브러리 개발에 필요한 의존성을 추가하여 프로젝트를 구성한다.

주의할 점은 개발 환경에만 필요한 패키지는 devDependencies에 추가해야 배포할 때 불필요한 의존성을 쉽게 제거할 수 있다.

```bash
$ pnpm init
$ pnpm add react react-dom
$ pnpm add -D eslint typescript @babel/preset-env ...
```

# package.json 설정

```json
{
  "name": "@kimdw524/react-overlay",
  "version": "1.0.0",
  "repository": {
    "type": "git",
    "url": "https://github.com/kimdw524/react-overlay.git"
  },
  "keywords": [],
  "license": "MIT",
  "homepage": "https://github.com/kimdw524/react-overlay#readme",
  "files": ["./dist", "README.md"]
}
```

### name

- `@kimdw524/react-overlay` 와 같이 scope를 사용할 수 있는데, scope는 자신의 아이디 또는 organization만 사용할 수 있다.

  [https://docs.npmjs.com/about-scopes](https://docs.npmjs.com/about-scopes)

### version

- version은 `major`. `minor`. `patch` 형태의 3가지 숫자로 구성되어있다.
- first release시 1.0.0 부터 시작해야 하며, 버그 수정시 `patch` , 새 기능이 추가되면 `minor` , 하위호환성을 깨버리면 `major` 를 1씩 증가시킨다.

  [https://docs.npmjs.com/about-semantic-versioning](https://docs.npmjs.com/about-semantic-versioning)

### repository, keywords, homepage

- 해당 필드에 입력한 정보를 npmjs.com에서 확인할 수 있다.

  [https://www.npmjs.com/package/react](https://www.npmjs.com/package/react)

### files

- npm에 배포할 파일을 명시할 수 있다. `package.json` 은 명시하지 않아도 함께 배포된다.
- `files` 프로퍼티가 정의되어 있으면, `types` 프로퍼티는 무시된다.

# tsconfig.json 설정

```json
{
  "compilerOptions": {
    "declaration": true,
    "jsx": "react-jsx",
    "lib": ["dom", "dom.iterable", "ESNext", "ESNext.AsyncIterable"],
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["src/tests/**/*"]
}
```

### declaration

- 해당 옵션을 true로 설정해야 빌드할 때 d.ts 파일을 생성한다.

  [https://www.typescriptlang.org/tsconfig/#declaration](https://www.typescriptlang.org/tsconfig/#declaration)

# 로컬 환경에서 테스트

### pnpm link

- `pnpm link` 를 이용하면 라이브러리를 배포하기 전, 로컬 환경에서 라이브러리를 불러와 테스트 할 수 있다.

  [https://pnpm.io/ko/cli/link](https://pnpm.io/ko/cli/link)

# 배포하기

`pnpm build && pnpm publish --no-git-checks` 명령어를 실행하면 npm에 배포할 수 있다.

### 문제점?

배포된 패키지의 `package.json` 을 보면 개발 환경에서만 필요한 의존성들이 추가되어있는 문제가 있다.

이를 해결하기 위해 `pnpm pkg delete devDependencies` 를 실행하면 `package.json` 에 존재하는 `devDependencies` 를 제거할 수 있다.

```bash
$ pnpm build && pnpm pkg delete devDependencies && pnpm publish --no-git-checks
```
