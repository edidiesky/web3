import React from "react";
import styled from "styled-components";
import { BiCheck } from "react-icons/bi";

export default function Newsletter() {
  const data = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    { id: 2, title: "ipsum dolor sit amet dolor sit amet, elit." },
    { id: 3, title: "Phasellus in risus erat sed vel vestibulum turpis." },
    { id: 4, title: " Orci varius natoque penatibus et." },
    { id: 5, title: "Integer condimentum nisi ac volutpat posuere." },
  ];
  return (
    <NewsletterContent>
      <div className="newsletterWrapper w-85 auto flex item-center gap-2 justify-space">
        <div className="newsletterLeft">
          <h2>
            Sign up for updates!
            <span className="text-grey">
              Stay tuned to our latests news and updates
            </span>
          </h2>
        </div>
        <div className="form flex item-center gap-1">
          <input
            type="text"
            className="newinput"
            placeholder="your@gmail.com"
          />
          <button className="btn">Send</button>
        </div>
      </div>
    </NewsletterContent>
  );
}

const NewsletterContent = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding: 6rem 0;
  background-color: var(--secondary);
  .newsletterWrapper {
    @media (max-width: 780px) {
      flex-direction: column;
      gap: 2rem;
    }
  }
  .btn {
    border-radius: 10px;
    height: 5.5rem;
    padding: 0 1.6rem;
  }
  .form {
    width: 100%;
  }
  .newinput {
    height: 6rem;
    width: 100%;
    padding: 0 2rem;
    border-radius: 6px;
    font-size: 18px;
    color: #fff;
    background-color: var(--primary);
  }
  .newsletterLeft {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: flex-start;
    h2 {
      font-size: 3rem;
      font-weight: 600;
      color: #fff;
      z-index: 100;
      @media (max-width: 480px) {
        font-size: 2.5rem;
    }

      span {
        display: block;
        font-size: 1.98rem;
        padding: 1rem 0;
        font-family: "Barlow", sans-serif;
        font-weight: 400;
      }
    }
    .startBtn {
      border: none;
      outline: none;
      padding: 1.5rem 4rem;
      font-size: 2rem;
      text-transform: capitalize;
      color: #fff;
      font-weight: 500;
      background: var(--red);
      &:hover {
        background: var(--dark-blue);
      }
    }
  }
`;
