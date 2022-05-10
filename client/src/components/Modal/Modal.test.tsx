import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Modal } from "..";

test("if the Modal component is in the document", () => {
  const onClose = jest.fn();
  const { getByText } = render(
    <Modal showModal={true} onClose={onClose} title="Modal">
      <p>This is a modal</p>
    </Modal>
  );

  expect(getByText("This is a modal")).toBeInTheDocument();
});

test("if the Modal component is not in the document", () => {
  const onClose = jest.fn();
  const { queryByText } = render(
    <Modal showModal={false} onClose={onClose} title="Modal">
      <p>This is a modal</p>
    </Modal>
  );

  expect(queryByText("This is a modal")).not.toBeInTheDocument();
});
