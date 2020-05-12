package service;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.http.HttpHeaders;
import java.util.ArrayList;
import java.util.Iterator;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
public class controllers {

    @Autowired
    private RestTemplate restTemplate;

    @CrossOrigin
    @GetMapping("/numOfUsers")
    public ArrayList<JsonNode> getNumOfUsers() throws MalformedURLException, IOException {
    JsonNode jsonNode = new ObjectMapper().readTree(new URL("https://community-housing-c73c2.firebaseio.com/numOfUsers.json?print=pretty"));
    Iterator<String> fieldNames = jsonNode.fieldNames();
    ArrayList<JsonNode> numOfUsers = new ArrayList<JsonNode>();

    while(fieldNames.hasNext()){
        String fieldName = fieldNames.next();
        JsonNode field = jsonNode.get(fieldName);
        NumOfUsers numOfUser = new NumOfUsers(field.get("month").asText(), field.get("amount").asText());
        JsonNode node = new ObjectMapper().valueToTree(numOfUser);
        numOfUsers.add(node);          
    }

    return numOfUsers;    
    
    }

    @CrossOrigin
    @GetMapping("/highLevelData")
    public JsonNode getHighLevelData() throws MalformedURLException, IOException {
        JsonNode jsonNode = new ObjectMapper().readTree(new URL("https://community-housing-c73c2.firebaseio.com/communities.json?print=pretty"));
        Iterator<String> fieldNames = jsonNode.fieldNames();
        int numberOfCommunities = 0;
        int numberOfListing = 0;
        int numberOfPageView = 0;
        int numberOfRegisteredUser = 0;

        
		while(fieldNames.hasNext()){
            numberOfCommunities += 1;
            String fieldName = fieldNames.next();
            JsonNode field = jsonNode.get(fieldName);
            numberOfListing += field.get("NumberOfListing").asInt();
            numberOfPageView += field.get("NumberOfPageView").asInt();
            numberOfRegisteredUser += field.get("NumberOfRegisteredUser").asInt();
        }

        HighLevelData highLevelData = new HighLevelData(numberOfCommunities, numberOfListing, numberOfPageView, numberOfRegisteredUser);
        JsonNode node = new ObjectMapper().valueToTree(highLevelData);
      
        return node;
    }

    @CrossOrigin
    @GetMapping("/communities")
    public ArrayList<JsonNode> getCommunities() throws MalformedURLException, IOException {
        JsonNode jsonNode = new ObjectMapper().readTree(new URL("https://community-housing-c73c2.firebaseio.com/communities.json?print=pretty"));
        Iterator<String> fieldNames = jsonNode.fieldNames();
        int id = 0;
        
        ArrayList<JsonNode> communities = new ArrayList<JsonNode>();

		while(fieldNames.hasNext()){
            id += 1;
            String fieldName = fieldNames.next();
            JsonNode field = jsonNode.get(fieldName);
            Communities community = new Communities(id, field.get("DateCreated").asText(), field.get("NumberOfListing").asText(), fieldName, field.get("averageRent").asText(), field.get("lowRent").asText(), field.get("highRent").asText());
            JsonNode node = new ObjectMapper().valueToTree(community);
            communities.add(node);          
        }

        return communities;
    }

    @CrossOrigin
    @GetMapping("/getNotes")
    public ArrayList<JsonNode> getNotes() throws MalformedURLException, IOException {
        JsonNode jsonNode = new ObjectMapper().readTree(new URL("https://community-housing-c73c2.firebaseio.com/notes.json"));
        Iterator<String> fieldNames = jsonNode.fieldNames();
        int id = 0;

        ArrayList<JsonNode> notes = new ArrayList<JsonNode>();

        while(fieldNames.hasNext()){
            id += 1;
            String fieldName = fieldNames.next();
            JsonNode field = jsonNode.get(fieldName);
            Note note = new Note(id, field.get("noteBy").asText(), field.get("subject").asText(), field.get("note").asText());
            JsonNode node = new ObjectMapper().valueToTree(note);
            notes.add(node);
        }

        return notes;
    }

    @CrossOrigin
    @PostMapping(value = "/addNote")
    public void createNote(@RequestBody Note note){
        Note result = restTemplate.postForObject("https://community-housing-c73c2.firebaseio.com/notes.json",note, Note.class);
    }
}