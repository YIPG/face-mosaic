import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.css"]
})
export class UploadComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  file: File = null
  imgURL: string | ArrayBuffer = null
  reader = new FileReader()

  handleFileInput(files: FileList) {
    this.file = files.item(0)
    this.preview()
  }

  preview() {
    if (this.file) {
      this.reader.readAsDataURL(this.file)
    }
    // イベントバブリング
    this.reader.onload = e => {
      this.imgURL = this.reader.result
    }
  }

  onClick() {
    console.log(this.imgURL)
  }
}
