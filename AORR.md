# AORR 상태 머신 설계서

대상: 개인 프로페셔널 웹사이트 + GitHub Pages 정적 배포 + 상단 `Games` 탭 + 지렁이 게임

배포 대상 저장소:
- `https://github.com/sexydongza/sexydongza.github.io.git`

이 문서는 **코드 수정 전 설계 기준**이며, 실제 구현은 아래 상태 머신과 루프 단위로만 진행한다.

## 1. Target

### 프로페셔널 웹사이트 개발 목표
- 개인 소개, 경력, 프로젝트, 연락처를 담은 프로페셔널 웹사이트를 정적으로 구축한다.
- 모바일과 데스크톱에서 모두 읽기 쉽고 탐색 가능한 반응형 레이아웃을 제공한다.
- 상단 내비게이션에 `Games` 탭을 추가하고, 정적 웹사이트 안에서 게임을 실행 가능하게 한다.

### GitHub Pages 배포 목표
- 별도 백엔드 서버 없이 `HTML`, `CSS`, `JavaScript`만으로 동작한다.
- GitHub Pages에서 직접 실행 가능한 정적 사이트 형태를 유지한다.
- 이 문서에서 말하는 푸시/배포 대상은 `https://github.com/sexydongza/sexydongza.github.io.git` 이다.
- 루트 디렉토리에 최소 다음 파일이 존재해야 한다.
  - `index.html`
  - `styles.css`
  - `script.js`
  - 게임 구현에 필요한 추가 JavaScript 파일 또는 `script.js` 내부 게임 코드

### 입력 자료
- 이름, 소개, 경력, 프로젝트, 연락처, SNS 링크
- 프로필 이미지 또는 대체 텍스트
- 선호 색상, 톤, 타이포그래피 방향
- `Games` 탭 표시 방식
- 지렁이 게임 규칙
  - 이동 규칙
  - 먹이 생성 규칙
  - 점수 규칙
  - 충돌 규칙
  - 재시작 규칙
- [사람 확인 필요] 개인 콘텐츠의 최종 문구와 공개 범위

### 필수 페이지와 섹션
- 홈/소개 섹션
- About 또는 Profile 섹션
- Skills 또는 Tech Stack 섹션
- Projects 섹션
- Contact 섹션
- `Games` 섹션 또는 `Games` 전용 화면
- 게임 설명, 시작, 일시정지, 재시작 UI

### Games 탭 및 지렁이 게임 요구사항
- `Games` 탭은 상단 내비게이션에 항상 보이도록 한다.
- 키보드 입력으로 지렁이를 조작할 수 있어야 한다.
- 모바일 터치 입력으로도 조작할 수 있어야 한다.
- 게임은 정적 페이지 내부에서 동작해야 한다.
- 게임 오버, 점수, 재시작이 가능해야 한다.
- 입력 충돌 방지, 즉시 반대 방향 전환 금지 등 기본 게임 안정성을 고려한다.
- [사람 확인 필요] 스와이프 조작 방식과 화면 하단 버튼 방식 중 어떤 방식을 우선할지

### 데스크톱 및 모바일 완료 기준
- 320px, 375px, 768px, 1024px, 1440px에서 레이아웃이 깨지지 않는다.
- 가로 스크롤이 생기지 않는다.
- 메뉴가 잘리지 않고 탭 전환이 가능하다.
- 게임이 키보드와 터치에서 모두 동작한다.
- 주요 인터랙션이 브라우저 콘솔 오류 없이 작동한다.
- GitHub Pages 경로에서 자산 로딩이 정상이다.

## 2. Act

### 한 번의 개발 루프에서 수행할 최소 작업
- 하나의 실패 원인만 수정한다.
- 관련된 최소 파일만 변경한다.
- 변경 후 동일한 Verifier를 다시 실행한다.
- 통과한 기능에 대해서는 회귀 테스트를 짧게 다시 확인한다.

### 수정 가능한 파일 범위
- 현재 루프의 원인과 직접 관련된 최소 파일만 수정한다.
- 기본적으로는 `index.html`, `styles.css`, `script.js` 및 게임 관련 보조 JS만 수정한다.
- 이미지, 폰트, 아이콘 등의 정적 자산은 필요한 경우에만 추가한다.

