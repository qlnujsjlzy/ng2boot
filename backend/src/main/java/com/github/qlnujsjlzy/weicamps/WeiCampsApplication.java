package com.github.qlnujsjlzy.weicamps;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WeiCampsApplication {

	public static void main(String[] args) {
		SpringApplication.run(WeiCampsApplication.class, args);
	}

//	@Bean
//	public WebMvcConfigurer corsConfigurer(){
//		return new WebMvcConfigurerAdapter(){
//			@Override
//			public void addCorsMappings(CorsRegistry registry){
//				registry.addMapping("/greeting-javaconfig").allowedOrigins("http://localhost:8000");
//			}
//		};
//	}
}
