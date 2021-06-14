import React from "react";
import EditTransactionModal from "./Modals/EditTransactionModal";

const Transaction = ({ tran, account_book, RefreshFrom }) => {
  var style = tran._type === "DEBIT" ? "table-success" : "table-danger";
  return (
    <tr className={style} id={tran.id} key={tran.id}>
      <th scope="row">{tran.date}</th>
      <td>{tran.description}</td>
      <td>{tran.amount}</td>
      <td>
        <div className="btn-group btn-group-small">
          <EditTransactionModal
            account_book={account_book}
            trans_id={tran.id}
            description={tran.description}
            amount={tran.amount}
            refreshForm={RefreshFrom}
          />
        </div>
      </td>
    </tr>
  );
};

export default Transaction;
