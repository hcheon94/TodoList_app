package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Builder //Builder는 생성자와 비슷한 역할 필요한 매개변수 활용해서 객체생성
@NoArgsConstructor //매개변수가 없는 생성자 구현
@AllArgsConstructor //모든 멤버변수를 매개변수로 받는 생성자 구현
@Data //Getter/Setter구현
public class TodoEntity {
	
	private String id;
	private String userId;
	private String title;
	private boolean done;
}
