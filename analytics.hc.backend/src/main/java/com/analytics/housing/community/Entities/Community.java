package com.analytics.housing.community.Entities;

import java.util.ArrayList;

public class Community {
    private String id;

    public Community(String id, String name) {
        this.id = id;
        this.name = name;
    }

    private String name;
    private double averageRent;
    private int numberOfListings;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getAverageRent() {
        return averageRent;
    }

    public void setAverageRent(double averageRent) {
        this.averageRent = averageRent;
    }

    public int getNumberOfListings() {
        return numberOfListings;
    }

    public void setNumberOfListings(int numberOfListings) {
        this.numberOfListings = numberOfListings;
    }

    public double getLowestRent() {
        return lowestRent;
    }

    public void setLowestRent(double lowestRent) {
        this.lowestRent = lowestRent;
    }

    public double getHighestRent() {
        return highestRent;
    }

    public void setHighestRent(double highestRent) {
        this.highestRent = highestRent;
    }

    private double lowestRent;
    private double highestRent;
//    private ArrayList popularListingsID;
}
