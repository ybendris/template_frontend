import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbar } from "@angular/material/toolbar";
import { MatIcon } from "@angular/material/icon";
import { MatAnchor, MatButton, MatIconButton, MatMiniFabButton } from "@angular/material/button";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from "@angular/material/sidenav";
import { MatListItem, MatNavList } from "@angular/material/list";
import { AsyncPipe, NgForOf } from "@angular/common";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { MatSlideToggle } from "@angular/material/slide-toggle";
import { ThemeService } from "./services/theme.service";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet,
        MatToolbar,
        MatIcon,
        MatIconButton,
        LoginPageComponent,
        MatSidenavContent,
        MatSidenav,
        MatSidenavContainer,
        MatButton,
        RouterLink,
        MatNavList,
        MatListItem, MatAnchor, RouterLinkActive, NgForOf, AsyncPipe, MatSlideToggle, MatMiniFabButton],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {
    pages = [
        {
            icon: 'home',
            text: 'Se connecter',
            link: '/login'
        },
        {
            icon: 'star',
            text: 'Address',
            link: '/address'
        },
        {
            icon: 'star',
            text: 'Table',
            link: '/table'
        },
        {
            icon: 'star',
            text: 'Dashboard',
            link: '/dashboard'
        },
        {
            icon: 'star',
            text: 'Tree',
            link: '/tree'
        },
        {
            icon: 'star',
            text: 'Drag-Drop',
            link: '/drag-drop'
        },
    ];
    isDarkMode: boolean;

    public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    constructor(private themeService: ThemeService, private breakpointObserver: BreakpointObserver) {
        this.isDarkMode = this.themeService.isDarkMode();
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        this.themeService.setDarkMode(this.isDarkMode);
    }


}
