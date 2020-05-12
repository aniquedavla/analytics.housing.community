//package service;
//
//import org.apache.http.HttpEntity;
//import org.apache.http.HttpHeaders;
//import org.apache.http.client.methods.HttpHead;
//import org.springframework.boot.web.client.RestTemplateBuilder;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Service;
//import org.springframework.web.client.RestTemplate;
//
//import java.util.Collections;
//import java.util.HashMap;
//import java.util.Map;
//
//@Service
//public class RestService {
//    public RestService(RestTemplateBuilder restTemplateBuilder) {
//        this.restTemplate = restTemplateBuilder.build();
//    }
//
//    private final RestTemplate restTemplate;
//    public Note createPost() {
//        String url = "https://jsonplaceholder.typicode.com/posts";
//
//        // create headers
//       org.apache.http.HttpHeaders headers = new HttpHeaders();
//        // set `content-type` header
////        headers.setContentType(String.valueOf(MediaType.APPLICATION_JSON));
//        // set `accept` header
//
//        // create a map for post parameters
//        Map<String, String> map = new HashMap<>();
//        map.put("userId", "1");
//        map.put("title", "Introduction to Spring Boot");
//        map.put("body", "Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications.");
//
//        // build the request
//        HttpEntity<Map<String, String>> entity = new HttpEntity<>();
//
//        // send POST request
//        ResponseEntity<Note> response = this.restTemplate.postForEntity(url, entity, Note.class);
//
//        // check response status code
//        if (response.getStatusCode() == HttpStatus.CREATED) {
//            return response.getBody();
//        } else {
//            return null;
//        }
//    }
//
//}
