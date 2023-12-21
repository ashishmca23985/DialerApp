import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupervisorlayoutComponent } from './shared/supervisorlayout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '', component: SupervisorlayoutComponent, children: [
            { path: '', component: HomeComponent },
            { path: '**', redirectTo: '/notfound' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SupervisorRoutingModule { }
