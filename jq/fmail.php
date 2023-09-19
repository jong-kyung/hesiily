<?php
// Cross-Site Scripting (XSS)을 방지하는 시큐어코딩
// strip_tags() -> 문자열에서 html과 php태그를 제거한다
// htmlspecialchars() -> 특수 문자를 HTML 엔터티로 변환
// 악의적인 특수문자 삽입에 대비하기 위함
 
$title = strip_tags(htmlspecialchars($_POST['address']));
$name = strip_tags(htmlspecialchars($_POST['name']));
$message = strip_tags(htmlspecialchars($_POST['content']));
$email_address = "gyoung3063413@gmail.com";// 회신용메일주소(없으면 에러)

$to = 'gyoung3063413@naver.com'; // 받는 측의 이메일 주소를 기입하는 부분
$email_subject = "[문의메일] $title"; // 메일 제목에 해당하는 부분
$email_body = "<p>성명: $name</p><p>내용: $message</p>";
$headers = "Return-Path: $email_address\n"; // 답장 주소
$headers .= "From: 방문자 <$email_address>\n";// 사용자 이름 변경
$headers .= "Content-Type: text/html;charset=utf-8\n"; //html문서로 인식
mail($to,'=?UTF-8?B?'.base64_encode($email_subject).'?=',$email_body,$headers,'-f'.$email_address);
$result = array('result'=>'true');
echo json_encode($result);
exit;
?>

