import styled from "styled-components";

export const Table = styled.div`
  width: 100%;
  padding: 2rem 1.6rem;
  margin-top: 1rem;
  background: var(--white);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.2);

  .TableTop {
    padding: 0.4rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 780px) {
      flex-direction: column;
      justify-content: flex-end;
      gap: 2rem;
    }

    .TableTopRight {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 100%;
      h3 {
        font-size: 2rem;
        color: var(--text-color);
        font-weight: 600;
        text-transform: uppercase;
        font-family: "Barlow", sans-serif;
      }
    }

    .TableTopLeft {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      width: 100%;
      justify-content: flex-end;
      @media (max-width: 780px) {
        justify-content: space-between;
        align-items: flex-start;
      }
      @media (max-width: 480px) {
        flex-direction: column;
        justify-content: flex-start;
        gap: 1.4rem;
      }
      form {
        padding: 1.2rem 3rem;
        display: flex;
        align-items: center;
        gap: 2rem;
        background: var(--grey-3);
        border-radius: 37px;

        svg {
          width: 2rem;
          height: 2rem;
          color: var(--grey);
        }

        input {
          flex: 1;
          border: none;
          background: inherit;
          font-size: 1.3rem;
          outline: none;
          border: none;
          font-weight: 500;
          color: var(--grey);
          font-family: inherit;
          &::placeholder {
            font-size: 1.4rem;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.1);
          }
        }
      }
      .addBtn {
        border: none;
        padding: 1.4rem 2rem;
        font-size: 1.5rem;
        border-radius: 4px;
        color: #fff;
        background: #1b3d8c;
        font-weight: 600;
        outline: none;
        cursor: pointer;
        font-family: "Barlow", sans-serif;
        &:hover {
          background: var(--red);
        }
      }
    }
  }

  .TableContainer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    overflow-x: auto;
    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
      background: #f8f8f8;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--grey);
      border-radius: 10px;
      transition: all 0.5s;
      &:hover {
        background: #333;
      }
    }

    .tableWrapper {
      border-collapse: collapse;
      width: 100%;
      min-width: 1000px;


      thead {
        tr {
          text-align: start;
          z-index: 200;
          background: var(--grey-3);
          text-align: start;
          transition: all 0.3s var(--transition-2);
          &:hover {
            background: rgb(0 0 0 / 13%);
          }
          th {
            font-size: 1.3rem;
            color: var(--blue-3);
            font-weight: 600;
            text-align: start;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            padding: 2rem 1.8rem;
            font-family: "Barlow", sans-serif;
            transition: all 0.3s var(--transition-2);
          }
        }
      }

      tbody {
        tr {
          transition: all 0.5s var(--transition-2);
          z-index: 200;

          &:hover {
            background: #2364c41f;
            td {
              color: var(--blue-3);
            }
          }
          td {
            font-size: 1.2rem;
            font-weight: 500;
            text-align: start;
            padding: 1.5rem;
            color: var(--dark-1);
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            .true {
              color: e72d2d;
            }
            .cartProduct {
              width: 100%;
              display: flex;
              align-items: center;
              gap: 2rem;
              justify-content: center;
              .imageWrapper {
                width: 10rem;
                position: relative;
                height: 6rem;
                border-radius: 5px;
                img {
                  position: absolute;
                  top: 0;
                  width: 90%;
                  height: 100%;
                  left: 0;
                  border-radius: 5px;
                  object-fit: cover;
                }
              }
            }
            .tablespan {
              display: block;
              padding: 1rem 1.4rem;
              font-size: 1.3rem;
              font-weight: 600;
              width: 100%;
              border-radius: 4px;
              color: #333;
              text-align: center;
              &.true {
                color: #045235;
                background: #04523517;
              }
              &.false {
                color: #e50b0b;
                background: #e50b0b12;
              }
            }

            .true {
              color: var(--green);
              font-size: 1.3rem;
            }
            .false {
              color: var(--red);
              font-size: 1.3rem;
            }

            .imageGradient {
              position: absolute;
              bottom: 0;
              left: 0;
              height: 100%;
              width: 100%;
              background: rgba(0, 0, 0, 0.03);
              display: flex;
              align-items: center;
              width: 100%;
              justify-content: center;
              transition: all 0.6s var(--ease);
            }
          }
          .true {
            color: var(--success-color);
            font-size: 1.2rem;
          }
          .false {
            color: var(--error-color);
            font-size: 1.2rem;
          }

          .header {
            display: flex;
            flex-direction: column;
            gap: 0.7rem;
            h3 {
              font-size: 1.2rem;
              color: #777;
              font-weight: 600;
            }
            p {
              font-size: 1.2rem;
              color: #ccc;
              font-weight: 400;
              width: 80%;
              margin: 0 auto;
              text-align: start;
              line-height: 1.8;
            }
          }

          .action {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.8rem;
            .icons {
              width: 4rem;
              height: 4rem;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              svg {
                font-size: 1.7rem;
                cursor: pointer;
              }
              &:hover {
                background: var(--grey-3);
              }
            }
            .details {
              padding: 0.8rem 1rem;
              background: var(--grey-3);
              border-radius: 5px;
            }
          }
        }
      }
    }
  }
`;
