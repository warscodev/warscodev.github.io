---
title: "IntelliJ에서 Thymeleaf 실시간 변경(Live reload) 적용하기"
categories: [Template Engine]
tags: [Thymeleaf, IntelliJ]
---

서버를 재구동 하지 않고 Thymeleaf의 변경사항을 실시간으로 적용하는 방법을 알아보자.

# 1. application.yml 파일 thymeleaf 설정

```groovy
spring
    thymeleaf:
        cache: false
```

<br>

# 2. 인텔리제이
   >**1. Run → Edit Configurations (구성 편집)**
   >
   > <img src="/images/스크린샷 2022-05-27 오후 1.29.17.png" width="520" alt="이미지1">
   >
   >
   >**2. On 'Update' action('Update' 작업 시) & On frame deactivation(프레임 비활성화 시) → Update classes and resources(클래스 및 리소스 업데이트)**
   > 
   > <img src="/images/스크린샷 2022-05-27 오후 1.33.00.png" width="520" alt="이미지2">
   >
   > <img src="/images/스크린샷 2022-05-27 오후 1.34.13.png" width="520" alt="이미지3">

<br>

**정상적으로 적용된 모습**

<img src="/images/May-27-2022 14-20-42.gif" alt="이미지4">






 