### 생성할 수 있는 파일
- `index.html`
- `styles.css`
- `script.js`
- `game.js` 또는 게임용 모듈 파일
- `assets/` 내부의 이미지, 아이콘, SVG 등
- `README.md` 또는 배포 안내 문서
- [사람 확인 필요] 외부 라이브러리 사용 여부

### 실행 가능한 로컬 검증 명령어
- 정적 서버 실행: `python -m http.server 8000`
- 브라우저 확인: `http://localhost:8000`
- HTML 검사: `npx htmlhint index.html`
- CSS 검사: `npx stylelint styles.css`
- JavaScript 검사: `npx eslint script.js`
- 수동 검증:
  - 데스크톱 창 크기 변경
  - 모바일 디바이스 에뮬레이션
  - 키보드 조작
  - 터치 조작
- [사람 확인 필요] 실제 프로젝트에 사용 가능한 패키지 매니저와 검사 도구

## 3. Observe

### 확인 항목
- 파일 생성 여부
- HTML 구조 오류
- CSS 반응형 오류
- JavaScript 런타임 오류
- 로컬 웹서버 응답 상태
- 브라우저 콘솔 오류
- 데스크톱 화면 깨짐 여부
- 모바일 화면 깨짐 여부
- 키보드 게임 조작 가능 여부
- 터치 게임 조작 가능 여부
- GitHub Pages 호환성

### 관측 방법
- 파일 존재 여부는 파일 시스템에서 확인한다.
- HTML/CSS/JS 오류는 린터, 브라우저 콘솔, 화면 동작으로 확인한다.
- 서버 응답은 로컬 정적 서버 접속으로 확인한다.
- 게임 조작은 실제 입력으로 확인한다.
- GitHub Pages 호환성은 절대 경로 의존 여부, 정적 파일 의존 여부, 대소문자 경로 문제로 확인한다.

## 4. Reason

실패 원인 분류는 다음 중 하나만 사용한다.

- `HTML_STRUCTURE`
  - DOM 구조, 시맨틱 태그, 링크, 섹션 배치 문제
- `CSS_RESPONSIVE`
  - 반응형 레이아웃, 오버플로우, 미디어 쿼리, 모바일 깨짐
- `JAVASCRIPT`
  - 문법 오류, 런타임 예외, 상태 관리 실패
- `GAME_LOGIC`
  - 이동, 성장, 충돌, 점수, 생성 규칙 오류
- `GAME_CONTROL`
  - 키보드, 터치, 포커스, 입력 충돌 문제
- `CONTENT`
  - 소개, 경력, 프로젝트, 연락처, 문구 부정확성
- `TEST`
  - 검증 명령 누락, 재현성 부족, 테스트 기준 미달
- `ENVIRONMENT`
  - 로컬 서버, Node, 경로, 브라우저, OS 환경 문제
- `GITHUB_PERMISSION`
  - 인증, 권한, 토큰, 저장소 접근 문제
- `DEPLOYMENT`
  - GitHub Pages 빌드/배포/경로 문제
- `UNKNOWN`
  - 분류 불가, 추가 관찰 필요

### 분류 기준
- 에러가 DOM 구조 또는 링크 문제면 `HTML_STRUCTURE`
- 화면 배치가 무너지면 `CSS_RESPONSIVE`
- 코드 실행이 실패하면 `JAVASCRIPT`
- 게임의 규칙이 틀리면 `GAME_LOGIC`
- 입력은 되지만 조작 결과가 이상하면 `GAME_CONTROL`
- 개인 정보나 소개 문구가 불명확하면 `CONTENT`
- 검증 절차가 빠졌거나 증명되지 않으면 `TEST`
- 로컬 실행 환경 차이이면 `ENVIRONMENT`
- GitHub 인증 실패면 `GITHUB_PERMISSION`
- Pages 경로/정적 배포 문제면 `DEPLOYMENT`

## 5. Repeat

- 한 번에 하나의 실패 원인만 수정한다.
- 관련된 최소 파일만 변경한다.
- 수정 후 동일한 Verifier를 다시 실행한다.
- 통과한 기능에 대한 회귀 테스트를 최소한으로 반복한다.
- 연쇄 수정이 필요해 보여도 원인을 먼저 분리한다.
- 동일 증상이 다시 보이면 이전 가설을 버리고 새로 분류한다.

