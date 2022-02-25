import { Tooltip } from "antd";
import { Children } from "react";
import "./toolTip.less";

const CustomTooltip = (props: any) => {
  const { content, title, color, overlayClassName, children } = props;
  return (
    <>
      <div>
        <div>
          <Tooltip
            title={title}
            color={color}
            overlayClassName={
              overlayClassName ? `tb-0 ${overlayClassName}` : "tb-0"
            }
          >
            {children}
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default CustomTooltip;
