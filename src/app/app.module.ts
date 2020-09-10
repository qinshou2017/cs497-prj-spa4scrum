import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AmplifyUIAngularModule } from "@aws-amplify/ui-angular";
import { MaterialModule } from "./material.module";

import Amplify from "aws-amplify";
import aws_exports from "../aws-exports";
Amplify.configure(aws_exports);

// import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
// import { LoadingScreenInterceptor } from "./loading-screen/loading-screen.interceptor";
// import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import {HttpClient, HttpClientModule} from '@angular/common/http';
// // import {TranslateHttpLoader} from '@ngx-translate/http-loader';
// import {Observable} from 'rxjs';
// class TranslateHttpLoader implements TranslateLoader {
//   constructor(
//     private http: HttpClient,
//     public prefix: string = "/assets/i18n/",
//     public suffix: string = ".json",
//   ) {}
//   /**
//    * Gets the translations from the server
//    */
//   public getTranslation(lang: string): Observable<Object> {
//     return this.http.get(`${this.prefix}${lang}${this.suffix}`);
//   }
// }
// // AoT requires an exported function for factories
// export function HttpLoaderFactory(httpClient: HttpClient) {
//   return new TranslateHttpLoader(httpClient);
// }

@NgModule({
  declarations: [
    AppComponent,
    // LoadingScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    AmplifyUIAngularModule,
    MaterialModule,

    // HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      useDefaultLang: true,
      // loader: {
      //   provide: TranslateLoader,
      //   useFactory: HttpLoaderFactory,
      //   deps: [HttpClient]
      // },
    }),
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: LoadingScreenInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
