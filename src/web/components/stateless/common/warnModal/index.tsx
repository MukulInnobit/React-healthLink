import {Col, Modal, Row} from 'antd';
import { redCross, check } from "../../../../images";
import Button from "../button";
import "./warnModal.less"
import { ModalType } from "../../../../constants/enums";

interface WarnModalProps {
    type: ModalType.SUCCESS | ModalType.WARN,
    primaryText: string,
    secondaryText: string,
    isModalVisible: boolean,
    confirmButton: string,
    cancelButton: string,
    confirmCallback: Function,
    cancelCallback: Function,
} 
const WarnModal = (props: WarnModalProps) => {
  const {
    type,
    primaryText,
    secondaryText,
    isModalVisible,
    confirmButton,
    cancelButton,
    confirmCallback,
    cancelCallback,
  } = props;

  const onConfirmCallback = () => {
    if (confirmCallback) {
      confirmCallback();
    }
  };

  const onCancelCallback = () => {
    if (cancelCallback) {
      cancelCallback();
    }
  };
const getIconType = () => {
  if(type == ModalType.WARN){
    return redCross
  }else return check
}
  return (
      <Modal
        wrapClassName="warnModal"
        onCancel={onCancelCallback}
        centered 
        footer={null}
        visible={isModalVisible}
      >
         <Row justify="center">
                <Col>
                    <img className="redCoss" src={getIconType()} />
                </Col>
            </Row>
            <Row>
                <Col xl={24} className="delete-message">
                    <span>{primaryText}</span>
                </Col>
            </Row>
            <Row>
                <Col xl={24} className="delete-text">
                    <span>{secondaryText}</span>
                </Col>
            </Row>
            <Row gutter={20} justify="center">
                <Col xl={7} className="button-modal">
                    <Button type="secondary cancelClick" onClick={onCancelCallback}>{cancelButton}</Button>
                </Col>
                <Col xl={7} className="button-modal">
                    <Button type="secondary deleteClick" onClick={onConfirmCallback}>{confirmButton}</Button>
                </Col>
            </Row>
      </Modal>
  );
};

export default WarnModal;
