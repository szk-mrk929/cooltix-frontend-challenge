/* eslint-disable no-unused-vars */
'use strict';

/**
 * Types
 */
export type RealSizeType = { readonly width: number; readonly height: number };

/**
 * Prototypes
 */
if (typeof window !== 'undefined') {
  Object.defineProperty(Element.prototype, 'realSize', {
    get: function () {
      const computedStyle = window.getComputedStyle(this);
      return {
        width: ['marginLeft', 'marginRight', 'borderLeftWidth', 'borderRightWidth'].reduce(
          (num, item) => (num += parseInt(computedStyle[item], 10)),
          this.clientWidth
        ),
        height: ['marginTop', 'marginBottom', 'borderTopWidth', 'borderBottomWidth'].reduce(
          (num, item) => (num += parseInt(computedStyle[item], 10)),
          this.clientHeight
        ),
      };
    },
  });
}
