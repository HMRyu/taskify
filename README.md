# Taskify

![taskify](https://github.com/user-attachments/assets/f61934ef-6535-4f0c-8e67-1f7b9f169d33)

배포 주소  : https://taskify-project-team9.vercel.app/

<br />

## Introduction

사진, 글을 통해 나의 일정을 관리하는 플랫폼 입니다.

<br />

## Tech Stack

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)

<br />

## Key Features

### 대시보드 생성

https://github.com/user-attachments/assets/59c802de-3a92-4b57-97ee-a8750ada079c

### 할 일 생성

https://github.com/user-attachments/assets/02d34c9a-ad79-4bcc-aa88-f28e8416f368

### 할 일 수정

https://github.com/user-attachments/assets/ddac1610-24bb-458d-927a-c5488362dd24

### 댓글 추가

https://github.com/user-attachments/assets/9466469c-2a17-4a8d-98b7-6d84dedec215

### 초대하기

https://github.com/user-attachments/assets/567958ab-3d85-438e-9e83-9aa5197ab395

### 프로필 변경

https://github.com/user-attachments/assets/99f09c81-8f8f-44eb-bdda-93b236926840

<br />

## My Part

<details>
<summary>헤더 및 초대받은 대시보드</summary>
<br>
  
![my dashboard](https://github.com/user-attachments/assets/64fd1e62-f51c-4479-be19-f62f2cdfba19)

<br />

</details>

<details>
<summary>공통 모달 UI</summary>
<br>
  
![column edit (1)](https://github.com/user-attachments/assets/0049fc39-cc89-4102-94b9-b88d9bf60948)

<br />

</details>

<details>
<summary>대시보드 수정</summary>
<br>
  
![board edit](https://github.com/user-attachments/assets/1f0675b1-266b-48ba-b6a0-95200d65f711)

<br />

</details>

<br />

## Key Learnings

<details>
<summary>페이지마다 다른 헤더 렌더링</summary>
<br>

## 페이지마다 다른 헤더 렌더링

페이지마다 헤더를 다르게 나타내야 했다. 크게 네 가지의 헤더를 나누었어야 해서 어떻게 해결해야 할 지 고민했었다.

### 1. 각 페이지별로 헤더를 만들기

각 페이지별에 맞는 헤더 컴포넌트를 네 개 만들어서 각 페이지에 넣는 방법을 생각했다.

그런데 이 방법은 유사한 컴포넌트를 많이 만들게 된다. 유사한 컴포넌트를 많이 만들게 되면 하나의 수정사항이 생길 때 각 컴포넌트에 들어가서 하나씩 전부 바꿔주어야 한다. 따라서 이 방법은 쓰지 않기로 했다.

### 2. 하나의 헤더 컴포넌트를 만들어서 url 에 따라 조건부 렌더링

두 번째 방법은 컴포넌트 내부에서 조건부 렌더링을 하는 방법이다. 실제로 이 방법으로 개발을 진행했었다. 물론 동작은 잘 되었지만, 이렇게 되면 하나의 컴포넌트에서 해야 하는 일이 너무 많아지기 때문에 오류가 발생했을 경우 찾기 어려워진다. 실제로 초반에는 잘 동작했지만 오류가 발생해서 수정해야 하는 경우가 있었는데 긴 코드와 복잡한 조건부 렌더링 때문에 어느 부분에서 에러가 발생했는지 찾기 어려웠다.

### 3. layout.tsx 생성 후 함수 생성 후 렌더링

세 번째 방법은 함수를 layout.tsx 생성 후 그 내부에서 함수를 만들어 렌더링하는 방법이다. 크게 네 가지의 헤더를 최대한 비슷한 헤더끼리 나눠서 2개로 만들었다.

```jsx
	const pathname = usePathname();

	const renderHeader = () => {
	    if (pathname === '/mydashboard') {
      return <DashboardHeader title={'내 대시보드'} />;
    } else if (
      pathname.startsWith('/dashboard/') &&
      !pathname.endsWith('/edit')
    ) {
      return <DashboardHeaderInSettings link={dashboardId} />;
    } else if (pathname.endsWith('/edit')) {
      return <DashboardHeaderInSettings />;
    } else if (pathname === '/mypage') {
      return <DashboardHeader title={'계정관리'} />;
    } else {
      return null;
    }
  };
```

이런 식으로 renderHeader 라는 함수를 만들어서 pathname 에 따라 다른 헤더를 보여줄 수 있게 만들었다. 이렇게 사용하니, 오류 발생 시 해결하기도 편리했고 한 눈에 코드를 파악하기도 좋았다.

<br />

</details>

<details>
<summary>모달 생성</summary>
<br>
  
# 모달 생성

모달 부분을 내가 담당하게 되어 어떤 식으로 모달을 구현할지 고민했다.

### 1. UI 라이브러리

shadcn ui 를 사용하면 편리하게 모달을 구현할 수 있었다. 모달을 굉장히 쉽고 빠르게 구현할 수 있는 장점이 있다. 다만, ui 라이브러리를 사용하면 미리 구현되어 있는 디자인을 사용해야 하기 때문에 커스텀하기가 어렵다는 단점이 있었다. 또한 재사용성을 고려해야 했는데 미리 정의된 코드를 어떻게 재사용해야 할 지 고민이 되어 이 방법 말고 직접 구현하기로 했다.

### 2. Context API 를 사용한 모달

라이브러리를 사용하지 않고 재사용이 가능한 모달을 구현하려다 보니 전역상태관리가 필요하다는 생각이 들었고 React 에서 상태관리를 할 수 있는 Context api 를 사용하기로 결정했다.

우선 상태관리가 필요한 부분들에 대해 정리했다.

1) isOpen: 모달이 열려있는지 여부

2) onOpen: 모달을 Open 하는 함수

3) onClose: 모달을 Close 하는 함수

