import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AngularCropperjsComponent} from 'angular-cropperjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  @ViewChild('angularcropper') angularCropper: AngularCropperjsComponent;
  @ViewChild('crop_canvas') canvas: ElementRef;

  title = 'Canvas cropping ';
  edit: boolean = false;
  cropperOptions: any;
  image: any;
  base64String: string;

  ngOnInit(): void {
  }

  clickProfile(): void {
    this.edit = true;
    this.cropperOptions = {
      aspectRatio: 1 / 1,
      crop: (event) => {
        this.base64String = this._getCanvasData();
      }
    };
  }

  rotateLeft(): void {
    this.angularCropper.cropper.rotate(-90);
  }

  rotateRight(): void {
    this.angularCropper.cropper.rotate(90);
  }

  getCanvasData(): void {
    console.log(this.angularCropper.imageUrl);
  }

  cancel(): void {
    this.edit = false;
  }

  private _getCanvasData(): any {
    const result: HTMLCanvasElement = this.angularCropper.cropper.getCroppedCanvas({
      aspectRatio: 1,
      width: 400,
      height: 400
    });

    return result.toDataURL();
  }
}
