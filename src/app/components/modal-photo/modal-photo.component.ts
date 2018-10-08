import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-photo',
  templateUrl: './modal-photo.component.html',
  styleUrls: ['./modal-photo.component.css']
})
export class ModalPhotoComponent implements OnInit {
public photoJSON : String;
  constructor() { }

  ngOnInit() {
    fetch('../../../assets/photos.json')
    .then(res => res.json())
    .then(photoJSON => {
        console.log(photoJSON);
        this.photoJSON = photoJSON;
     });
  }

}
