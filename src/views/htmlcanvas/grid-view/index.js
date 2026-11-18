export class grid_view {

    /**
     * @param {{context: CanvasRenderingContext2D, options: Object}} params
     * @returns {CanvasRenderingContext2D}
     */
    static draw({context, options = {}}){
        const dpr = window.devicePixelRatio || 1;
        const cell = stage.grid.GRIDCELL_DIM;           // CSS px
        const w = context.canvas.width / dpr, h = context.canvas.height / dpr;
        const lw = options.lineWidth || 1;

        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.setTransform(dpr, 0, 0, dpr, 0, 0);
        context.kind = options.kind || 'grid';
        context.lineWidth = lw;
        context.strokeStyle = options.strokeStyle || 'black';
        if (options.hidden || !(cell > 0)) return context;

        /** snap to device pixels so strokes stay crisp */
        const snap = v => (Math.round(v * dpr) + (Math.round(lw * dpr) % 2 ? 0.5 : 0)) / dpr;
        const maxCol = Math.floor(w / cell), maxRow = Math.floor(h / cell);

        context.beginPath();
        if (options.dotted) {
            for (let r = 0; r <= maxRow; r++)
                for (let c = 0; c <= maxCol; c++) context.rect(snap(c * cell), snap(r * cell), 1, 1);
        } else {
            for (let c = 0; c <= maxCol; c++) { const x = snap(c * cell); context.moveTo(x, 0); context.lineTo(x, h); }
            for (let r = 0; r <= maxRow; r++) { const y = snap(r * cell); context.moveTo(0, y); context.lineTo(w, y); }
        }
        context.stroke();
        return context;
    }

}