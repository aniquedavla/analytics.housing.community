package service;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Communities {

  private int id;
  private String name;
  private String dateCreated;
  private String numberOfListings;
  private String averageRent;
  private String lowRent;
  private String highRent;


  public Communities(int id, String dateCreated, String numberOfListings, String name, String averageRent, String lowRent, String highRent) {
      this.id = id;
      this.name = name;
      this.dateCreated = dateCreated;
      this.numberOfListings = numberOfListings;
      this.averageRent = averageRent;
      this.lowRent = lowRent;
      this.highRent = highRent;
  }

  public int getid(){
    return id;
}

  public String getname(){
      return name;
  }

  public String getDateCreated(){
    return dateCreated;
  }

  public String getNumberOfListings(){
    return numberOfListings;
  }

  public String getaverageRent(){
    return averageRent;
}

public String getlowRent(){
    return lowRent;
}

public String getHighRent(){
  return highRent;
}



  @Override
  public String toString() {
    return "id{" +
        id +
        '}' +
        "name{" +
        name +
        '}' +
        "dateCreated{" +
        dateCreated +
        '}' +
        "numberOfListings{" +
        numberOfListings +
        '}' +
        "averageRent{" +
          averageRent +
        '}' +
        "lowRent" + 
        lowRent +
        '}' +
        "highRent" +
        highRent +
        '}'
        ;
  }
}