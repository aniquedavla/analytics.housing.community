package com.analytics.housing.community;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.database.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

@SpringBootApplication
public class Application {

	public static void main(String[] args) throws FileNotFoundException {
//			/Users/aniquedavla/Projects/
		SpringApplication.run(Application.class, args);
	}
}