4) content: 모달 내부의 content

따라서 이 네 가지 항목들로 context 를 구현하기로 생각했다.

```jsx
<ModalContext.Provider
      value={{ modalContent, isModalOpen, openModal, closeModal }}
    >
      {children}
</ModalContext.Provider>

export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal 사용 불가');
  }
  return context;
};
```

이런 방법으로 모달을 context 를 관리한 뒤 useContext 를 사용하여 모달을 쉽게 다룰 수 있도록 useModal 커스텀 훅을 만들어 사용하였다.

멘토님께 구현한 모달에 대해 코드리뷰를 요청드렸는데, context 사용 시 value 내부에 값과 함수를 함께 사용하면 성능 이슈가 발생한다고 알려주셨다.

따라서 값과 함수를 따로 분리하기로 했고, 결과적으로 context 를 총 두 개 만들어서 모달 기능을 구현하였다.

```jsx
return (
    <ModalStateContext.Provider value={{ modalContent, isModalOpen }}> // 값
      <ModalContext.Provider value={{ openModal, closeModal }}> // 함수
        {children}
      </ModalContext.Provider>
    </ModalStateContext.Provider>
  );
```

<br />

</details>

<details>
<summary>검색 기능</summary>
<br>
  
# 검색

검색 기능 구현 시 초기에는 모든 입력에 대해 요청을 전송하여 구현하였다.

멘토님께 코드리뷰를 요청드렸더니, 모든 입력에 대해 요청을 전송하지 말고 디바운스라는 개념이 있다고 하시면서 디바운스를 이용하여 검색 기능을 구현해보라고 하셨다.

### 1. 디바운스

디바운스란, 유저가 이벤트 실행 시 계속 요청을 보내는 것이 아니라 처음 또는 끝에만 이벤트를 실행하고 나머지 시간에는 이벤트를 무시하는 것을 말한다.

따라서 디바운스를 사용하기 위해 여러 가지 자료들을 찾아보았다.

1) lodash 라이브러리

lodash 라이브러리 내부에 디바운스가 구현되어 있었다.

그래서 이것을 사용할까 하다 직접 구현해 보는 것이 이해도에 더 도움이 될 거라고 생각해서 간단하게 직접 구현했다.

2) 직접 구현

```jsx
const debounce = (func: Function, delay: number) => {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
```

변수로 함수와 delay 시간을 받아서 내부 함수가 일정 시간동안 실행이 되지 않도록 하는 함수를 구현했다.

```jsx
debounce((term: string) => {
      if (term === '') {
        setFilteredInvitations(invitations);
      } else {
        setFilteredInvitations(
          invitations.filter((invitation) =>
            invitation.dashboard.title
              .toLowerCase()
              .includes(term.toLowerCase()),
          ),
        );
      }
    }, 500),
```

이런 식으로 500ms 동안의 시간을 줘서 filter 된 invitation 이 뜨도록 구현했다.

### 2. 쓰로틀링

디바운스에 대해 조사하다 보니 디바운스와 유사한 개념인 쓰로틀링에 대해서도 알게 되었다.

쓰로틀링이란, 사용자가 다수의 이벤트를 요청하는 경우, 일정한 시간마다 한 번 실행하게 해 주는 기능이다.

주로 scroll, resize 처럼 자주 발생하는 이벤트에 유용한 기능이다.

<br />

</details>

<br />

## Improvements

<details>
<summary>App router 의 장점을 살리지 못함</summary>
<br>

## App router 의 장점을 살리지 못함

App router 의 장점은 모든 컴포넌트가 서버 컴포넌트 기반으로 되어 있다는 점이다. 따라서 Data Fetching 시 서버 컴포넌트에서 데이터를 받아올 수 있어서 데이터를 빠르게 받아올 수 있다는 점이 장점이다.

하지만 우리 팀은 서버 컴포넌트에 대한 이해도가 부족한 상태로 프로젝트를 진행하다 보니 App router 를 사용했음에도 불구하고 client 컴포넌트를 만들어 useEffect 로 Data fetching 을 진행하였다.

<br />

</details>

<details>
<summary>토큰 저장 방법</summary>
<br>

## 토큰 저장 시 로컬스토리지 사용

토큰 저장은 보통 보안성을 위해 쿠키에 저장한다. 다만, 우리 팀은 토큰 저장을 로컬 스토리지에만 저장해 보았기 때문에 로컬 스토리지에 저장하였다.

<br />

</details>

<details>
<summary>추가 기능 부재</summary>
<br>

## 추가 기능 부재

기본적인 사이트에서 제공하는 추가 기능들이 존재하지 않았다.

예를 들어, 다크모드 같은 경우는 대부분의 사이트에서 제공하고 있는 기능인데, 이러한 기능들을 구현하지 못 한 채로 기능 구현에만 초점을 맞춘 점이 아쉬웠다.

<br />

</details>

<br />

## Quick Start


### Clone
```
git clone https://github.com/HMRyu/taskify.git
```

### Installation
```
npm install
```

### Run
```
npm run dev
```


