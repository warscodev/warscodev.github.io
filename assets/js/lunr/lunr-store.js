var store = [{
        "title": "프로세스(Process)와 스레드(Thread)",
        "excerpt":"1. Program     어떤 작업을 위해 실행할 수 있는 파일 (An executable file)   2. Process     실행중인 프로그램 (Computer program in execution)   프로세스가 동작한다는 것은 프로세스의 특정 스레드가 실행중이라는 것.    그 스레드는 프로세스가 가진 데이터를 참조함.     구성            Register: 명령, 주소 등을 가지고 있는 부분       Counter: 프로그램 안에서 어느 위치를 실행시키고 있는 지를 가르키는 부분       Stack: 프로세스의 메모리 공간을 관리하기 위한 알고리즘중 하나. 호출된 함수, 지역 변수 등의 임시 데이터       Heap: 동적으로 생성된 데이터 영역(ex. new Object(), malloc(), …)                    스택보다 할당할 수 있는 메모리 공간이 많다는 것이 장점이지만 포인터로 메모리 영역을 접근해야 하기 때문에 다른 자료구조에 비해서 데이터를 읽고 쓰는게 느리다.                       Code: 프로세스가 실행할 코드와 매크로 상수가 기계어의 형태로 저장된 공간       Data: 전역변수 또는 static 변수 등이 저장된 공간.               3. Thread     프로세스 내에서 실행되는 작업 흐름의 단위. (The unit of execution within a process)       4. Process vs Thread                          Process       Thread                       개념       실행 중인 프로그램       프로세스의 실행 단위                 종료       시간 소요 ↑       시간 소요 ↓                 생성       시간 소요 ↑       시간 소요 ↓                 Context switching       시간 소요 ↑       시간 소요 ↓                 커뮤니케이션       효율성 ↓       효율성 ↑                 리소스       소비 ↑       소비 ↓                 자원 공유       독립, 격리       공유(Heap, Data, Code)                 전환       운영 체제의 인터페이스를 사용       운영 체제를 호출하지 않음(커널 중단 X)           5. Multiprocessing, Multithread     CPU의 최대 활용을 위해 프로그램의 둘 이상의 부분을 동시에 실행하는 기술   6. 동시성(Concurrency) vs 병렬성(Parallelism)     동시성 - 동시에 실행되는 것 같이 보이는 것. ex)싱글 코어 + 멀티 스레드   병렬성 - 실제로 동시에 여러 작업이 처리 되는 것. ex)멀티 코어 + 멀티 스레드   7. Multitasking     task를 번갈아가며 수행하는 것   프로세스의 응답 시간을 최소화 시키는데 목적   마치 동시에 여러 프로그램이 실행되는듯 느끼게함   하나의 프로세스가 동시에 여러 작업을 수행하지는 못함   8. Context Switching     CPU를 한 프로세스 또는 스레드에서 다른 프로세스 또는 스레드로 전환하는 것   프로세스 제어 블록(PCB)에서 현재 실행중인 프로세스의 상태(Context)를 먼저 저장하고, 다음 프로세스를 동작시켜 작업을 처리한 후에 이전에 저장된 프로세스의 상태를 다시 복구하여 재개   이를 통해 여러 프로세스가 단일 CPU를 공유   9. Multiprocessing     두개 이상의 프로세서나 코어가 작업을 병렬처리하는 것   각 프로세스가 메모리 영역을 따로 가지기 때문에 비효율이 발생   10. Multithread     하나의 프로세스가 다수의 작업을 각각의 스레드를 이용하여 동시에 작동 시킬 수 있다   공유 메모리(Code, Data, Heap)를 가지기 때문에 서로간의 자원 공유가 가능하여 프로세스간 통신과 같은 과정을 거치지 않아 효율적이다   같은 데이터를 공유하기 때문에 데이터 동기화에 신경 써야 한다. 한 프로세스 안의 스레드가  문제가 생기면 같은 프로세스안의 다른 스레드도 문제가 발생하게 된다         참고 자료 :     https://www.youtube.com/watch?v=QmtYKZC0lMU   https://www.youtube.com/watch?v=RrfASw-jfZ4&amp;t=28s   https://www.youtube.com/watch?v=dzfij2nZbRw   https://mangkyu.tistory.com/92  ","categories": ["Computer Science"],
        "tags": ["Process","Thread"],
        "url": "/computer-science/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4-process-%EC%99%80-%EC%8A%A4%EB%A0%88%EB%93%9C-thread",
        "teaser": null
      },{
        "title": "JPA 영속성 컨텍스트 정리",
        "excerpt":"JPA에서 가장 중요한 2가지     객체와 관계형 데이터베이스 매핑 (Object Relational Mapping)   영속성 컨텍스트   영속성 컨텍스트     엔티티를 영구 저장하는 환경   논리적 개념   엔티티 매니저를 통해서 영속성 컨텍스트에 접근  EntityManager.persist(entity);   엔티티의 생명주기          비영속(new/transition) : 영속성 컨텍스트와 관계가 없는 새로운 상태         //객체를 생성한 상태   Member member = new Member();   member.setId(\"member1\");   member.setUserId(\"회원1\");                       영속(managed) : 영속성 컨텍스트에 관리되는 상태         ...   EntityManagerFactory emf = Persistence.createEntityManagerFactory(\"~~\");   EntityManager em = emf.createEntityManager():   em.getTransaction().begin();        //객체를 저장한 상태(영속)   em.persist(member);                  바로 DB에 저장되는 것은 아님. commit 시점에 db로 쿼리가 전달.                       준영속(detached) : 영속성 컨텍스트에 저장되었다 분리된 상태         em.detach(member);                       삭제(removed) : 객체를 삭제한 상태         em.remove(member);               영속성 컨텍스트의 이점          (1) 1차 캐시 → DB 한 트랜잭션 내에서만 공유하기 때문에 일반적인 상황에서 성능적으로 그리 큰 이점은 아니다.            (2) 영속 엔티티의 동일성(identity) 보장         ...   Member findMember1 = em.find(Member.class, 1L);   member findMember2 = em.find(Member.class, 1L);    //true   System.out.println(\"result = \" + (findMember1 == findMember2))          → 1차 캐시로 반복 가능한 읽기(Repeatable Read) 등급의 트랜잭션 격리 수준을, 데이터베이스가 아닌 애플리션 차원에서 제공            (3) 트랜잭션을 지원하는 쓰기 지연 (transactional wirte-behind)         ...   transaction().begin(); // 트랜잭션 시작          em.persist(memberA);   em.persist(memberB)   // 아직 Insert SQL을 DB로 보내지 않음          transation.commit(); // 트랜잭션 커밋   // 커밋하는 순간 DB로 Insert SQL을 보냄                       (4) 변경 감지 (Dirty Checking)         ...   transaction.begin(); // 트랜잭션 시작        // 영속성 엔티티 조회   Member memberA = em.find(Member.class, 1L);        memberA.setUsername(\"newName\");   memberA.setAge(10);        // Dirty Checking을 통해 커밋시에 Update SQL이 나감.        transaction.commit; // 트랜잭션 커밋                  영속성 컨텍스트의 커밋 과정:                    ① flush()           ② 엔티티와 스냅샷(영속 상태가 된 최초 시점) 비교           ③ 변경된 부분이 있다면 Update Sql을 쓰기 지연 SQL 저장소에 생성           ④ flush()           ⑤ Commit                                   플러시(flush)                    영속성 컨텍스트의 변경 내용을 데이터베이스에 반영. 트랜잭션 커밋이 발생하면 자동으로 발생.           플러시 발생 → 변경 감지 → 수정된 엔티티 쓰기지연 SQL 저장소에 등록 → 쓰기지연 SQL 저장소의 쿼리를 DB에 전송           영속성 컨텍스트를 비우지 않음.                                  (5) 지연 로딩 (Lazy Loading)          ※ [인프런] 자바 ORM 표준 JPA 프로그래밍 - 김영한   ","categories": ["Spring Data"],
        "tags": ["JPA","영속성컨텍스트"],
        "url": "/spring-data/jpa-%EC%98%81%EC%86%8D%EC%84%B1-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8-%EC%A0%95%EB%A6%AC",
        "teaser": null
      },{
        "title": "스택(Stack)과 큐(Queue)",
        "excerpt":"Abstract Data Type &amp; Data Structure           ADT(Abstract Data Type) : 추상 자료형. 개념적으로 어떤 동작이 있는지만 정의하고 구현에 대해서는 다루지 않음            DS(Data Structure) : 자료구조. ADT에서 정의된 동작을 실제로 구현한 것           Stack vs Queue      스택(Stack) : LIFO(Last In First Out) 형태로 데이터를 저장하는 구조. 나중에 들어간 것이 먼저 나옴.            주요 동작:                    Push : 스택에 아이템을 넣음           Pop : 스택에서 아이템을 꺼냄           Peek : 스택 최상단의 아이템을 알아냄                       사용 사례 :                    Stack Memory (영상)           Stack Frame                       관련 에러 및 해결                    StackOverflowError : 스택 메모리 공간을 다 썼을 때 발생           대개 재귀 함수(recursive function)에서 탈출하지 못해서 발생           탈출 조건을 잘 확인하여 해결                                  큐(Queue): FIFO(Fisrt In First Out) 형태로 데이터를 저장하는 구조. 먼저 들어간 것이 먼저 나옴.            주요 동작 :                    Enqueue : 큐에 아이템을 넣음           Dequeue : 큐에서 아이템을 꺼냄           Peek : 꺼낼 아이템을 알아냄                       사용 사례 :                    Producer/Consumer Architecture  (영상)                       기술 문서에서 Queue :                    항상 FIFO를 의미 하지는 않음. (Ex.Priority Queue)                       관련 에러 및 해결                    OutOfMemoryError : Java의 힙(heap) 메모리를 다 썼을 때 발생           큐에 데이터가 계속 쌓이기만 한 경우 발생           큐 사이즈를 고정하여 해결                              큐가 다 찼다면? :                                    예외 던지기                   특별한 값(null or false)을 반환                   성공할 때까지 스레드 블락(대기)                   제한된 시간동안 블락하고 안되면 제외(Time out)    ex) LinkedBlockingQueue                                                                                     참고 자료 :      https://www.youtube.com/watch?v=-2YpvLCT5F8   ","categories": ["Data Structure"],
        "tags": ["Stack","Queue"],
        "url": "/data-structure/%EC%8A%A4%ED%83%9D-stack-%EA%B3%BC-%ED%81%90-queue",
        "teaser": null
      },{
        "title": "Linked list",
        "excerpt":"   컴퓨터에 자료를 저장하는 구조의 한 종류로, 엘리먼트와 엘리먼트 간의 연결(link)을 이용해서 리스트를 구현한 것이다.   데이터를 저장한 노드에 다음 노드의 주소를 가지고 있는 구조.   일렬로 연결된 데이터를 저장할 때 사용   배열과 차이            배열 : 물리적으로 한 곳에 정해져 있음. 한번 정해진 크기는 고정.       링크드 리스트 : 길이가 정해져있지 않은 데이터의 연결된 집합           길이가 정해지지 않은 데이터를 핸들링 할 때 유리        ※ 사실 오늘날 어플리케이션 프로그램에서 연결 리스트의 사용 빈도는 많이 줄었습니다. 그 이유는 하드웨어 발전이랑 관련이 있습니다. CPU에 들어가는 캐시 메모리는 연속된 메모리에 접근할 때 굉장히 빠른 속도를 보장합니다. 따라서 이 부분에 있어서 연결 리스트보다는 배열이 더 유리합니다. 그래서 연결 리스트보다는 다른 언어의 다른 자료구조가 더 활용되고 있는데 그 중 하나가 C#언어의 리스트입니다. 다른 말로 동적 배열입니다. 배열로 잡아두고 배열 크기가 커지면 크기만 바뀌는 개념입니다.  ㄴ 출처: https://bite-sized-learning.tistory.com/239       단/양방향            단방향(Singly Linked List) : 다음 노드의 주소만 가지고 있는 형태       양방향(Doubly Linked List) : 이전 노드의 주소도 추가로 가지고 있어 양방향 이동이 가능(메모리 사용량 ↑)           자바로 Linked List 구현   https://github.com/warscodev/Algorithm_Study/tree/master/src/dataStructure/linkedList   Class Node{   int data;   Node next = null;      Node(int d){     this.data = d;   }      void append(int d){     Node end = new Node(d);     Node n = this;          while(n.next != null){       n = n.next;     }     n.next = end;   }      void delete(int d){     Node n = this;     while(n.next != null){       if(n.next.data == d){         n.next = n.next.next;       }else{         n = n.next;       }     }   }      void retrieve(){     Node n = this;          while(n.next != null){       System.out.print(n.data + \" = \");       n = n.next;     }     // 마지막 데이터 출력     System.out.ptrinln(n.data);   } }   LeetCode 문제   Intersection of Two Linked Lists :     https://leetcode.com/problems/intersection-of-two-linked-lists/       참고자료 :      https://opentutorials.org/module/1335/8857   https://www.youtube.com/user/damazzang/videos   ","categories": ["Data Structure"],
        "tags": ["Linked List"],
        "url": "/data-structure/linked-list",
        "teaser": null
      },{
        "title": "IntelliJ에서 Thymeleaf 실시간 변경(Live reload) 적용하기",
        "excerpt":"서버를 재구동 하지 않고 Thymeleaf의 변경사항을 실시간으로 적용하는 방법을 알아보자.       1. application.yml 파일 thymeleaf 설정   spring     thymeleaf:         cache: false       2. 인텔리제이     1. Run → Edit Configurations (구성 편집)          2. On ‘Update’ action(‘Update’ 작업 시) &amp; On frame deactivation(프레임 비활성화 시) → Update classes and resources(클래스 및 리소스 업데이트)                  정상적으로 적용된 모습      ","categories": ["Template Engine"],
        "tags": ["Thymeleaf","IntelliJ"],
        "url": "/template-engine/intellij%EC%97%90%EC%84%9C-thymeleaf-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EB%B3%80%EA%B2%BD-live-reload-%EC%A0%81%EC%9A%A9",
        "teaser": null
      },{
        "title": "AD(Active Directory)",
        "excerpt":"중앙 서버에 공통된 데이터베이스를 생성하여 각 서버와 클라이언트가 해당 데이터베이스를 공유하여 Object를 검색하고,   중앙에서 사용자 인증 및 권한 부여 처리가 가능하도록 처리해주는 Windows 기반의 중앙 집중 관리 서비스.   일반적인 RDBMS와는 다른 파일 타입의 데이터베이스이다.   구성   1. 도메인(Domain)   관리를 위한 기본 단위. 동일한 데이터베이스를 공유하는 사용자와 디바이스가 이에 해당된다.   2. 트리(Tree), 포레스트(Forest)   트리는 도메인의 결합, 포레스트는 트리의 결합니다.       ","categories": ["Server"],
        "tags": ["AD"],
        "url": "/server/ad-active-directory",
        "teaser": null
      },{
        "title": "[Git] 2. Git 최초 설정 및 프로젝트 세팅",
        "excerpt":"    1. Git 전역 설정   1.1 사용자 이름 및 이메일 주소 설정           터미널에서 아래 명령어 실행         git config --global user.name \"(본인 이름)\"        git config --global user.email \"(본인 이메일)\"                아래 명령어로 확인 가능         git config --global user.name        git config --global user.email                  1.2. 기본 브랜치명 설정           아래 명령어로 기본 브랜치명을 ‘main’으로 설정         git config --global init.defaultBranch main                아래 명령어로 기본 브랜치명 확인         git config --get init.defaultBranch                      2. 프로젝트 생성 &amp; Git 관리 시작   2.1. Git 저장소 생성           프로젝트 경로 아래에서 아래 명령어 입력         git init                         폴더에 숨김모드로 .git 폴더 생성 확인              맥에서 숨김 파일 보기: command + shift + .           2.2. Git 저장소 상태           프로젝트에 아래 파일 생성                   프로젝트 경로 아래에서 아래 명령어 입력         git status                 ","categories": ["VCS"],
        "tags": ["Git"],
        "url": "/vcs/git-%EC%B5%9C%EC%B4%88-%EC%84%A4%EC%A0%95-%EB%B0%8F-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%84%B8%ED%8C%85",
        "teaser": null
      },{
        "title": "[Git] 1. 설치 및 세팅",
        "excerpt":"   💡 Git, Git Bash, SourceTree 설치 및 세팅             1. 다운로드와 설치   1.1. Git과 Git Bash설치     https://git-scm.com/ 에서 다운로드        Git Bash도 함께 설치할 것!                   설치 후 Git Bash에서 테스트         git --version                       아래 명령어로 OS별 개행문자 통일 [참고]         git config --global core.autocrlf true                      1.2. SourceTree 설치      https://www.sourcetreeapp.com/   BitBucket, Mercurial 건너 뛰기       1.3. 인텔리제이 터미널 기본설정을 Git Bash로 변경      Setting → Tools → Terminal        Shell path에 아래 경로 입력         \"C:\\Program Files\\Git\\bin\\sh.exe(shell이 설치된 경로)\" -login -i                       인텔리제이 재시작 후 터미널 확인             ","categories": ["VCS"],
        "tags": ["Git"],
        "url": "/vcs/git-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EC%84%B8%ED%8C%85",
        "teaser": null
      }]
