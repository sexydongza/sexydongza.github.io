# MEMORY.md

프로페셔널 웹사이트 개발 루프의 상태와 가드레일을 관리하는 운영 메모리.

## 1. Goal

- GitHub Pages용 프로페셔널 웹사이트 완성
- 반응형 데스크톱 및 모바일 지원
- `Games` 탭 구현
- 키보드와 모바일 터치로 조작 가능한 지렁이 게임 구현
- GitHub Pages 최초 배포
- Step 1의 `[게임 추가 기능:]` 반영

## 2. Required Deliverables

- 프로젝트 루트의 `index.html`
- `styles.css`
- `script.js`
- 필요한 경우 별도 `game.js`
- 필요한 이미지 및 정적 assets
- `AORR.md`
- `MEMORY.md`

## 3. Current Scope

- 정적 HTML, CSS, JavaScript
- 프로페셔널 웹사이트 콘텐츠
- 반응형 레이아웃
- `Games` 탭
- 지렁이 게임
- GitHub Pages 배포

### Target Repository

- GitHub Pages 푸시 및 배포 대상 저장소: `https://github.com/sexydongza/sexydongza.github.io.git`
- 이 저장소가 실제 구현물의 원격 기준이다.

## 4. Out of Scope

- 백엔드 서버
- 데이터베이스
- 로그인 및 회원가입
- 결제
- 사용자 개인정보 수집
- 별도 승인 없는 외부 API
- 별도 승인 없는 프레임워크 전환

## 5. Current State

| 항목 | 값 |
|---|---|
| 현재 상태 | 기본 셸 위에 프로페셔널 콘텐츠와 지렁이 게임 셸이 연결된 상태 |
| 완료한 루프 | 저장소 구조 확인, `AORR.md` 작성, Claude Code CLI 확인, `MEMORY.md` 작성, 기본 사이트 셸 생성, 로컬 서버 200 확인, 콘텐츠 섹션 확장, 연락처/이력 카드 정리, 게임 셸 연결, 임시 프로필 데이터 입력 |
| 다음 루프 | 브라우저에서 키보드/터치 조작과 게임 오버 동작 확인 |
| 현재 Retry 횟수 | 0 |
| 현재 오류 fingerprint | 없음 |
| Blocker | 없음 |
| 마지막 정상 상태 | `index.html`, `styles.css`, `script.js`가 로드되고 임시 프로필 데이터가 채워진 상태 |

## 6. Guardrails

- 기존 개인 콘텐츠 임의 삭제 금지
- 확인되지 않은 경력이나 프로젝트 정보 생성 금지
- 테스트 삭제 또는 완화 금지
- 토큰 출력 금지
- 토큰을 HTML, CSS, JavaScript에 저장 금지
- 토큰을 Git에 커밋 금지
- `github_token.txt` 커밋 금지
- `env_settings.txt` 커밋 금지
- 백엔드 기능 추가 금지
- 대규모 리팩토링 금지
- 테스트를 통과시키기 위한 기능 제거 금지

## 7. Acceptance Criteria

- 루트 `index.html` 존재
- 로컬 정적 서버에서 정상 로드
- CSS와 JavaScript 정상 로드
- 콘솔 오류 없음
- 모바일 및 데스크톱에서 레이아웃 정상
- `Games` 탭 정상 이동
- 지렁이 게임 정상 실행
- 키보드 조작 정상
- 모바일 터치 조작 정상
- 점수 및 재시작 정상
- GitHub Pages에서 HTTP 200 응답
- 배포된 사이트에서도 동일 기능 정상

## 8. Retry Policy

- 하나의 오류당 최대 3회
- 동일 오류 fingerprint 2회 반복 시 중지
- 한 번의 Retry에서 하나의 원인만 수정
- Retry마다 동일 Verifier 재실행

## 9. HITL Conditions

- 개인 프로필 내용 불명확
- 기존 콘텐츠 삭제 필요
- 요구사항 충돌
- GitHub 저장소 권한 부족
- GitHub Pages 설정 변경 필요
- 외부 서비스 추가 필요
- Retry 한계 도달

