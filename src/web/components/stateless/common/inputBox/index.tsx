import React, { useState } from "react";
import { Form, Input } from "antd";
import './inputBox.less';

const InputBox = (props: any) => {
    const {} =props
    const {placeholder,name,value,onChange,customInput, refer,
        type,labelSubName, initialValue, rules,customLabelClass} = props
  return (
      <Form.Item
        label={labelSubName}
        initialValue={initialValue}
        name={name}
        rules={rules}
        className={customLabelClass?`ib-0 ${customLabelClass}`: "ib-0"}
      >
        <Input
        ref={refer}
          placeholder={placeholder}
          name={name}
          value={value}
          type={type}
          onChange={onChange}
          className={customInput? `ib-1 ${customInput}`: "ib-1"}
        />
      </Form.Item>
  );
};

export default InputBox;

