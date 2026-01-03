# Claude Code 작업 가이드

## 커밋 규칙

이 프로젝트는 **Conventional Commits** 규격을 따릅니다.

### 커밋 메시지 형식

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type

- **feat**: 새로운 기능 추가
- **fix**: 버그 수정
- **docs**: 문서 수정
- **style**: 코드 포맷팅, 세미콜론 누락 등 (코드 변경 없음)
- **refactor**: 코드 리팩토링
- **test**: 테스트 코드 추가/수정
- **chore**: 빌드 프로세스, 라이브러리 업데이트 등

### Scope (선택사항)

- `ingredients`: 재료 관리 관련
- `recipes`: 레시피 관련
- `budget`: 가계부 관련
- `calendar`: 캘린더 관련
- `ui`: UI 컴포넌트 관련
- `deps`: 의존성 관련

### Subject

- 50자 이내로 작성
- 명령형으로 작성 (예: "add" not "added")
- 첫 글자는 소문자
- 마침표 없음

### Body (선택사항)

- 변경 이유와 변경 전과의 차이점 설명
- 72자마다 줄바꿈

### Footer (선택사항)

- Breaking changes나 이슈 참조

## 커밋 예시

### 기능 추가
```
feat(ingredients): add price chart with 30-day history

- Implement stock-style price tracking
- Add recharts for visualization
- Show price trends with area chart
```

### 버그 수정
```
fix(calendar): correct date calculation for meal plans

Fixed off-by-one error in date calculation that caused
meals to appear on wrong days.
```

### 의존성 추가
```
chore(deps): add recharts library

Add recharts for price trend visualization in ingredients page.
```

### 리팩토링
```
refactor(ui): extract navigation to separate component

Move navigation logic from layout to dedicated component
for better maintainability.
```

## 개발 워크플로우

1. 기능 개발 또는 버그 수정
2. 변경사항을 논리적 단위로 스테이징
3. Conventional Commits 형식으로 커밋
4. 관련 변경사항은 하나의 커밋으로 묶기
5. 큰 기능은 여러 커밋으로 나누되, 각 커밋은 독립적으로 동작해야 함

## 주의사항

- 커밋 메시지는 명확하고 설명적으로 작성
- 한 커밋에 여러 타입의 변경사항을 섞지 않기
- Breaking changes는 반드시 footer에 명시
- 커밋은 작고 집중적으로 유지
