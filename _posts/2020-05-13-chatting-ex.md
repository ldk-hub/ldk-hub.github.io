---
# 포스트제목
title: "소켓 채팅 실습 내역"
# 포스팅 작성자
author: ["이동옥"] 
# 포스팅 공개일 - 정렬기준 포스팅날짜순서에 따라 기재됨.(주의 미래날짜는 기입X)
date: 2020-01-10 08:26:28 -0400
# 블로그 메인페이지에 썸네일과 함께 노출될 텍스트 설정 일정 길이를 초과하면 잘려서 표시됨.
# abstract:
# 태그를 입력
# tags: ["클라우드","교육"]
categories: 초보시절
# 대표 이미지를 입력합니다. 이미지 업로드 위치는 아래에 기술합니다.
# image: /assets/images/posts/nerdfactory-documentation-history/main.jpg
# 포스트의 초안 여부를 입력합니다. "no" 로 입력할 경우 공개됩니다.
draft: "no"
---

# SocketChatting App Sample Code

 - 개발초보시절 개발했던 것이라 지금바라보면 한없이 초라한 내용이지만 이러한 것도 해보았다라는 점을 포스트하고싶어 올리게되었다.

1. 톰캣서버를 기동한다.
2. MultiServer.java를 먼저 실행하여 server ready...문구가 콘솔에 출력될때까지 기다린다.
3. MultiClient.java를 실행한다. IP와 채팅방에서 사용할 pw입력하여 접속한다.
4. 다중의 Client를 실행하여 서로통신해본다.

실행예제
![TestCase2](https://user-images.githubusercontent.com/12209348/81933760-db47de80-9628-11ea-9232-42c043209ef8.jpg)
 - 
![TestCase](https://user-images.githubusercontent.com/12209348/81933767-dc790b80-9628-11ea-83b2-f9a723cd6718.jpg)
 - 
 
 수집되는 정보 IP, ID, PW를 기반으로 시스템로그에 채팅기록을 수집할 수 있다.
 자바 소켓으로 통신이 되는 구조.
