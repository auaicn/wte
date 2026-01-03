# 프로젝트 규칙

## Git 커밋 컨벤션

### Conventional Commits 준수

모든 커밋 메시지는 [Conventional Commits](https://www.conventionalcommits.org/) 규격을 따라야 합니다.

#### 기본 구조

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### Type 종류

| Type | 설명 | 예시 |
|------|------|------|
| `feat` | 새로운 기능 추가 | `feat: add user authentication` |
| `fix` | 버그 수정 | `fix: resolve login error` |
| `docs` | 문서 수정 | `docs: update README` |
| `style` | 코드 스타일 변경 (기능 변경 없음) | `style: format code with prettier` |
| `refactor` | 코드 리팩토링 | `refactor: simplify validation logic` |
| `perf` | 성능 개선 | `perf: optimize image loading` |
| `test` | 테스트 추가/수정 | `test: add unit tests for auth` |
| `chore` | 빌드/설정 변경 | `chore: update dependencies` |

#### Scope 예시

- `ingredients` - 재료 관리 기능
- `recipes` - 레시피 기능
- `budget` - 가계부 기능
- `calendar` - 캘린더 기능
- `ui` - UI 컴포넌트
- `deps` - 의존성

#### 작성 규칙

1. **제목 (Subject)**
   - 명령형 현재 시제 사용 ("add" not "added" or "adds")
   - 첫 글자 소문자
   - 마침표 없음
   - 50자 이내

2. **본문 (Body)**
   - 선택사항
   - 변경 이유와 이전 동작과의 차이 설명
   - 72자마다 줄바꿈
   - 명령형 현재 시제 사용

3. **푸터 (Footer)**
   - 선택사항
   - Breaking Changes: `BREAKING CHANGE: <description>`
   - 이슈 참조: `Fixes #123`, `Closes #456`

### 커밋 예시

#### 좋은 예시 ✅

```bash
feat(ingredients): add price trend chart

- Implement 30-day price history tracking
- Add area chart visualization with recharts
- Show price change percentage
```

```bash
fix(calendar): correct meal plan date calculation

Fixed off-by-one error that caused meals to display
on incorrect dates in the calendar view.

Fixes #42
```

```bash
chore(deps): add recharts for data visualization
```

#### 나쁜 예시 ❌

```bash
# Type이 없음
Added some features
```

```bash
# 설명이 불명확함
feat: update
```

```bash
# 과거형 사용
feat: added price chart
```

```bash
# 마침표 사용
feat: add price chart.
```

## 브랜치 전략

- `main` - 프로덕션 브랜치
- `feature/<name>` - 새 기능 개발
- `fix/<name>` - 버그 수정
- `refactor/<name>` - 리팩토링

## 코드 스타일

- ESLint 규칙 준수
- Prettier로 포맷팅
- TypeScript strict 모드 사용

## Pull Request

- PR 제목도 Conventional Commits 형식 사용
- 변경사항 설명 필수
- 관련 이슈 링크 필수

## 참고 자료

- [Conventional Commits 공식 사이트](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
