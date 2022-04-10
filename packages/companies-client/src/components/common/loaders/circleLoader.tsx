import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

interface ICircleLoader {
  size?: string;
  classes?: string;
  style?: { [key: string]: string };
}

const CircleLoader: React.FunctionComponent<ICircleLoader> = ({
  size,
  classes,
  style,
}: ICircleLoader) => {
  return (
    <div style={style} className={`circle-loader circle-${size} ${classes}`}>
      <CircularProgress />
    </div>
  );
};

export default CircleLoader;
