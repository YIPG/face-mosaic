import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { environment } from "../environments/environment"

@Injectable({
  providedIn: "root"
})
export class UploadImageService {
  constructor(private http: HttpClient) {}

  // cloud vision APIは課金方式です。POSTリクエストには以下のリファレンスを用いて認証を行ってください
  // https://cloud.google.com/vision/docs/auth?hl=ja
  body = {
    requests: [
      {
        image: {
          // ここにBase64エンコードした画像を差し込む
          content: "/9j/7QBEUGhvdG9...image contents...eYxxxzj/Coa6Bax//Z"
        },
        features: [
          {
            type: "FACE_DETECTION",
            maxResults: 15
          }
        ]
      }
    ]
  }

  options = {}

  // use Observable
  uploadImage() {
    return this.http.post(environment.cloudVisionUrl, this.body)
  }
}
