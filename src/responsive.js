import {css} from "styled-components"

export const mobile = (props) => {
    return css`
     @media only screen and (min-width: 380px) {
      ${props}
    }`;
};
/* export const mobile = (props) => {
    return css`
     @media only screen and (max-width: 380px) {
      ${props}
    }`;
}; */

/* export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 570px) {
      ${props}
    }`;
}; */
export const tablet = (props) => {
  return css`
    @media only screen and (min-width: 770px) {
      ${props}
    }`;
};

export const laptop = (props) => {
  return css`
    @media only screen and (min-width: 1200px) {
      ${props}
    }`;
};
