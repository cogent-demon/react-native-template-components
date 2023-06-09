import React from 'react';
import {Modal, View, TouchableWithoutFeedback} from 'react-native';
import VerticalSwipeView from 'react-native-vertical-swipe-view';
import {CModalProps} from './model';

const ModalComponent: CModalProps = props => {
  const {
    visible = false,
    maxHeight = 400,
    onRequestClose,
    style,
    backgroundColor = 'white',
    headerStyle,
    renderHeader,
  } = props;

  return (
    <Modal {...props} visible={visible} style={{flex: 1}}>
      <View
        style={[
          {
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.4)',
          },
          style,
        ]}>
        <TouchableWithoutFeedback onPress={onRequestClose}>
          <View style={{flex: 1}} />
        </TouchableWithoutFeedback>
        <VerticalSwipeView
          position="bottom"
          backgroundColor={backgroundColor}
          maxHeight={maxHeight}
          visible={visible}
          headerStyle={headerStyle}
          renderHeader={renderHeader}
          onRequestClose={onRequestClose}>
          {props?.children}
        </VerticalSwipeView>
      </View>
    </Modal>
  );
};

export default ModalComponent;
