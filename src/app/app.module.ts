import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { PostModule } from './modules/post.module';
import { SharedModule } from './modules/shared.module';
import { UserModule } from './modules/user.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    PostModule,
    SharedModule,
    UserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
    ]),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
