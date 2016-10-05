import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { ShellComponent } from './shell.component'

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ ShellComponent],
    bootstrap: [ ShellComponent ]
})
export class AppModule {
    
}
