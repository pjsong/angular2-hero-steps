import {Http, Request, Headers, RequestOptions, RequestMethod, Response} from "@angular/http";
export class HttpUtils{
  constructor(private http: Http){}

  POST(url: string, data: any): any{
    let headers = new Headers();
    // let token = localStorage.getItem("token");
    // if(token){
    //   headers.append("token", "Token "+token)
    // }
    headers.append("Content-Type", "application/json" );
    let options = new RequestOptions({
      method: RequestMethod.Post,
      url: url,
      headers: headers,
      body: JSON.stringify(data)
    })

    return this.http.request(new Request(options)).map(
      (res: Response) => {
        return res.json()
      }
    );
  }
}

