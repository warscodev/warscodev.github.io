---
title: "스택(Stack)과 큐(Queue)"
categories: [Data Structure]
tags: [Stack, Queue]
---

## Abstract Data Type & Data Structure

- **ADT(Abstract Data Type)** : 추상 자료형. 개념적으로 어떤 동작이 있는지만 정의하고 구현에 대해서는 다루지 않음

- **DS(Data Structure)** : 자료구조. ADT에서 정의된 동작을 실제로 구현한 것

<br>

## Stack vs Queue

- **스택(Stack)** : LIFO(Last In First Out) 형태로 데이터를 저장하는 구조. 나중에 들어간 것이 먼저 나옴.
    - 주요 동작: 
        - Push : 스택에 아이템을 넣음
        - Pop : 스택에서 아이템을 꺼냄
        - Peek : 스택 최상단의 아이템을 알아냄
    - 사용 사례 : 
        - Stack Memory [(영상)](https://youtu.be/-2YpvLCT5F8?t=306)
        - Stack Frame
    - 관련 에러 및 해결
        - StackOverflowError : 스택 메모리 공간을 다 썼을 때 발생
        - 대개 재귀 함수(recursive function)에서 탈출하지 못해서 발생
        - 탈출 조건을 잘 확인하여 해결


<br>

- **큐(Queue)**: FIFO(Fisrt In First Out) 형태로 데이터를 저장하는 구조. 먼저 들어간 것이 먼저 나옴.
    - 주요 동작 : 
        - Enqueue : 큐에 아이템을 넣음
        - Dequeue : 큐에서 아이템을 꺼냄
        - Peek : 꺼낼 아이템을 알아냄
    - 사용 사례 : 
        - Producer/Consumer Architecture  [(영상)](https://youtu.be/-2YpvLCT5F8?t=418)
    - 기술 문서에서 Queue :
        - 항상 FIFO를 의미 하지는 않음. (Ex.Priority Queue)
    - 관련 에러 및 해결
        - OutOfMemoryError : Java의 힙(heap) 메모리를 다 썼을 때 발생
        - 큐에 데이터가 계속 쌓이기만 한 경우 발생
        - 큐 사이즈를 고정하여 해결 <br>
            - 큐가 다 찼다면? :
                1. 예외 던지기
                2. 특별한 값(null or false)을 반환
                3. 성공할 때까지 스레드 블락(대기)
                4. 제한된 시간동안 블락하고 안되면 제외(Time out)
                <br>ex) LinkedBlockingQueue





<hr>

참고 자료 : 

- [https://www.youtube.com/watch?v=-2YpvLCT5F8](https://www.youtube.com/watch?v=-2YpvLCT5F8)


