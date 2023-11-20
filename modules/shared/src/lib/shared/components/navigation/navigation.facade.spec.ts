import { TestBed } from '@angular/core/testing';
import { Router, NavigationEnd } from '@angular/router';
import { MenuItem, MenuItemCommandEvent } from 'primeng/api';
import { NavigationFacade } from './navigation.facade';
import { of } from 'rxjs';

describe('NavigationConnector', () => {
  let navigationConnector: NavigationFacade;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NavigationFacade,
        {
          provide: Router,
          useValue: {
            events: of(new NavigationEnd(0, '/test', '/test')), // Mock the Router events observable
            navigate: jest.fn(),
          },
        },
      ],
    });

    navigationConnector = TestBed.inject(NavigationFacade);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(navigationConnector).toBeTruthy();
  });

  it('should change active item on navigation change', () => {
    const menuItem: MenuItem = {
      label: 'Test',
      icon: 'pi pi-fw pi-test',
      id: 'test',
      command: (event: MenuItemCommandEvent) => {
        navigationConnector.onNavigationChange(event.item as MenuItem, 'test');
      },
    };

    jest.spyOn(navigationConnector as any, 'changeActiveItem');

    navigationConnector.onNavigationChange(menuItem, 'test');

    expect(navigationConnector['changeActiveItem']).toHaveBeenCalledWith(menuItem);
    expect(router.navigate).toHaveBeenCalledWith(['test']);
  });

  it('should find menu item by active route', () => {
    const menuItems: MenuItem[] = [
      {
        label: 'Vessels',
        icon: 'pi pi-fw pi-database',
        id: 'vessels',
        command: (_event: MenuItemCommandEvent) => {},
      },
      {
        label: 'Emissions',
        icon: 'pi pi-fw pi-chart-bar',
        id: 'emissions',
        command: (_event: MenuItemCommandEvent) => {},
      },
    ];

    const activeRoute: NavigationEnd = new NavigationEnd(0, '/vessels', '/vessels');
    const activeMenuItem = (navigationConnector as any).findMenuItemByActiveRoute(activeRoute, menuItems);

    expect(activeMenuItem).toEqual(menuItems[0]);
  });
});
