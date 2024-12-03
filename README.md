# KrononLabs

## 프로젝트 개요
이 프로젝트는 Binance Spot Exchange의 기능을 구현한 모바일 애플리케이션입니다. 코인 목록, 주문서에서의 가격 선택 및 차트 시각화 기능을 제공합니다. ReactNative, EXPO, Tanstack Query, Recoil을 사용하여 개발되었습니다.

## 목차
1. [기능](#기능)
2. [사용 기술](#사용기술)
3. [설치 및 실행 방법](#설치-및-실행-방법)
<br/>

## 기능

### 1. Coin List
전체 코인 목록을 표시하고, 사용자가 코인을 검색할 수 있는 기능구현.
선택된 코인 정보 연동 시스템 구현

### 2. Orderbook
사용자가 가격을 클릭하면 선택한 매수/매도 가격이 입력란에 자동으로 적용됩니다.
수량 입력시 실시간으로 총 거래 금액 계산 기능구현.
  - 예: 가격 30,000 USDT × 수량 2 BTC = 60,000 USDT

### 3. Chart Visualization
`react-native-wagmi-charts` 라이브러리를 활용한 캔들스틱 차트 구현
Mock 데이터를 활용하여 실제 거래소와 유사한 차트 시각화
핀치 줌인/줌아웃 기능 

### 4. UI/UX
다크모드 구현

<br/>

## 사용기술
React Native, Expo, Tanstack Query, Recoil
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

