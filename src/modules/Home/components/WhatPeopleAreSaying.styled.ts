import React from 'react';

import { styled } from 'shared/theme';

export const WhatPeopleAreSayingWrapper = styled.div.attrs({})<
  React.HTMLAttributes<HTMLDivElement>
>`
  .bg {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background: radial-gradient(
      111.91% 157.37% at 50% 157.37%,
      rgba(255, 255, 255, 0) 0%,
      rgba(234, 234, 234, 0.8) 100%
    );
  }

  .testimonials {
    .testimonial {
      width: 100%;
      background: #ffffff;
      padding: 0 30px;
      box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.12);

      &:nth-child(2n) {
        background: #f2eaf2;

        & > svg {
          top: 14px;

          path {
            fill: #fff;
          }
        }
      }
      &:nth-child(3n) {
        background: #ecf4e8;

        & > svg {
          path {
            fill: #fff;
          }
        }
      }

      & > svg {
        position: absolute;
        height: 140px;
        top: 41px;
        width: auto;

        path {
          fill: #f3f3f3;
        }
      }
      p {
        font-family: 'Gilroy';
        font-weight: 400;
        // font-size: 20px;
        // line-height: 32px;
        color: #3a3a3b;
        isolation: isolate;
        margin: 0;
        margin-top: 100px;
        margin-bottom: 80px;
      }
      .author-main {
        isolation: isolate;
        margin-bottom: 25px;
        display: grid;
        grid-template-columns: 1fr auto;
        grid-template-rows: 1fr auto;
        border-top: 1px solid #9ac17e;
        padding-top: 25px;

        .name {
          grid-row: 1/2;
          grid-column: 1/2;
          font-family: 'Gilroy';
          font-weight: 700;
          font-size: 20px;
          line-height: 32px;
          color: #3a3a3b;
        }
        sub {
          grid-row: 2/3;
          grid-column: 1/2;
          font-family: 'Gilroy';
          font-weight: 400;
          font-size: 16px;
          line-height: 100%;
          color: #3a3a3b;
        }
        .place {
          grid-row: 1/-1;
          grid-column: 2/3;
          font-family: 'Gilroy';
          font-weight: 400;
          font-size: 20px;
          line-height: 32px;
          color: #3a3a3b;
        }
      }
    }
  }
`;
