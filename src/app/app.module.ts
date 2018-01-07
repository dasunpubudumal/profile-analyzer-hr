import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from  '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { GithubService } from './services/github.service';
import { AppComponent } from './app.component';
import { GithubComponent } from './components/github/github.component';
import { StackoverflowComponent } from './components/stackoverflow/stackoverflow.component';
import { TwitterComponent } from './components/twitter/twitter.component';
import { LinkedinComponent } from './components/linkedin/linkedin.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    StackoverflowComponent,
    TwitterComponent,
    LinkedinComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
