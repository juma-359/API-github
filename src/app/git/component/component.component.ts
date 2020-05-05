import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  profile: any;
  repos: any;
  username: any;

  constructor(private profileService profileService) { }

  findProfile(){
    this.profileService.updateProfile(this.username)
    this.profileService.getProfileInfo().subscribe(profile=>{
      console.log(profile);
      this.profile = profile;
    });

    this.profileService.getProfilerepos

  }

  ngOnInit(): void {
  }

}
