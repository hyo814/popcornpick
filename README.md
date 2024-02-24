# (주)온코메드 코테 (PopcornPick)

## 과제 목적 : 최신 영화 정보를 제공하는 웹 애플리케이션

### 요구 사항 버젼
- React 버전 18 이상이 필요합니다.
- React DOM 버전도 18 이상이 필요합니다.
- Next.js는 버전 13.0.0을 사용하고 있습니다.
- @tanstack/react-query 버전은 5.22.2 이상이 요구됩니다.
- axios는 버전 1.6.7 이상이 필요합니다.
- recoil 상태 관리 라이브러리는 버전 0.7.7 이상이 필요합니다.
- Node.js와 관련된 타입 정의를 위해 @types/node 버전 20 이상이 필요합니다.
- TypeScript는 버전 5 이상을 사용하고 있습니다.
- eslint는 코드 품질을 관리하기 위해 버전 8 이상이 필요합니다.
- eslint-config-next는 Next.js와 함께 사용되며 버전 14.1.0을 사용하고 있습니

### 설치 방법
- 아래 명령어를 실행하여 node 모듈을 설치합니다.
  ```
  $ yarn install
  ```
- node 모듈 설치가 완료되면, 아래 명령어로 API 서버를 실행합니다.
  ```
  $ yarn dev
  ```
- http://localhost:3000 로 접속하여 API 확인이 가능합니다.
 
### 소스 파일 구조
```text
📁 project_root
├── 📁 public
├── 📁 src
│   ├── 📁 components
│   │   ├── MovieSelectAskBox.tsx
│   │   ├── MovieAnswerBox.tsx
│   │   ├── MovieList.tsx
│   │   └── MoviePagination.tsx
│   ├── 📁 pages
│   │   ├── 📁 api
│   │   │   └── movie.ts
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
│   ├── 📁 state
│   │   └── index.ts
│   └── 📁 styles
│       ├── globals.css
│       └── index.module.css
├── 📁 types
│   └── index.ts
├── .env.local
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json

```

### 요청 받은 과제
1. 아래는 현재 상영중인 영화 정보 리스트를 보여주는 API입니다.React-Query를 이용해서 아래 API를 화면에 나열해 주시면 됩니다.(혹여나 React-Query가 익숙하지 않으면 다른 방법으로 구현하셔도 됩니다)
> react-query && recoil 을 통해서 해결 완료!

구현조건
**1. 상위차순, 하위차순 정렬 기능과 Query Params에서 제공된 언어를 선택할수 있는 기능이 있어야 합니다,**
> MovieAskBox.tsx (select 를 통해서 선택 할 수 있도록 함)

**3. Pagination을 기능을 구현해 주시면 됩니다.** 
> MoviePagination.tsx (페이지내이션 기능 구현)
 
**2. 각각의 영화에 표시될 내용은 Poster, Title, description, genres, vote_average(별모양으로 표시) 내용을 화면에 구현할 것.**
> MovieAnswerBox.tsx (API 정보)