## 10. Tool Policy

- Codex는 작업 제어, 파일 수정, 테스트 실행 담당
- 가능하면 Claude Code CLI를 독립 Verifier로 사용
- 실제 사용한 Claude 모델명 기록
- 토큰 값은 어떠한 실행 기록에도 남기지 않음

### 현재 도구 상태

- `claude` CLI 사용 가능
- `claude --version` 확인됨
- `claude doctor` 확인됨
- `claude auth status` 로그인 상태 확인됨
- Sonnet 5 사용 가능 여부 확인됨
- 실제 확인된 모델명: `Sonnet 5`, `claude-sonnet-5`

## 11. Execution Log Template

```text
Loop ID:
시작 시각:
목표:
시작 상태:
가설:
Act:
변경 파일:
Verifier:
테스트 결과:
exit code:
오류 fingerprint:
Retry 횟수:
종료 상태:
다음 작업:
사람 확인 필요 항목:
```

## 12. Repository Notes

- 현재 루트에는 아직 웹사이트 구현 파일이 없다.
- 확인된 주요 파일은 `README.md`, `AORR.md`, `MEMORY.md`, `github_token.txt`, `claude-code-cli/`, `실습/`이다.
- 웹사이트 구현을 시작하면 루트에 `index.html`, `styles.css`, `script.js`를 우선 생성해야 한다.
- 푸시 대상 원격 저장소는 `https://github.com/sexydongza/sexydongza.github.io.git` 이다.
- 현재 첫 루프에서는 `index.html`, `styles.css`, `script.js`를 생성했고, 이후 콘텐츠와 게임 셸, 임시 프로필 데이터를 확장했다.

## 13. Latest Loop Result

- Loop ID: `loop-1-basic-shell`
- 목적: GitHub Pages용 정적 사이트 기본 구조 생성 및 로컬 응답 확인
- 시작 상태: 루트 셸 파일 생성 직후
- 가설: `index.html`, `styles.css`, `script.js` 연결과 `Games` 섹션은 정상일 것이다
- Act: 파일 생성 및 최소 반응형 내비게이션 추가, 이후 프로필 섹션, 연락처 구조, 게임 셸, 임시 프로필 데이터 확장
- 변경 파일: `index.html`, `styles.css`, `script.js`, `MEMORY.md`
- Verifier: Node 기반 로컬 HTTP 응답 확인
- 테스트 결과: `index.html`, `styles.css`, `script.js` 모두 HTTP 200, 콘텐츠와 게임 셸, 임시 프로필 데이터 추가 후 구조 유지
- exit code: 0
- 오류 fingerprint: 없음
- Retry 횟수: 0
- 종료 상태: `PASSED`
- 다음 작업: 브라우저에서 키보드/터치 조작과 게임 오버 동작 확인
- 사람 확인 필요 항목: 임시 데이터는 실제 개인 정보로 교체 필요 [사람 확인 필요]

### 14. Latest Game Loop Result

- Loop ID: `loop-2-snake-shell`
- 목적: 지렁이 게임 기본 플레이 루프와 조작 패널 연결
- 시작 상태: 프로필/연락처 구조까지 정리된 상태
- 가설: 게임 셸, 키보드/터치 조작, 점수판, 시작/일시정지/재시작이 연결될 것이다
- Act: `Games` 영역을 캔버스 기반 snake 게임으로 확장
- 변경 파일: `index.html`, `styles.css`, `script.js`, `MEMORY.md`
- Verifier: `node --check script.js`, 로컬 HTTP 응답 확인, Claude Code CLI PASS
- 테스트 결과: `index.html`, `styles.css`, `script.js` HTTP 200, `snake-board`, `game-status`, `game-start`, `data-dir` 포함, `function step()` 정의 확인
- exit code: 0
- 오류 fingerprint: 없음
- Retry 횟수: 0
- 종료 상태: `PASSED`
- 다음 작업: 브라우저에서 실제 키보드/터치 조작과 게임 오버 동작 확인
- 사람 확인 필요 항목: 실제 브라우저에서의 조작감과 난이도 조정 [사람 확인 필요]
