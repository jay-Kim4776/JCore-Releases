# JCore Downloads

### JCore 1.0.26 (2026-09-24)
[JCore-Setup.exe 다운로드](https://github.com/jay-Kim4776/JCore-Releases/releases/download/v1.0.26/JCore-Setup.exe)

EXE를 더블클릭하고 Windows 관리자 권한 요청을 승인하면 설치 화면이 열립니다. 1.0.26 MSI가 내장되어 있으며 프로젝트별 C# 스크립트를 지원합니다. 기존 MSI 직접 설치도 가능합니다. 이 EXE는 아직 코드 서명되지 않아 게시자 확인/SmartScreen 경고가 표시될 수 있습니다. 관리자 자격 증명은 필요합니다.


JCore Windows Service 설치 파일 배포 저장소입니다.

## 다운로드

- [최신 릴리즈](https://github.com/jay-Kim4776/JCore-Releases/releases/latest)
- [JCore 1.0.26 설치 파일 (Windows x64)](https://github.com/jay-Kim4776/JCore-Releases/releases/download/v1.0.26/JCore-1.0.26-x64.msi)

릴리즈의 Assets에서 `.msi` 파일을 다운로드하고 실행하세요. 설치에는 관리자 권한이 필요합니다. .NET Framework 4.8이 필요하며 JCore는 Windows 서비스로 실행됩니다.

업데이트 전 기존 설정과 라이선스를 백업하세요. OPC 및 SDK 기능 사용에는 해당 라이선스가 필요합니다.

함께 제공되는 `.sha256` 파일로 다운로드 파일의 무결성을 확인할 수 있습니다.

```powershell
Get-FileHash .\JCore-1.0.26-x64.msi -Algorithm SHA256
```

이 저장소에는 배포 안내와 설치 파일만 게시합니다. GitHub가 자동으로 표시하는 Source code 압축 파일은 이 배포 저장소의 안내 문서이며 JCore 제품 소스 코드가 아닙니다.
## 관리자 권한 명령 프롬프트로 설치 (Windows 10/11)

더블클릭 설치가 진행되지 않거나 서비스가 등록되지 않는 경우 다음 방법으로 설치하세요.

1. 시작 메뉴에서 `cmd` 또는 **명령 프롬프트**를 검색합니다.
2. 검색 결과의 **명령 프롬프트**를 우클릭하고 **관리자 권한으로 실행**을 선택합니다.
3. 사용자 계정 컨트롤(UAC)에서 **예**를 누릅니다. 관리자 계정 입력을 요구하면 해당 PC의 관리자 계정을 입력합니다.
4. 창 제목에 **관리자: 명령 프롬프트**가 표시되는지 확인합니다.
5. 아래 명령에서 MSI 경로를 실제 다운로드한 파일의 전체 경로로 바꿔 실행합니다. 경로에 공백이 있을 수 있으므로 큰따옴표를 유지하세요.

```cmd
msiexec /i "C:\Users\사용자이름\Downloads\JCore-1.0.26-x64.msi" /L*V "%TEMP%\JCore-install.log"
```

6. 설치 화면에서 **Install / Repair**를 누르고 완료될 때까지 기다립니다.
7. `Win + R`을 눌러 `services.msc`를 실행하고 목록을 새로 고침하여 **JCore** 서비스 등록 및 실행 상태를 확인합니다.

설치에 실패하면 관리자 명령 프롬프트에서 아래 명령으로 로그를 확인하고 지원 담당자에게 전달하세요.

```cmd
notepad "%TEMP%\JCore-install.log"
```

`%TEMP%`는 명령을 실행한 계정의 임시 폴더입니다. 기존 설치를 업데이트하기 전 설정과 라이선스를 백업하세요. 설치 오류가 발생하면 서비스 등록이 롤백될 수 있으므로 로그를 확인하세요.


사용자 매뉴얼: [JCore 사용자 매뉴얼 PDF (한국어, 22쪽)](https://github.com/jay-Kim4776/JCore-Releases/releases/download/v1.0.26/JCore_User_Manual_1.0.26.pdf) — 설치, 계정·인증, 드라이버·태그, OPC/SDK 연결, 라이선스 및 문제 해결 안내.

제품소개서: [JCore 제품소개서 pptx (한국어, 10쪽)](https://github.com/jay-Kim4776/JCore-Releases/releases/download/v1.0.26/JAYON.pptx) — JCore(OPC Server, SDK) 소개.


스크립트 실행에는 SDK 라이선스가 필요합니다. UpdatesUntil 기준일은 2026-09-24 UTC입니다.
