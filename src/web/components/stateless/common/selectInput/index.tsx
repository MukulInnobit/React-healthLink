import React from "react";
import { Select, Form } from "antd";
import "./selectInput.less";

const SelectInput = (props: any) => {
  const { Option } = Select;
  const {
    className,
    bordered,
    defaultValue,
    onChange,
    optionValue,
    value,
    placeholder,
    optionClass,
    mode,
    labelSubName,
    initialValue,
    customLabelClass,
    name,
    rules,
  } = props;

  return (
    <Form.Item
      label={labelSubName}
      initialValue={initialValue}
      name={name}
      rules={rules}
      className={customLabelClass ? `ib-0 ${customLabelClass}` : "ib-0"}
    >
      <Select
        className={className ? `custom ${className}` : "custom"}
        bordered={bordered}
        defaultValue={defaultValue}
        onChange={onChange}
        value={value}
        mode={mode}
        dropdownClassName="dropdown"
        placeholder={placeholder}
      >
        {optionValue.map((option: any, index: any) => {
          return (
            <Option
              value={option.value}
              key={option.value}
              className={optionClass ? `optionClass` : "options"}
            >
              <span>{option.text}</span>
            </Option>
          );
        })}
      </Select>
    </Form.Item>
  );
};
export default SelectInput;
