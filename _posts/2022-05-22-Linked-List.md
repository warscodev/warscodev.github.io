---
title: "Linked list"
categories: [Data Structure]
tags: [Linked List]
---
- 컴퓨터에 자료를 저장하는 구조의 한 종류로, 엘리먼트와 엘리먼트 간의 연결(link)을 이용해서 리스트를 구현한 것이다.
- 데이터를 저장한 노드에 다음 노드의 주소를 가지고 있는 구조.
- 일렬로 연결된 데이터를 저장할 때 사용
- 배열과 차이
  - 배열 : 물리적으로 한 곳에 정해져 있음. 한번 정해진 크기는 고정.
  - 링크드 리스트 : <u>길이가 정해져있지 않은</u> 데이터의 연결된 집합
- 길이가 정해지지 않은 데이터를 핸들링 할 때 유리
- ※ 사실 오늘날 어플리케이션 프로그램에서 연결 리스트의 사용 빈도는 많이 줄었습니다.
  그 이유는 하드웨어 발전이랑 관련이 있습니다. CPU에 들어가는 캐시 메모리는 연속된 메모리에 접근할 때 굉장히 빠른 속도를 보장합니다. 따라서 이 부분에 있어서 연결 리스트보다는 배열이 더 유리합니다. 그래서 연결 리스트보다는 다른 언어의 다른 자료구조가 더 활용되고 있는데 그 중 하나가 **C#언어의 리스트**입니다. 다른 말로 동적 배열입니다. 배열로 잡아두고 배열 크기가 커지면 크기만 바뀌는 개념입니다.
  <br>ㄴ 출처: [https://bite-sized-learning.tistory.com/239](https://bite-sized-learning.tistory.com/239)

- 단/양방향
    - 단방향(Singly Linked List) : 다음 노드의 주소만 가지고 있는 형태
    - 양방향(Doubly Linked List) : 이전 노드의 주소도 추가로 가지고 있어 양방향 이동이 가능(메모리 사용량 ↑)



## 자바로 Linked List 구현

[https://github.com/warscodev/Algorithm_Study/tree/master/src/dataStructure/linkedList](https://github.com/warscodev/Algorithm_Study/tree/master/src/dataStructure/linkedList)

```java
Class Node{
  int data;
  Node next = null;
  
  Node(int d){
    this.data = d;
  }
  
  void append(int d){
    Node end = new Node(d);
    Node n = this;
    
    while(n.next != null){
      n = n.next;
    }
    n.next = end;
  }
  
  void delete(int d){
    Node n = this;
    while(n.next != null){
      if(n.next.data == d){
        n.next = n.next.next;
      }else{
        n = n.next;
      }
    }
  }
  
  void retrieve(){
    Node n = this;
    
    while(n.next != null){
      System.out.print(n.data + " = ");
      n = n.next;
    }
    // 마지막 데이터 출력
    System.out.ptrinln(n.data);
  }
}
```







## LeetCode 문제

**Intersection of Two Linked Lists :**
- [https://leetcode.com/problems/intersection-of-two-linked-lists/](https://leetcode.com/problems/intersection-of-two-linked-lists/)



<br>
---

참고자료 :

- [https://opentutorials.org/module/1335/8857](https://opentutorials.org/module/1335/8857)
- [https://www.youtube.com/user/damazzang/videos](https://www.youtube.com/user/damazzang/videos)

