module powerbi.extensibility.visual.PBI_CV_46875942_DDAD_4AE8_9E1D_5F2E68779F1B  {
  export class Visual implements IVisual {

        private target: HTMLElement;
      
        constructor(options: VisualConstructorOptions) {
            this.target = options.element;
        }

        public update(options: VisualUpdateOptions) {
            console.log('Visual update', options);
            this.target.innerHTML =
              `<table id="myTable">
                <tr><td>Width:</td><td>${options.viewport.width.toFixed(0)}</td></tr>
                <tr><td>Height:</td><td>${options.viewport.height.toFixed(0)}</td></tr>
              </table>`;
        }
    }
}