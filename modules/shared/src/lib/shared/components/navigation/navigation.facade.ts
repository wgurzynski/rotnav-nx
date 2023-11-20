import { Injectable } from '@angular/core';
import { MenuItem, MenuItemCommandEvent } from 'primeng/api';
import { NavigationEnd, Router } from '@angular/router';
import { ROUTE_NAMES } from '../../constants/routes.constants';
import { BehaviorSubject, filter, map, Observable, shareReplay, take } from 'rxjs';

@Injectable({ providedIn: 'any' })
export class NavigationFacade {
  public readonly menuItems: MenuItem[] = [
    {
      label: 'Vessels',
      icon: 'pi pi-fw pi-database',
      id: ROUTE_NAMES.VESSELS_PAGE,
      command: (event: MenuItemCommandEvent) => {
        this.onNavigationChange(event.item as MenuItem, ROUTE_NAMES.VESSELS_PAGE);
      },
    },
    {
      label: 'Emmisions',
      icon: 'pi pi-fw pi-chart-bar',
      id: ROUTE_NAMES.EMISSIONS_PAGE,
      command: (event: MenuItemCommandEvent) => {
        this.onNavigationChange(event.item as MenuItem, ROUTE_NAMES.EMISSIONS_PAGE);
      },
    },
  ];
  private readonly activeItemSub$: BehaviorSubject<MenuItem> = new BehaviorSubject<MenuItem>(this.menuItems[0]);
  public readonly activeItem$: Observable<MenuItem> = this.activeItemSub$.asObservable().pipe(shareReplay());

  constructor(private router: Router) {
    router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((route) => this.findMenuItemByActiveRoute(route, this.menuItems)),
        take(1)
      )
      .subscribe((activeRouteMenuItem: MenuItem) => this.changeActiveItem(activeRouteMenuItem));
  }

  onNavigationChange(menuItem: MenuItem, url?: string): void {
    this.changeActiveItem(menuItem);
    this.router.navigate([url]);
  }

  private changeActiveItem(activatedMenuItem: MenuItem): void {
    this.activeItemSub$.next(activatedMenuItem);
  }

  private findMenuItemByActiveRoute(route: any, menuItems: MenuItem[]): MenuItem {
    const routeName = route.url.replace('/', '');

    return menuItems.filter((menuItem: MenuItem) => menuItem.id === routeName)[0];
  }
}
