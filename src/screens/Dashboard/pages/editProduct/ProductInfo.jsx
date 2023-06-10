import React from "react";
import styled from "styled-components";
import { Input } from "../../../../components/forms";

export default function EditProductInfo({
  onChange2,
  formdata2,
  setFormData2,
}) {

  const inputData1 = [
    {
      id: 1,
      name: "title",
      placeholder: "Add your Car name",
      type: "text",
      text: "Product Name",
    },
    {
      id: 2,
      name: "brand",
      placeholder: "Add your Car brand",
      type: "text",
      text: "Product Brand",
    },
  ];

  return (
    <EditProductInfoWrapper>
      <div className="EditProductForm">
        <div className="EditProductFormBottom">
          {inputData1.slice(0, 1).map((input) => {
            return (
              <Input
                id={input.text}
                onChange={onChange2}
                placeholder={input.placeholder}
                type={input.type}
                name={input.name}
                value={formdata2[input.name]}
                input={input}
                key={input.id}
                required={input.required}
                pattern={input.pattern}
                errorMessage={input.errorMessage}
              />
            );
          })}
          <label htmlFor="text" className="textLabel">
            Product shortdescription
            <textarea
              type="text"
              className="textarea"
              placeholder="Place a shortdescription on the Car"
              name="shortdescription"
              value={formdata2.shortdescription}
              onChange={onChange2}
              id="text"
            />
          </label>
          <label htmlFor="text" className="textLabel">
            Product description
            <textarea
              type="text"
              className="textarea"
              placeholder="Place a description on the Car"
              name="description"
              value={formdata2.description}
              onChange={onChange2}
              id="text"
            />
          </label>

          <label htmlFor="Additional" className="textLabel">
            Product Additional Info
            <textarea
            className="textarea"
              type="text"
              placeholder="Place insert Additional Info on the Car"
              id="Additional"
            />
          </label>

          {inputData1.slice(1, 2).map((input) => {
            return (
              <Input
                id={input.text}
                onChange={onChange2}
                placeholder={input.placeholder}
                type={input.type}
                name={input.name}
                value={formdata2[input.name]}
                input={input}
                key={input.id}
                required={input.required}
                pattern={input.pattern}
                errorMessage={input.errorMessage}
              />
            );
          })}
        </div>
      </div>
    </EditProductInfoWrapper>
  );
}

const EditProductInfoWrapper = styled.div`
  width: 100%;
  flex-direction: column;
  width: 100%;
  gap: 1.6rem;
  .EditProductFormBottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding: 1rem 0;
  }
`;
