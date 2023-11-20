import { ICellRenderer, ICellRendererParams } from 'ag-grid-community';

export class BooleanRenderer implements ICellRenderer {
  private eGui!: HTMLElement;

  init({ value }: ICellRendererParams): void {
    this.eGui = document.createElement('span');
    if (value !== '' || value !== undefined) {
      this.eGui.innerHTML = `<i style="color: ${value ? 'green' : 'red'}" width="20px" class="pi ${value ? 'pi-check' : 'pi-times'} " />`;
    }
  }

  getGui(): HTMLElement {
    return this.eGui;
  }

  refresh(): boolean {
    return false;
  }
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function dateFormatter(params: any): string {
  return new Date(params.value).toLocaleDateString('en-GB', {
    timeZone: 'UTC',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
