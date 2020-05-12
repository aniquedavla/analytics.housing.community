package service;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class HighLevelData {

  private int numberOfCommunities;
  private int totalNumberOfListings;
  private int totalRegisteredUsers;
  private int totalPageViews;


  public HighLevelData(int numberOfCommunities, int totalNumberOfListings, int totalRegisteredUsers, int totalPageViews) {
      this.numberOfCommunities = numberOfCommunities;
      this.totalNumberOfListings = totalNumberOfListings;
      this.totalRegisteredUsers = totalRegisteredUsers;
      this.totalPageViews = totalPageViews;
  }

  public int getNumberOfCommunities(){
    return numberOfCommunities;
}

  public int getTotalNumberOfListings(){
      return totalNumberOfListings;
  }

  public int getTotalRegisteredUsers(){
    return totalRegisteredUsers;
}

    public int getTotalPageViews(){
    return totalPageViews;
}



  @Override
  public String toString() {
    return "numberOfCommunities{ " +
        numberOfCommunities +
        '}' +
        "totalNumberOfListings{ " +
        totalNumberOfListings +
        '}' +
        "totalRegisteredUsers{ " +
        totalRegisteredUsers +
        '}' +
        "totalPageViews{ " +
          totalPageViews +
        '}'
        ;
  }
}