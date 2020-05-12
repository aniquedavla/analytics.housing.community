package service;

import java.io.IOException;
import java.net.MalformedURLException;

import java.util.concurrent.ExecutionException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.ListUsersPage;


import org.springframework.context.annotation.Bean;

import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@RestController
public class testing {

	@Bean
	public RestTemplate getRestTemplate() {
		return new RestTemplate();
	}

	public static void main(String[] args)
			throws FirebaseAuthException, InterruptedException, ExecutionException, MalformedURLException, IOException {

		
		SpringApplication.run(testing.class, args);
	
        
        
		
	}
	

	
}