## 6. Stop

다음 중 하나면 해당 루프 또는 전체 작업을 멈춘다.

- 전체 테스트가 통과한 경우
- 최대 Retry에 도달한 경우
- 동일한 오류 fingerprint가 2회 반복된 경우
- 개인정보나 콘텐츠 확인이 필요한 경우
- GitHub 인증 문제가 발생한 경우
- 배포 권한 또는 Pages 설정 문제가 발생한 경우

## 7. Human-in-the-loop

다음 상황에서는 `[사람 확인 필요]` 상태로 멈춘다.

- 이름, 소개, 경력, 프로젝트 등 개인 콘텐츠가 불명확한 경우
- 기존 콘텐츠 삭제가 필요한 경우
- 외부 분석 도구나 외부 서비스를 추가해야 하는 경우
- GitHub 저장소 설정을 변경해야 하는 경우
- 요구사항이 충돌하는 경우
- [사람 확인 필요] 게임 규칙이 2개 이상 충돌하는 경우
- [사람 확인 필요] 모바일 조작을 스와이프와 버튼 중 하나로 확정해야 하는 경우

## 8. AORR 상태 정의

### 상태 의미
- `READY`
  - 다음 루프를 시작할 준비가 된 상태
- `ACTING`
  - 최소 한 가지 변경을 수행 중인 상태
- `VERIFYING`
  - 변경 후 검증을 수행 중인 상태
- `RETRYING`
  - 실패 원인을 수정하고 같은 검증을 다시 수행하는 상태
- `PASSED`
  - 현재 루프의 검증이 통과한 상태
- `DEPLOY_READY`
  - 배포 전 검증이 통과하고 배포만 남은 상태
- `DEPLOYING`
  - GitHub Pages 배포를 진행 중인 상태
- `DEPLOYED`
  - 배포가 성공적으로 반영된 상태
- `BLOCKED`
  - 환경 또는 권한 문제로 진행 불가한 상태
- `HITL_REQUIRED`
  - 사람 확인 없이는 안전하게 진행할 수 없는 상태

### 전이 원칙
- `READY -> ACTING -> VERIFYING -> PASSED`
- 실패 시 `VERIFYING -> RETRYING -> ACTING`
- 배포 가능 시 `PASSED -> DEPLOY_READY -> DEPLOYING -> DEPLOYED`
- 권한/환경 문제 시 `ANY -> BLOCKED`
- 콘텐츠 불명확성 시 `ANY -> HITL_REQUIRED`

## 9. 루프 분해표

아래 루프는 프로젝트를 실제로 구현할 때의 추천 순서다.

