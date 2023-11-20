import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { NavigationFacade } from './navigation.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'common-navigation',
  standalone: true,
  imports: [CommonModule, TabMenuModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  private readonly navigationConnector: NavigationFacade = inject(NavigationFacade);
  readonly menuItems: MenuItem[] = this.navigationConnector.menuItems;
  activeItem$: Observable<MenuItem> = this.navigationConnector.activeItem$;
}
