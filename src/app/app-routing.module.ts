import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './core';
import { ArticleResolver } from './article/article-resolver.service';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    // canActivate: [AdminGuard] - as an exercise for the reader
  },
  {
    path: 'trackby',
    loadChildren: () => import('./task-trackby/trackby.module').then(m => m.TrackByModule)
  },
  {
    path: 'onpush',
    loadChildren: () => import('./task-onpush/onpush.module').then(m => m.OnPushModule)
  },
  {
    path: 'debounce',
    loadChildren: () => import('./task-debounce/debounce.module').then(m => m.DebounceModule)
  },
  {
    path: 'listener',
    loadChildren: () => import('./task-listener/listener.module').then(m => m.ListenerModule)
  },
  {
    path: 'settings',
    canActivate: [AuthGuard],
    loadChildren: () => import('./settings/settings.module').then(s => s.SettingsModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
  },
  {
    path: 'editor',
    loadChildren: () => import('./editor/editor.module').then(m => m.EditorModule),
  },
  {
    path: 'article',
    loadChildren: () => import('./article/article.module').then(a => a.ArticleModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preload all modules; optionally we could
      // implement a custom preloading strategy for just some
      // of the modules (PRs welcome 😉)
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
