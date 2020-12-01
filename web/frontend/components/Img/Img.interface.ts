import "styled-components";

interface ImgStyles {
  width?: string;
  height?: string;
  borderRadius?: string;
}

interface ImgProps extends ImgStyles {
  src?: string;
}

export type { ImgStyles, ImgProps };
