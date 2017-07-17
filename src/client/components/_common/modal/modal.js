import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import './modal.scss';

class ModalComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.isOpen,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen !== this.state.isOpen) {
            this.setState({
                isOpen: nextProps.isOpen,
            });
        }
    }

    render() {
        const {closeTimeoutMS, shouldCloseOnOverlayClick, contentLabel, onAfterOpen, className} = this.props;
        const modalClass = 'modal-inner ' + className;

        return (
            <ReactModal isOpen={this.state.isOpen}
                        closeTimeoutMS={closeTimeoutMS}
                        shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
                        contentLabel={contentLabel}
                        overlayClassName="component-modal"
                        className={modalClass}
                        onAfterOpen={onAfterOpen}
                        onRequestClose={() => this._onRequestClose()}>
                {this._renderCloseButton()}
                {this.props.children}
            </ReactModal>
        );
    }

    _renderCloseButton() {
        const {hideClose} = this.props;

        return !hideClose && (
            <button onClick={() => this._onRequestClose()} className="close-modal">
                close
            </button>
        );
    }

    _onRequestClose() {
        const {onRequestClose} = this.props;
        this.setState({
            isOpen: false,
        }, () => {
            onRequestClose && onRequestClose();
        });
    }
}

ModalComponent.propTypes = {
    isOpen: PropTypes.bool,
    closeTimeoutMS: PropTypes.number,
    shouldCloseOnOverlayClick: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
    contentLabel: PropTypes.string,
    hideClose: PropTypes.bool,
    className: PropTypes.string,

    onAfterOpen: PropTypes.func,
    onRequestClose: PropTypes.func,
};

ModalComponent.defaultProps = {
    contentLabel: 'Modal',
    shouldCloseOnOverlayClick: true,
};

export default ModalComponent;
