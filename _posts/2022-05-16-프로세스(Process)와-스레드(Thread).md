---
title : "프로세스(Process)와 스레드(Thread)"
categories : [Computer Science]
tag : [Process, Thread]
---

## 1. Program
- 어떤 작업을 위해 실행할 수 있는 파일 (An executable file)


## 2. Process
- 실행중인 프로그램 (Computer program in execution)
- 프로세스가 동작한다는 것은 프로세스의 특정 스레드가 실행중이라는 것.<br>
    그 스레드는 프로세스가 가진 데이터를 참조함.
<br>
- **구성**
  - Register: 명령, 주소 등을 가지고 있는 부분
  - Counter: 프로그램 안에서 어느 위치를 실행시키고 있는 지를 가르키는 부분
  - **Stack**: 프로세스의 메모리 공간을 관리하기 위한 알고리즘중 하나. 호출된 함수, 지역 변수 등의 임시 데이터
  - **Heap**: 동적으로 생성된 데이터 영역(ex. new Object(), malloc(), ...)
    - 스택보다 할당할 수 있는 메모리 공간이 많다는 것이 장점이지만 포인터로 메모리 영역을 접근해야 하기 때문에 다른 자료구조에 비해서 데이터를 읽고 쓰는게 느리다. 
  - **Code**: 프로세스가 실행할 코드와 매크로 상수가 기계어의 형태로 저장된 공간
  - **Data**: 전역변수 또는 static 변수 등이 저장된 공간.

<br>

## 3. Thread
- **프로세스 내에서 실행되는 작업 흐름의 단위.** (The unit of execution within a process)

<br>

## 4. Process vs Thread


|                       | Process                       | Thread                                 |
| --------------------- | ----------------------------- | -------------------------------------- |
| **개념**              | 실행 중인 프로그램            | 프로세스의 실행 단위                   |
| **종료**              | 시간 소요 ↑                   | 시간 소요 ↓                            |
| **생성**              | 시간 소요 ↑                   | 시간 소요 ↓                            |
| **Context switching** | 시간 소요 ↑                   | 시간 소요 ↓                            |
| **커뮤니케이션**      | 효율성 ↓                      | 효율성 ↑                               |
| **리소스**            | 소비 ↑                        | 소비 ↓                                 |
| **자원 공유**         | 독립, 격리                    | 공유(Heap, Data, Code)                 |
| **전환**              | 운영 체제의 인터페이스를 사용 | 운영 체제를 호출하지 않음(커널 중단 X) |



## 5. Multiprocessing, Multithread
- CPU의 최대 활용을 위해 프로그램의 둘 이상의 부분을 동시에 실행하는 기술


## 6. 동시성(Concurrency) vs 병렬성(Parallelism)
- 동시성 - 동시에 실행되는 것 같이 보이는 것. ex)싱글 코어 + 멀티 스레드
- 병렬성 - 실제로 동시에 여러 작업이 처리 되는 것. ex)멀티 코어 + 멀티 스레드


## 7. Multitasking
- task를 번갈아가며 수행하는 것
- 프로세스의 응답 시간을 최소화 시키는데 목적
- 마치 동시에 여러 프로그램이 실행되는듯 느끼게함
- 하나의 프로세스가 동시에 여러 작업을 수행하지는 못함


## 8. Context Switching
- CPU를 한 프로세스 또는 스레드에서 다른 프로세스 또는 스레드로 전환하는 것
- 프로세스 제어 블록(PCB)에서 현재 실행중인 프로세스의 상태(Context)를 먼저 저장하고, 다음 프로세스를 동작시켜 작업을 처리한 후에 이전에 저장된 프로세스의 상태를 다시 복구하여 재개
- 이를 통해 여러 프로세스가 단일 CPU를 공유


## 9. Multiprocessing
- 두개 이상의 프로세서나 코어가 작업을 병렬처리하는 것
- 각 프로세스가 메모리 영역을 따로 가지기 때문에 비효율이 발생


## 10. Multithread
- 하나의 프로세스가 다수의 작업을 각각의 스레드를 이용하여 동시에 작동 시킬 수 있다
- 공유 메모리(Code, Data, Heap)를 가지기 때문에 서로간의 자원 공유가 가능하여 프로세스간 통신과 같은 과정을 거치지 않아 효율적이다
- 같은 데이터를 공유하기 때문에 데이터 동기화에 신경 써야 한다. 한 프로세스 안의 스레드가  문제가 생기면 같은 프로세스안의 다른 스레드도 문제가 발생하게 된다

    

<br>

<hr>

참고 자료 : 
- [https://www.youtube.com/watch?v=QmtYKZC0lMU](https://www.youtube.com/watch?v=QmtYKZC0lMU)
- [https://www.youtube.com/watch?v=RrfASw-jfZ4&t=28s](https://www.youtube.com/watch?v=RrfASw-jfZ4&t=28s)
- [https://www.youtube.com/watch?v=dzfij2nZbRw](https://www.youtube.com/watch?v=dzfij2nZbRw)
- [https://mangkyu.tistory.com/92](https://mangkyu.tistory.com/92)
