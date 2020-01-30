import React from "react";
import css from "./TokenSideBar.scss";
import TokenSideBarField from "./TokenSideBarField";
import { TOKEN_ACTION_TYPES } from "./util";

interface TokenSideBarHolderProps {
  isEqualBeneficiaryAndHolder: boolean;
  approvedBeneficiaryAddress: string;
  registryAddress?: string;
  newHolder: string;
  handleInputChange: (e: any) => void;
  transferHoldership: () => void;
  changeBeneficiary: () => void;
  surrenderDocument: () => void;
  error: { type: TOKEN_ACTION_TYPES; message: string } | null;
}

const TokenSideBarHolder = ({
  isEqualBeneficiaryAndHolder,
  approvedBeneficiaryAddress,
  registryAddress,
  handleInputChange,
  newHolder,
  transferHoldership,
  changeBeneficiary,
  surrenderDocument,
  error
}: TokenSideBarHolderProps) => {
  const showChangeBeneficiary = !!approvedBeneficiaryAddress || isEqualBeneficiaryAndHolder;

  return (
    <>
      <TokenSideBarField
        id="sec-transferownership"
        title="Transfer Holdership"
        label="Transfer"
        handleClick={transferHoldership}
      >
        <label>
          <input
            className={`${css["field-input"]} ${
              error && error.type === TOKEN_ACTION_TYPES.CHANGE_HOLDER ? css["is-error"] : ""
            }`}
            name="newHolder"
            value={newHolder}
            onChange={handleInputChange}
            type="text"
            placeholder="Address (e.g. 0x483..)"
          />
        </label>
        {error && error.type === TOKEN_ACTION_TYPES.CHANGE_HOLDER && (
          <div className={`${css["message"]} ${css["message-error"]}`}>
            <p>{error.message}</p>
          </div>
        )}
      </TokenSideBarField>
      {showChangeBeneficiary && (
        <TokenSideBarField
          id="sec-changebeneficiary"
          title="Change Beneficiary"
          label="Submit"
          status="success"
          handleClick={changeBeneficiary}
        >
          <label>
            <input
              className={`${css["field-input"]} ${
                error && error.type === TOKEN_ACTION_TYPES.CHANGE_BENEFICIARY ? css["is-error"] : ""
              }`}
              type="text"
              name="approvedBeneficiary"
              value={approvedBeneficiaryAddress}
              onChange={handleInputChange}
              placeholder="Address (e.g. 0x483..)"
              disabled={!!approvedBeneficiaryAddress && !isEqualBeneficiaryAndHolder}
            />
          </label>
          {error && error.type === TOKEN_ACTION_TYPES.CHANGE_BENEFICIARY && (
            <div className={`${css["message"]} ${css["message-error"]}`}>
              <p>{error.message}</p>
            </div>
          )}
        </TokenSideBarField>
      )}
      {isEqualBeneficiaryAndHolder && (
        <TokenSideBarField
          id="sec-surrenderdocument"
          title="Surrender Document"
          label="Surrender"
          status="danger"
          handleClick={surrenderDocument}
        >
          <label>
            <input
              className={`${css["field-input"]} ${
                error && error.type === TOKEN_ACTION_TYPES.SURRENDER_DOCUMENT ? css["is-error"] : ""
              }`}
              type="text"
              placeholder="Address (e.g. 0x483..)"
              disabled
              value={registryAddress}
            />
          </label>
          {error && error.type === TOKEN_ACTION_TYPES.SURRENDER_DOCUMENT && (
            <div className={`${css["message"]} ${css["message-error"]}`}>
              <p>{error.message}</p>
            </div>
          )}
        </TokenSideBarField>
      )}
    </>
  );
};

export default TokenSideBarHolder;