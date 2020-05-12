package service;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class NumOfUsers {

  private String month;
  private String amount;


  public NumOfUsers(String month  , String amount) {
      this.month   = month ;
      this.amount = amount;
  }

  public String getmonth  (){
    return month  ;
}

  public String getamount(){
      return amount;
  }





  @Override
  public String toString() {
    return "month{ " +
        month +
        '}' +
        "amount{ " +
        amount +
        '}' 
        ;
  }
}