| 단계 | 시작 상태 | 입력 | Act | Observe | 출력 | 테스트 기준 | 다음 상태 |
|---|---|---|---|---|---|---|---|
| 저장소 및 기존 파일 확인 | READY | 원격 저장소 URL, 현재 루트 파일 목록, README, 기존 산출물 | 저장소 구조 확인, 파일 수집, 누락 기능 파악 | 루트에 어떤 파일이 실제로 있는지, 현재 정적 사이트가 비어 있는지 확인 | 프로젝트 현실 상태 요약 | 루트 구조와 빈 파일 여부를 정확히 파악 | PASSED |
| 정적 사이트 기본 구조 | READY | 사이트맵, 섹션 순서, 반응형 기준 | `index.html` 뼈대와 기본 레이아웃 작성 | 시맨틱 구조, 첫 화면 구성, 헤더/푸터 확인 | 홈 셸 구조 | 주요 섹션이 DOM에 존재 | PASSED |
| 프로페셔널 콘텐츠 영역 | READY | 이름, 소개, 경력, 프로젝트, 연락처, 이미지 [사람 확인 필요] | About, Projects, Contact 배치 | 콘텐츠 길이, 가독성, 링크 유효성 확인 | 프로필 콘텐츠 영역 | 정보가 빠지지 않고 읽기 쉬움 | PASSED |
| 반응형 내비게이션 | READY | 메뉴 항목, 모바일 기준, 브레이크포인트 | 헤더/탑바 반응형화, 햄버거나 축약 메뉴 적용 | 좁은 화면에서 메뉴가 잘리는지 확인 | 반응형 내비게이션 | 320px에서 메뉴 접근 가능 | PASSED |
| Games 탭 | READY | 탭 진입 방식, 게임 소개 문구 | `Games` 탭/섹션 연결 | 탭 전환, 활성 상태, 직접 진입 확인 | 게임 진입점 | 탭이 항상 보이고 접근 가능 | PASSED |
| 지렁이 게임 핵심 로직 | READY | 맵 크기, 점수, 충돌, 성장 규칙 [사람 확인 필요] | 게임 루프, 이동, 먹이, 성장, 충돌, 재시작 구현 | 게임이 멈추지 않는지, 규칙이 맞는지 확인 | 실행 가능한 게임 로직 | 먹이/성장/종료/재시작 작동 | PASSED |
| 키보드 조작 | READY | 방향키 또는 WASD, 입력 전환 규칙 | 키 이벤트 연결, 반대 방향 금지, 포커스 처리 | 키 입력 시 방향 변경 확인 | 키보드 조작 가능 | 키보드로 안정적 조작 가능 | PASSED |
| 모바일 터치 조작 | READY | 스와이프 또는 버튼 방식 [사람 확인 필요] | 터치 이벤트 또는 버튼 UI 연결 | 모바일 에뮬레이션에서 조작 확인 | 터치 조작 가능 | 손가락 입력으로 정상 이동 | PASSED |
| 게임 UI 및 점수 | READY | 점수 표시, 상태 메시지, 재시작 버튼 | HUD, 점수판, 안내 문구 추가 | 점수/게임오버/재시작 표시 확인 | 게임 UI 완성 | 사용자가 현재 상태를 이해 가능 | PASSED |
| 접근성과 반응형 검증 | READY | 접근성 기준, 브레이크포인트 | 대비, 포커스, 대체 텍스트, 레이아웃 안정화 | 데스크톱/모바일, 키보드/스크린리더 관점 점검 | 접근성 보강 | 주요 상호작용이 접근 가능 | PASSED |
| GitHub Pages 호환성 검증 | READY | 정적 경로 규칙, 상대 경로, 파일명 대소문자 | GitHub Pages 호환성 확인 | 절대 경로, 빌드 없음, 파일 누락 여부 확인 | 배포 가능성 판단 | Pages에서 깨질 요소가 없음 | DEPLOY_READY |
| 배포 | DEPLOY_READY | GitHub 인증/권한 [사람 확인 필요] | Pages 배포 실행 | 배포 URL 응답 및 갱신 확인 | 배포 완료 결과 | 배포 URL에서 정상 동작 | DEPLOYED |

## 10. 권장 첫 루프

가장 안전한 첫 루프는 **저장소 및 기존 파일 확인**이다.

이유:
- 현재 저장소가 비어 있거나 최소 상태일 수 있다.
- 개인 콘텐츠와 게임 요구사항이 아직 확정되지 않았을 수 있다.
- 구조를 먼저 확인해야 이후 파일 추가가 안전하다.
- GitHub Pages 호환성 문제를 초기에 피할 수 있다.

### 첫 루프의 권장 작업 범위
- 저장소 파일 구조 확인
- 루트에 필요한 파일 존재 여부 확인
- `Games` 요구사항과 개인 콘텐츠 확정 필요 항목 분리
- [사람 확인 필요] 이름, 소개, 프로젝트 목록, 게임 규칙 확인

## 11. 구현 메모

- 정적 웹사이트이므로 백엔드 의존은 금지한다.
- 게임 코드는 초기에는 단일 `script.js`에 넣어도 되지만, 복잡해지면 별도 파일로 분리할 수 있다.
- GitHub Pages 경로는 상대 경로 중심으로 설계한다.
- 모바일 우선으로 레이아웃과 조작을 설계한다.
- 게임 기능은 시각적 멋보다 조작 안정성과 재현성을 우선한다.
## Self-Correcting TDD Loop

This section defines the verifier-first loop for the static GitHub Pages site. It is designed to be self-correcting: each retry fixes exactly one root cause, then reruns the same verifier before moving on.

