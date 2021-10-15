import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { PusherModule } from './core/services/pusher.module';
import { HomeModule } from './home/home.module';
import { FooterComponent, HeaderComponent, SharedModule } from './shared';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AuthModule,
    AppRoutingModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        m: 55,
        h: 14
      }
    }),
    // pusher.com account required
    PusherModule.forRoot(/** Pusher key here*/ null, {
      cluster: 'eu',
      forceTLS: true
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
