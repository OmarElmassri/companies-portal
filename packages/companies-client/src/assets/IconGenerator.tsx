// Icon Generator Util

// Get icons props interface
interface GetIconProps {
  name: string;
  size?: string;
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
  classes?: string;
}

// Get Icons
export const GetIcon = ({
  name,
  size,
  color,
  onClick,
  disabled,
  classes,
}: GetIconProps): JSX.Element => {
  return (
    <div
      className={`icon-${size ?? "tiny"} ${
        color ? color : name ? "brand" : "second"
      }-back ${disabled && "icon-disabled"} ${classes}`}
      onClick={onClick}
      style={{
        WebkitMask: `url(/assets/icons/${
          name ?? "error"
        }.svg) no-repeat center`,
        mask: `url(/assets/icons/${name ?? "error"}.svg) no-repeat center`,
      }}
    ></div>
  );
};
