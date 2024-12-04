# KrononLabs

## 프로젝트 개요
이 프로젝트는 Binance Spot Exchange의 기능을 구현한 모바일 애플리케이션입니다. 코인 목록, 주문서에서의 가격 선택 및 차트 시각화 기능을 제공합니다. ReactNative, EXPO, Tanstack Query, Recoil을 사용하여 개발되었습니다.

## 목차
1. [프로젝트 구조](#프로젝트-구조)
2. [기능](#기능)
3. [미리보기](#미리보기)
4. [사용 기술](#사용기술)
5. [설치 및 실행 방법](#설치-및-실행-방법)
6. [Troubleshooting](#troubleshooting) 

<br/>

## 프로젝트 구조

```
root/
├── app/                  # 메인 애플리케이션 화면
├── assets/               # 필요한 소스
├── atoms/                # Recoil 상태 관리
├── api/                  # API 관련 로직
├── components/           # 재사용 가능한 컴포넌트
├── constants/            # 상수 및 설정값
├── hooks/                # 커스텀 훅
└── data/                 # Mock 데이터
```

<br/>


## 기능

### 1. Coin List
- 전체 코인 목록을 표시하고, 사용자가 코인을 검색할 수 있는 기능구현.
- 선택된 코인 정보 연동 시스템 구현
- Binance의 공개 API를 활용하여 실시간 암호화폐 데이터를 가져옵니다.

### 2. Orderbook
- 사용자가 가격을 클릭하면 선택한 매수/매도 가격이 입력란에 자동으로 적용됩니다.
- 수량 입력시 실시간으로 총 거래 금액 계산 기능구현.
  - 예: 가격 30,000 USDT × 수량 2 BTC = 60,000 USDT

### 3. Chart Visualization
`react-native-wagmi-charts` 라이브러리를 활용한 캔들스틱 차트 구현
- Mock 데이터를 활용하여 실제 거래소와 유사한 차트 시각화
- 핀치 줌인/줌아웃 기능 

### 4. UI/UX
- 다크모드 구현
- 슬라이더 기능 구현
- 모달 기능 구현
- 바텀쉬트 기능 구현

<br/>

## 미리보기

<table width="100%">
  <thead>
    <tr>
      <th width="25%">Home Screen</th>
      <th width="25%">Search Screen</th>
      <th width="25%">Search Modal</th>
      <th width="25%">Spot Exchange Screen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="25%"><img src="https://github.com/user-attachments/assets/377e0c27-993b-4704-93c7-a2f9880f3b84"/></td>
      <td width="25%"><img src="https://github.com/user-attachments/assets/c7cefa8e-254b-4e38-adf9-1cf4f55fd841"/></td>
      <td width="25%"><img src="https://github.com/user-attachments/assets/b4901219-9823-448a-bbd9-6d9545497a9d"/></td>
      <td width="25%"><img src="https://github.com/user-attachments/assets/5a8cb026-7ace-4050-bb26-cd0396b3f214"/></td>
    </tr>
  </tbody>
    <thead>
    <tr>
      <th width="25%">Spot Exchange Screen(dark)</th>
      <th width="25%">Spot Exchange Screen with Filter Functionality</th>
      <th width="25%">Spot Exchange Screen with Modal</th>
      <th width="25%">Chart Screen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="25%"><img src="https://github.com/user-attachments/assets/5fed77c1-6083-4616-a6d0-c9c88184f2e5"/></td>
      <td width="25%"><img src="https://github.com/user-attachments/assets/8a6323bd-e7bc-4d31-af1b-99ba16764a2c"/></td>
      <td width="25%"><img src="https://github.com/user-attachments/assets/ded88683-a520-422a-ae11-0a61b7ffb955"/></td>
      <td width="25%"><img src="https://github.com/user-attachments/assets/3082ef76-512d-498a-831c-5af88ce33db1"/></td>
    </tr>
  </tbody>
</table>


<br/>

## 사용기술
React Native, Expo, Tanstack Query, Recoil, TypeScript

<br/>

## 설치 및 실행 방법

### 설치
```
git clone https://github.com/jinpark0625/KrononLabs
cd KrononLabs
npm install
```

### 실행
```
npx expo start
```

<br/>

## Troubleshooting

### Android 특정 이슈
- ~~TextInput 수직 정렬 문제~~
- ~~popover에서 text가 보이지 않는 문제~~
- ~~Header 높이가 다른 문제~~
- ~~SearchBar 다크모드 미적용~~
- ~~슬라이드 터치 안되는 이슈~~
- ~~키보드 활성화시, 하단메뉴 활성화 이슈~~

### iOS 특정 이슈
- ~~제스처 핸들링 개선~~
- ~~SearchBar 다크모드 미적용~~
- ~~슬라이드 터치 안되는 이슈~~