### Verified tool inventory in the current environment

Confirmed available now:

- `node` 24.18.0
- `npm`
- `npx`
- `git` 2.37.0.1
- `claude` 2.1.208 (Claude Code)

Not detected in the current environment:

- `python`
- `python3`
- `htmlhint`
- `stylelint`
- `eslint`
- `claude-code`

Implication:

- Do not assume `python3 -m http.server`, `npx htmlhint`, `npx stylelint`, `npx eslint`, or Claude Code CLI are available unless a preflight command-existence check confirms them.
- If a required verifier is missing, classify the failure as `ENVIRONMENT` or `TEST` depending on whether the tool absence blocks execution or the test definition itself is incomplete.

### Verifier-first policy

1. Check the existence of the target files before any deeper validation.
2. Run the cheapest verifier first.
3. Fix only one root cause per retry.
4. Rerun the same verifier after each fix.
5. Preserve all previously passing checks.
6. Stop when the retry limit or fingerprint limit is reached.

### Self-correcting loop states

- `READY`
  - Verifier not yet started.
- `ACTING`
  - One minimal change is being applied.
- `VERIFYING`
  - The selected verifier is running or about to run.
- `RETRYING`
  - The same verifier is being rerun after a single focused fix.
- `PASSED`
  - The current verifier passed.
- `BLOCKED`
  - Environment, permissions, or deployment constraints prevent progress.
- `HITL_REQUIRED`
  - Human confirmation is required before continuing.

### Loop order

| Order | Scope | Verifier | Input | Pass criteria | Failure reason class | Next state |
|---|---|---|---|---|---|---|
| 1 | Tool discovery | Command existence checks | Local shell environment | Required verifier exists before use | `ENVIRONMENT`, `TEST` | `READY` or `BLOCKED` |
| 2 | Basic file verification | File listing and path checks | Repository root | `index.html`, `styles.css`, `script.js` exist or are intentionally missing with a documented reason | `HTML_STRUCTURE`, `ENVIRONMENT` | `PASSED` or `RETRYING` |
| 3 | HTML verification | HTML parser or browser DOM inspection | `index.html` | Document skeleton, `title`, `meta viewport`, semantic tags, nav, `Games`, image `alt`, internal links are valid | `HTML_STRUCTURE`, `CONTENT` | `PASSED` or `RETRYING` |
| 4 | CSS verification | Browser render inspection across viewports | `styles.css` + rendered page | No horizontal scroll; desktop/tablet/mobile layouts are stable; nav and `Games` UI remain usable | `CSS_RESPONSIVE` | `PASSED` or `RETRYING` |
| 5 | JavaScript verification | Syntax/runtime inspection | `script.js` and any game JS | No syntax errors, no console errors, no null dereferences, no duplicate listeners on load | `JAVASCRIPT`, `TEST` | `PASSED` or `RETRYING` |
| 6 | Game verification | In-page interaction checks | `script.js` + game UI | Start, pause, restart, scoring, food spawn, wall/self collision, and controls work | `GAME_LOGIC`, `GAME_CONTROL` | `PASSED` or `RETRYING` |
| 7 | Local run verification | Static server response check | Local HTTP server | The site serves `index.html`, CSS, and JS over HTTP | `ENVIRONMENT`, `TEST` | `PASSED` or `BLOCKED` |
| 8 | Browser verification | Viewport rendering check | Mobile, tablet, desktop sizes | Approx. 375px, 768px, 1440px are all usable | `CSS_RESPONSIVE`, `HTML_STRUCTURE` | `PASSED` or `RETRYING` |
| 9 | GitHub Pages compatibility | Path and hosting constraints review | Static assets and page references | Root `index.html`, relative paths, no backend, no local filesystem dependency, no server-only APIs | `DEPLOYMENT`, `HTML_STRUCTURE`, `ENVIRONMENT` | `DEPLOY_READY` |
| 10 | Claude Code CLI verifier | CLI-driven independent verification | Claude Code CLI environment | CLI exists, version check passes, doctor passes, and the selected model is recorded | `ENVIRONMENT`, `GITHUB_PERMISSION` | `PASSED`, `BLOCKED`, or `HITL_REQUIRED` |

