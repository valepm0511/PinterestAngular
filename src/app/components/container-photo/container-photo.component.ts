import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-photo',
  templateUrl: './container-photo.component.html',
  styleUrls: ['./container-photo.component.css']
})
export class ContainerPhotoComponent implements OnInit {
  public photoJSON : string;
  public id : string;

constructor() { }

ngOnInit() {
   fetch('assets/photos.json')
    .then(res => res.json())
    .then(photoJSON => {
        console.log(photoJSON);
        this.photoJSON = photoJSON;
     });
  }

}
