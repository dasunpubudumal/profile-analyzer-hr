import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from  '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { GithubService } from './services/github.service';
import { AppComponent } from './app.component';
import { GithubComponent } from './components/github/github.component';


@NgModule({
  declarations: [
    AppComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
