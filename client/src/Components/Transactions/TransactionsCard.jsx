import React, { Component } from 'react';
import {
  Button, Card, CardHeader, Modal, ModalHeader, ModalBody,
} from 'reactstrap';
import TransactionsTable from './TransactionsTable';
import AddTransactionCard from './AddTransactionCard';
import UpdateTransactionCard from './UpdateTransactionCard';

class TransactionsCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      updateModal: false,
      updateTransaction: {},
      refresh: false,
    };

    this.doneRefresh = this.doneRefresh.bind(this);
    this.refreshTable = this.refreshTable.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleUpdateModal = this.toggleUpdateModal.bind(this);
  }

  toggleModal() {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
  }

  toggleUpdateModal() {
    const { updateModal } = this.state;
    this.setState({
      updateModal: !updateModal,
    });
  }

  refreshTable() {
    this.setState({
      refresh: true,
    });
  }

  doneRefresh() {
    this.setState({
      refresh: false,
    });
  }

  updateTransaction(tran) {
    this.setState({
      updateTransaction: tran,
      updateModal: true,
    });
  }

  render() {
    const {
      modal,
      updateModal,
      updateTransaction,
    } = this.state;
    return (
      <div>
        <Card>
          <CardHeader className="text-center">
            <h4 className="d-inline-block">Transactions</h4>
            <span className="float-right d-inline-block ">
              <Button
                className="align-self-center"
                color="success"
                onClick={this.toggleModal}
                outline
              >
                <i className="fa fa-plus" aria-hidden="true" />
              </Button>
            </span>
          </CardHeader>
          <TransactionsTable
            update={this.doneRefresh}
            refresh={this.state.refresh}
            updateTransaction={tran => this.updateTransaction(tran)}
          />
        </Card>

        {modal ? (
          <Modal
            centered
            isOpen={this.state.modal}
            toggle={this.toggleModal}
          >
            <ModalHeader>
              {'Add Transaction'}
            </ModalHeader>
            <ModalBody>
              <AddTransactionCard
                toggle={this.toggleModal}
                refresh={this.refreshTable}
              />
            </ModalBody>
          </Modal>
        ) : (
          null
        )}

        {updateModal ? (
          <Modal
            centered
            isOpen={this.state.updateModal}
            toggle={this.toggleUpdateModal}
          >
            <ModalHeader>
              {'Update Transaction'}
            </ModalHeader>
            <ModalBody>
              <UpdateTransactionCard
                transaction={updateTransaction}
                toggle={this.toggleUpdateModal}
              />
            </ModalBody>
          </Modal>
        ) : (
          null
        )}
      </div>
    );
  }
}

export default TransactionsCard;