### Required failure log fields

For every failed verifier run, record:

- `command`
- `exit_code`
- `failed_check`
- `core_error_message`
- `related_files_and_lines`
- `browser_console_messages`
- `error_fingerprint`

Fingerprint guidance:

- Normalize the error class, file path, and first stable error message.
- Treat the same root cause as the same fingerprint even if the line number shifts slightly.
- If the same fingerprint repeats twice, stop and escalate.

### Retry policy

- Maximum retries per root cause: 3
- One retry fixes one root cause only
- Change only the minimal related files
- Do not delete tests or loosen assertions to make them pass
- Do not rewrite unrelated site areas
- Do not switch frameworks
- After each retry, rerun the same verifier before any broader regression check
- Preserve the last known good behavior for all previously passed verifiers

### Verification details by category

#### 1) Basic file verification

Check:

- `index.html` exists at the repository root
- CSS and JavaScript are linked correctly
- Relative paths resolve from the GitHub Pages root
- No local-only absolute file paths are present
- File names match exact case, including `index.html`

Failure examples:

- broken `href`/`src`
- uppercase/lowercase mismatch
- `file:///` or Windows absolute path usage

#### 2) HTML verification

Check:

- valid document structure
- `title`
- `meta name="viewport"`
- semantic regions such as `header`, `main`, `section`, `nav`, `footer`
- navigation links
- `Games` area
- image `alt` text
- internal links are not broken

#### 3) CSS verification

Check:

- desktop render
- tablet render
- mobile render
- no horizontal scrolling
- nav remains usable
- `Games` UI stays aligned and tappable

#### 4) JavaScript verification

Check:

- syntax errors
- browser console errors
- null DOM references
- duplicate event listeners
- page-load runtime errors

#### 5) Game verification

Check:

- game starts
- pause works
- restart works
- score increases
- food spawns
- wall collision and self-collision end the game
- keyboard arrows or WASD work
- mobile buttons or touch work
- immediate reverse-direction prevention works
- reopening `Games` does not start duplicate loops

#### 6) Local run verification

Preferred when available:

- `python3 -m http.server` or equivalent static server

If `python3` is not available, do not invent a replacement. Mark the failure as `ENVIRONMENT` and use a documented available server tool only if one already exists.

Check:

- HTTP responds
- `index.html` loads
- CSS responds
- JavaScript responds

#### 7) Browser verification

If a browser automation tool is available, verify:

- mobile viewport around 375px
- tablet viewport around 768px
- desktop viewport around 1440px

If no browser automation tool is available, this step becomes `HITL_REQUIRED` for manual browser review.

#### 8) GitHub Pages compatibility

Check:

- root `index.html`
- relative static paths
- no server-only functionality
- no local filesystem dependency
- no backend API dependency

### Reason classification

Use exactly one of the following:

- `HTML_STRUCTURE`
- `CSS_RESPONSIVE`
- `JAVASCRIPT`
- `GAME_LOGIC`
- `GAME_CONTROL`
- `CONTENT`
- `TEST`
- `ENVIRONMENT`
- `GITHUB_PERMISSION`
- `DEPLOYMENT`
- `UNKNOWN`

### Stop conditions

Stop the loop when any of the following is true:

- all required verifiers pass
- retry limit is reached
- the same error fingerprint repeats twice
- a content decision requires human input
- GitHub authentication fails
- deployment permissions or Pages settings block progress

### Claude Code CLI verifier policy

Use Claude Code CLI as an independent verifier only when the CLI is actually installed and reachable from the shell.

Required preflight:

1. confirm `claude` exists
2. confirm `claude --version`
3. confirm `claude doctor`
4. confirm `claude auth status` shows a logged-in session when model execution is required

Model policy:

- check whether Sonnet 5 is available in the installed Claude Code CLI
- use Sonnet 5 when the CLI confirms it is available
- if a different Sonnet alias or model is selected, record the exact model name reported by the CLI
- do not guess the model name

Current environment note:

- `claude` is detected in the current environment and `claude doctor` passes.
- `claude auth status` is logged in through `claude.ai`.
- Sonnet 5 is available and verified via `--model sonnet` and `--model claude-sonnet-5`.
