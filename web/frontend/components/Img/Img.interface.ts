import "styled-components";

interface ImgStyles {
  width?: number;
  height?: number;
  borderRadius?: number;
}

interface ImgProps extends ImgStyles {
  src?: string;
}

export type { ImgStyles, ImgProps };
