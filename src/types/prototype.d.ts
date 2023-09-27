import { RealSizeType } from '@@lib/prototype';

declare global {
  interface Element {
    /** Element: 'realSize' includes the margin and border as well */
    readonly realSize: RealSizeType;
  }
}
