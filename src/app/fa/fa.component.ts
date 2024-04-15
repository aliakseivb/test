import {Component, OnInit, ViewChild} from '@angular/core';

// const fs = require('fs');
// const folderPath = '/path/to/folder';
// fs.readdir(folderPath, (err, files) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   const randomIndex = Math.floor(Math.random() * files.length);
//   const randomFile = files[randomIndex];
//   console.log(randomFile);
// });

@Component({
  selector: 'app-fa',
  templateUrl: './fa.component.html',
  styleUrls: ['./fa.component.scss']
})
export class FaComponent {
  @ViewChild('image', {static: true}) image!: HTMLElement;
  faIconArr: string[] = ['user', 'check', 'circle-check'];
  faIcon: string = 'user';

  changeImage() {
    setTimeout(() => {
      this.faIcon = this.faIconArr[
        (this.faIconArr.findIndex(item => this.faIcon === item) === this.faIconArr.length - 1) ?
          0 : this.faIconArr.findIndex(item => this.faIcon === item) + 1]
    }, 3000);
  }
}
