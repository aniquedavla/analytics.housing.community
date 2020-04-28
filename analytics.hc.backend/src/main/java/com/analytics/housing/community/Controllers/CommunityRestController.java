package com.analytics.housing.community.Controllers;

import com.analytics.housing.community.Entities.Community;
import com.analytics.housing.community.Services.CommunityService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/")
public class CommunityRestController {
//    @GetMapping(value = "/community/{communityID}")
//    public Community getVehicle(@PathVariable("communityID") String communityID){
//        return new Community("","Muslim Community");
//    }
//    @GetMapping(value = "/communities")
//    public Iterable<Community> getAllCommunities() {
//    }

}
