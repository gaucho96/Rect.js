# **Rect.js** (_a fork of **Vekt.js|-light**_)

> Refer to [rect_flutter](https://github.com/projektorius96/rect_flutter) port of this (_in progress_)

### Annotations

> The annotations you may have stumbled upon by examining the source code, as follows:..

```diff
    DEV_NOTE # a note left by author developer
    DEV_NOTE (!) # the IMPORTANT note left by author developer
    EXAMPLE # in-code example next to parameter (option) explaining its consumption
```

### Table of contents

> _Coming soon..._

### Development environment

#### **PREREQUISITES**:

1) Make sure you got the latest stable [`Node.js`](https://nodejs.org/en/download), as well as the dev dependency of [`Vite.js`](https://vite.dev/guide/); actually, if you install Node.js, clone this repo and run `npm ci` command on your active terminal - you're basically good to go!

#### **DRAWING SURFACE**:

Most of the time you will be tinkering with the code under the following paths:

- `<root>/implementation/user-config.js` that holds web application-level config;
- `<root>/implementation/app/index.js` that holds two static calls:
  - the `setup` meant to register `svg-container`, under which the instance(s) of container-bound `svg-path`  will be nested;
  - the `renderer` does hold the `svg-path`(-s) (_see `drawPaths` in `/app/shapes/renderer.js`_) implementation (_each "shape" implementation is defined under `/app/shapes/`_) respectively;

### Improvements

#### Grid implementation

> This primarily refers to `./src/views/htmlcanvas/grid-view/index.js`

The important distinction is between the unit of the input and the unit of the resulting value.

In the browser:
- Our `stage.clientWidth` is measured in CSS pixels (not physical device pixels).
- Our `stage.grid.GRIDCELL_DIM`, if calculated from `clientWidth`, inherits that CSS-pixel coordinate system.
- Our `gridcellDim`, if derived from `GRIDCELL_DIM` without a conversion, is therefore also in CSS pixels, thus multiplying the `gridcellDim` by `devicePixelRatio` (DPR) should solve visual discrepancy, if any.

**In short**: CSS pixels are logical units, not physical screen pixels. The browser handles the conversion to physical pixels using the device pixel ratio (DPR), which may require to be in sync with `canvas.width` or `canvas.height` each returning physical pixels, respectively.

---

#### Useful references

- [SVGSVGElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGSVGElement)
- [SVGPathElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement)

---

> Made with ♥ by [**projektorius96**](https://github.com/projektorius96) | 2026