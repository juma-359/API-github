import { Component, OnInit } from '@angular/core';
// import { ProfileService } from '../../services/gits.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  profile: any;
  repos: any;
  username: any;

  constructor(private profileService) { }

  findProfile(){
    this.profileService.updateProfile(this.username)
    this.profileService.getProfileInfo().subscribe(profile=>{
      console.log(profile);
      this.profile = profile;
    });

    this.profileService.getProfilerepos().subscribe(repo=>{
      console.log(repo);
      this.repos = repo;
    });

  }

  ngOnInit() {
  }

}
