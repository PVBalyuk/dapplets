import React, { FunctionComponent } from "react";
import { enGb } from "src/core";
import { CreateButton, Input, InputWrapper, Title } from "src/ui-kit";

const DappletSettings: FunctionComponent = () => {
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col gap-30px">
      <Title>{enGb.DAPPLET_SETTINGS}</Title>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col gap-30px">
          <InputWrapper>
            <Input
              label={enGb.CREATE_NEW_LIST}
              inputLabel={enGb.LIST_NAME}
              id={enGb.CREATE_NEW_LIST}
            />
            <CreateButton text={enGb.CREATE} />
          </InputWrapper>
          <InputWrapper>
            <Input
              label={enGb.NEW_TAG}
              inputLabel={enGb.TAG_NAME}
              id={enGb.NEW_TAG}
            />
            <CreateButton text={enGb.CREATE} />
          </InputWrapper>
        </div>
      </form>
    </div>
  );
};

export default DappletSettings;
