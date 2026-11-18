import { userConfig } from './user-config.js';
import { defaultVendorFontSize, noPath, transformPath } from './modules/utils.js';
import UnitCircle from './shapes/unit-square/index.js';

export default class {

    static setup({ XMLSVG }) {

        return ([
            new XMLSVG.ViewGroup.Container({
                options: { id: 'renderer' }
            })
        ]);

    }

    static renderer({HTMLCanvas, XMLSVG, ENUMS}) {        

        const 
            dependencies = 
                {
                    HTMLCanvas, XMLSVG, ENUMS, userConfig, transformPath,
                }
        ;

        const 
            halfOfMySize = (stage.grid.GRIDCELL_DIM/2)
            ,
            scalingFactor$shared = 2
            ;

        const [renderer] = this.setup({XMLSVG});
        
            noPath(ENUMS.ID.circle_top)
            ? /* no path in DOM? - when draw a path! */
            UnitCircle.drawPath(renderer.id, {
                dependencies
                ,
                overrides: {
                    path: {
                        id: ENUMS.ID.circle_top,
                        stroke: ENUMS.COLOR.black,
                        fill: ENUMS.COLOR.orange,
                        dashed: 5, 
                        strokeWidth: 2,
                        scalingFactor: scalingFactor$shared * stage.grid.GRIDCELL_DIM,
                        opacity: 1/* set it to 0, if you want to hide the shape, visually! */,
                        transformations: {
                            SCALE_X: 1,
                            SCALE_Y: 1,
                            offsetX: Math.floor(stage.grid.SVG.X_IN_MIDDLE) - halfOfMySize*scalingFactor$shared,
                            offsetY: Math.floor(stage.grid.SVG.Y_IN_MIDDLE) - halfOfMySize*scalingFactor$shared,
                            angle: 0,
                            /* skew: { X|Y: { phi: -45 } }, */// choose from {X|Y}
                        }
                    }
                }
            }) 
            : false;

    }

}