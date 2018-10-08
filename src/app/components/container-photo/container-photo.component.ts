import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-photo',
  templateUrl: './container-photo.component.html',
  styleUrls: ['./container-photo.component.css']
})
export class ContainerPhotoComponent implements OnInit {
constructor() { }



  ngOnInit() {
   fetch('../../../assets/photos.json')
    .then(res => res.json())
    .then(photoJSON => {
        console.log(photoJSON);
        // this.viewPhoto(photoJSON);
    });
  }
  
//   viewPhoto(photoJSON){
//     let contentCard = document.getElementById('contentCard');
//     contentCard.innerHTML = '';
//     for (let photoCard of photoJSON) {
//         console.log(photoCard.nameAuthor);
//         contentCard.innerHTML +=
//             `
// 		<div class="card border-0 mt-5 linkModal p-2">
// 	    <a href="#" data-toggle="modal" data-target="#id${photoCard.id}" class="">
// 	  	<img class="card-img-top photoCard" src="${photoCard.urlPhoto}" alt="Card image cap">
// 		    <div class="card-body">
// 		    	<h5 class="card-title titlePhoto">${photoCard.namePhoto}</h5>
// 		    	<p class="pintPhoto float-left pr-3 ml-3"><i class="fas fa-thumbtack"></i> 32,2</p>
// 			    <p class="pintPhoto"><i class="fas fa-check"></i> 11</p>
// 			    <p class="card-text descriptionPhoto">${photoCard.description}</p>
// 			  <div class="avatarCard">M</div>
// 			<p class="authorPhoto">${photoCard.nameAuthor}</p>
// 		</div>
// 	  </a>
//   </div>
// <!-- MODAL-->
//   <div class="modal fade showColor" id="id${photoCard.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
// 	  <button type="button" class="close mr-2 mt-2" data-dismiss="modal" aria-label="Close">
// 		<span aria-hidden="true">&times;</span>
// 	  </button>
// 	  <div class="modal-dialog modal-dialog-centered w-50" role="document">
// 		  <div class="modal-content  border-0 rounded">
// 			  <div class="header">
// 			  	<div class="pinsModal">
// 				  	<span><i class="fas fa-upload px-2"></i></span>
// 					  <span><i class="fas fa-check px-2"></i></span>
// 				  	<span><i class="fas fa-ellipsis-h px-2"></i></span>
// 				  </div>
// 				  <button class="btn btn-danger btnModal"><i class="fas fa-thumbtack pr-1"></i> Guardar</button>
// 		  	</div>
// 			  <h5 class="titlePhotoModal">${photoCard.namePhoto}</h5>
// 			  <div class="modal-body">
// 			  	<img class="card-img-top photoCard" src="${photoCard.urlPhoto}" alt="Card image cap">
// 			  </div>
// 			  <div class="footer">
// 				  <div class="pinsModal">
// 				  	<span><i class="fas fa-upload px-2"></i></span>
// 					  <span><i class="fas fa-check px-2"></i></span>
// 				  	<span><i class="fas fa-ellipsis-h px-2"></i></span>
// 				  </div>
// 				  <button class="btn btn-danger btnModal"><i class="fas fa-thumbtack pr-1"></i> Guardar</button>
// 			  </div>
// 			<div class="infoFooterModal">
// 				<div class="avatarCard">M</div>
// 				<p class="authorPhoto">${photoCard.nameAuthor}</p>
// 				<button class="btnRead">Leerlo</button>
// 			</div>
// 			<div class="descripcionModalFooter">
// 				<p class="a">${photoCard.description}</p>
// 			</div>
// 		</div>
// 	</div>
// </div>
// 		`;
//     };
// };

}
