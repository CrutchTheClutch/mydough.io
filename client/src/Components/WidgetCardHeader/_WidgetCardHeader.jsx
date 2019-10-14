import React, { Component } from 'react';
import { CardHeader, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';

import WidgetButton from './WidgetButton';
import NewEntityModal from './NewEntityModal';

class WidgetCardHeader extends Component {
  constructor(props) {
    super(props);
    this.buttonType = ['remove', 'add'];
    this.toggleCreateModal = this.toggleCreateModal.bind(this);

    this.state = {
      createModal: false,
    };
  }

  toggleCreateModal() {
    const {
      createModal,
    } = this.state;

    this.setState({
      createModal: !createModal,
    });
  }

  render() {
    const {
      actionTitle,
      actionConfirm,
      buttonID,
      cardHeader,
      getAccounts,
      getBudgets,
      toggleDeleteButtons,
    } = this.props;

    const {
      createModal,
    } = this.state;

    return (
      <CardHeader>
        <Row className="info" noGutters>
          <Col xs={8}>
            <h3 className="cardHeader">{cardHeader}</h3>
          </Col>
          <Col xs={4} className="d-flex justify-content-end">
            <WidgetButton
              id={this.buttonType[0] + buttonID}
              tooltipMessage={`Remove a${actionTitle}`}
              buttonHandler={toggleDeleteButtons}
              buttonType={this.buttonType[0]}
            />
            <WidgetButton
              id={this.buttonType[1] + buttonID}
              tooltipMessage={`Add a${actionTitle}`}
              buttonHandler={this.toggleCreateModal}
              buttonType={this.buttonType[1]}
            />
            <NewEntityModal
              modalTitle={actionTitle}
              actionConfirm={actionConfirm}
              modalBody={cardHeader}
              getAccounts={getAccounts}
              getBudgets={getBudgets}
              buttonHandler={this.toggleCreateModal}
              buttonState={createModal}
            />
          </Col>
        </Row>
      </CardHeader>
    );
  }
}

WidgetCardHeader.propTypes = {
  actionConfirm: PropTypes.string.isRequired,
  actionTitle: PropTypes.string.isRequired,
  buttonID: PropTypes.string.isRequired,
  cardHeader: PropTypes.string.isRequired,
  getAccounts: PropTypes.func,
  getBudgets: PropTypes.func,
  toggleDeleteButtons: PropTypes.func.isRequired,
};

WidgetCardHeader.defaultProps = {
  getAccounts: () => {},
  getBudgets: () => {},
};

export default WidgetCardHeader;
