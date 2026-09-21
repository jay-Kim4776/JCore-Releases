# JCore Downloads

JCore Windows Service 설치 파일 배포 저장소입니다.

## 다운로드

- [최신 릴리즈](https://github.com/jay-Kim4776/JCore-Releases/releases/latest)
- [JCore 1.0.24 설치 파일 (Windows x64)](https://github.com/jay-Kim4776/JCore-Releases/releases/download/v1.0.24/JCore-1.0.24-x64.msi)

릴리즈의 Assets에서 `.msi` 파일을 다운로드하고 실행하세요. 설치에는 관리자 권한이 필요합니다. .NET Framework 4.8이 필요하며 JCore는 Windows 서비스로 실행됩니다.

업데이트 전 기존 설정과 라이선스를 백업하세요. OPC 및 SDK 기능 사용에는 해당 라이선스가 필요합니다.

함께 제공되는 `.sha256` 파일로 다운로드 파일의 무결성을 확인할 수 있습니다.

```powershell
Get-FileHash .\JCore-1.0.24-x64.msi -Algorithm SHA256
```

이 저장소에는 배포 안내와 설치 파일만 게시합니다. GitHub가 자동으로 표시하는 Source code 압축 파일은 이 배포 저장소의 안내 문서이며 JCore 제품 소스 코드가 아닙니다.