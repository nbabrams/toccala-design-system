import React from "react";

export function TexturePanel({ basePath = "", children, style, ...rest }) {
  return (
    <div
      style={{
        background: `url(${basePath}assets/img/texture-tile.png) top left / 220px 220px repeat`,
        ...style,
      }}
      {...rest}
    >{children}</div>
  );
}
export default TexturePanel;
