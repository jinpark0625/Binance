# KrononLabs

## 프로젝트 개요
이 프로젝트는 Binance Spot Exchange의 기능을 구현한 모바일 애플리케이션입니다. 코인 목록, 주문서에서의 가격 선택 및 차트 시각화 기능을 제공합니다. ReactNative, EXPO, Tanstack Query, Recoil을 사용하여 개발되었습니다.

## 목차
1. [기능](#기능)
2. [미리보기](#미리보기)
3. [사용 기술](#사용기술)
4. [설치 및 실행 방법](#설치-및-실행-방법)
   

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

## 미리보기

<table width="100%">
  <thead>
    <tr>
      <th width="50%">Home Screen</th>
      <th width="50%">Search Screen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="50%"><img src="https://github.com/user-attachments/assets/377e0c27-993b-4704-93c7-a2f9880f3b84"/></td>
      <td width="50%"><img src="https://github.com/user-attachments/assets/c7cefa8e-254b-4e38-adf9-1cf4f55fd841"/></td>
    </tr>
  </tbody>
    <thead>
    <tr>
      <th width="50%">Spot Exchange Screen</th>
      <th width="50%">Spot Exchange Screen(dark)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="50%"><img src="https://github.com/user-attachments/assets/c1076ac7-5465-433e-be0a-a6251a505f86"/></td>
      <td width="50%"><img src="https://github.com/user-attachments/assets/8361cc0e-c03f-44b4-bf61-4321ed31202c"/></td>
    </tr>
  </tbody>
    <thead>
    <tr>
      <th width="50%">Spot Exchange Screen with Filter</th>
      <th width="50%">Spot Exchange Screen with Modal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="50%"><img src="https://github.com/user-attachments/assets/d80e0e81-d226-4990-ba2a-de3a390a3897"/></td>
      <td width="50%"><img src="https://github.com/user-attachments/assets/bd137de2-6229-470f-b86d-045d3681da52"/></td>
    </tr>
  </tbody>
      <thead>
    <tr>
      <th width="50%">Chart Screen(Ongoing..)</th>
      <th width="50%">Chart Screen(Ongoing..)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="50%"><img src="https://github.com/user-attachments/assets/e3f6d141-bd08-4c0d-bc91-b85bb4bb7323"/></td>
      <td width="50%"><img src="https://github.com/user-attachments/assets/a72212d1-b5e9-4855-9df1-af0087b09882"/></td>
    </tr>
  </tbody>
</table>


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

<br/>


