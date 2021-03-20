import styled from "styled-components/macro";
import { Link as ReachRouterLink } from "react-router-dom";

export const Header = styled.header`
  display: block;
  width: 100%;

  line-height: 1.5;

  background: #ddd6f3;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #faaca8, #ddd6f3);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #faaca8, #ddd6f3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


  z-index: 99;
  padding: 15px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  .item-left {
    flex: 0 0 17%;
  }
  .logo a {
    font-size: 30px;
    color: #000000;
    font-weight: 700;
    text-decoration: none;
  }
  .item-center {
    flex: 0 0 59%;
  }
  .item-right {
    flex: 0 0 23%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .item-right a {
    text-decoration: none;
    font-size: 16px;
    color: black;
    display: inline-block;
    margin: 0px 6px;
    transition: color 0.3s ease;
  }
  /* CartCounter */
  .cart-counter {
    height: 19px;
    width: 19px;
    position: relative;
    bottom: 10px;
    right: 9px;
    padding: 1px;
    background-color: #ffa751;
    color: #333;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    transition: 0.2s;
  }
  .cart-counter:hover {
    background-color: #ee9ca7;
    transform: scale(1.1);
  }
  .menu > ul > li {
    display: inline-block;
    line-height: 50px;
    margin-left: 25px;
  }
  .menu > ul > li > a {
    font-size: 15px;
    font-weight: 500;
    color: #000000;
    position: relative;
    text-transform: capitalize;
    transition: color 0.3s ease;
  }
  /* .menu > ul > li .sub-menu {
    position: absolute;
    z-index: 500;
    background-color: #ffffff;
    box-shadow: -2px 2px 70px -25px rgba(0, 0, 0, 0.3);
    padding: 20px 30px;
    transition: all 0.5s ease;
    margin-top: 25px;
    opacity: 0;
    visibility: hidden;
  } */
  .item-right .menu > ul > li .sub-menu {
    margin-top: 15px;
    border-radius: 40px;
  }
  .item-right .menu > ul > li {
    margin-left: 3px;
  }
  .item-right .menu > ul > li .single-column-menu {
    min-width: 200px;
    max-width: 280px;
  }
  .item-right .menu > ul > li .sub-menu > ul > li > a {
    transition: 0.3s;
  }
  .item-right .menu > ul > li .sub-menu > ul > li > a:hover {
    color: black;
    transform: scale(1.1);
  }
  @media (min-width: 992px) {
    .menu > ul > li.menu-item-has-children:hover .sub-menu {
      margin-top: 0;
      visibility: visible;
      opacity: 1;
    }
  }
  .menu > ul > li .sub-menu > ul > li {
    line-height: 1;
  }
  .menu > ul > li .sub-menu > ul > li > a {
    display: inline-block;
    padding: 10px 0;
    font-size: 15px;
    color: #555555;
    transition: color 0.3s ease;
    text-decoration: none;
    text-transform: capitalize;
  }
  .menu > ul > li .single-column-menu {
    min-width: 280px;
    max-width: 350px;
  }
  .menu > ul > li .sub-menu.mega-menu > .list-item > ul > li {
    line-height: 1;
    display: block;
  }
  .menu > ul > li .sub-menu.mega-menu > .list-item > ul > li > a {
    padding: 10px 0;
    display: inline-block;
    font-size: 15px;
    color: #555555;
    transition: color 0.3s ease;
  }
  .menu > ul > li .sub-menu.mega-menu {
    left: 50%;
    transform: translateX(-50%);
  }

  .menu > ul > li .sub-menu.mega-menu-column-4 {
    max-width: 1100px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 20px 15px;
  }
  .menu > ul > li .sub-menu.mega-menu-column-4 > .list-item {
    flex: 0 0 25%;
    padding: 0 15px;
  }
  .menu > ul > li .sub-menu.mega-menu-column-4 > .list-item .title {
    font-size: 16px;
    color: #ea4636;
    font-weight: 500;
    line-height: 1;
    padding: 10px 0;
  }
  .menu > ul > li .sub-menu.mega-menu-column-4 > .list-item.text-center .title {
    text-align: center;
  }
  .menu > ul > li .sub-menu.mega-menu-column-4 > .list-item img {
    max-width: 100%;
    width: 100%;
    vertical-align: middle;
    margin-top: 10px;
  }
  .menu > ul > li .sub-menu.mega-menu > .list-item > ul > li > a:hover,
  .menu > ul > li .sub-menu > ul > li > a:hover,
  .item-right a:hover,
  .menu > ul > li:hover > a {
    color: #ea4636;
  }
  /* Kalsin bi */
  .mobile-menu-head,
  .mobile-menu-trigger {
    display: none;
  }

  /*responsive*/
  @media (max-width: 991px) {
    .item-center {
      order: 3;
      flex: 0 0 100%;
    }
    .item-left,
    .item-right {
      flex: 0 0 auto;
    }
    .v-center {
      justify-content: space-between;
    }
    .mobile-menu-trigger {
      display: flex;
      height: 30px;
      width: 30px;
      margin-left: 15px;
      cursor: pointer;
      align-items: center;
      justify-content: center;
    }
    .mobile-menu-trigger span {
      display: block;
      height: 2px;
      background-color: #333333;
      width: 24px;
      position: relative;
    }
    .mobile-menu-trigger span:before,
    .mobile-menu-trigger span:after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #333333;
    }
    .mobile-menu-trigger span:before {
      top: -6px;
    }
    .mobile-menu-trigger span:after {
      top: 6px;
    }
    .item-right {
      align-items: center;
    }

    .menu {
      position: fixed;
      width: 320px;
      background-color: #ffffff;
      left: 0;
      top: 0;
      height: 100%;
      overflow: hidden;
      transform: translate(-100%);
      transition: all 0.5s ease;
      z-index: 1099;
    }
    .menu.active {
      transform: translate(0%);
    }
    .menu > ul > li {
      line-height: 1;
      margin: 0;
      display: block;
    }
    .menu > ul > li > a {
      line-height: 50px;
      height: 50px;
      padding: 0 50px 0 15px;
      display: block;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    .menu > ul > li > a i {
      position: absolute;
      height: 50px;
      width: 50px;
      top: 0;
      right: 0;
      text-align: center;
      line-height: 50px;
      transform: rotate(-90deg);
    }
    .menu .mobile-menu-head {
      display: flex;
      height: 50px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index: 501;
      position: sticky;
      background-color: #ffffff;
      top: 0;
    }
    .menu .mobile-menu-head .go-back {
      height: 50px;
      width: 50px;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      cursor: pointer;
      line-height: 50px;
      text-align: center;
      color: #000000;
      font-size: 16px;
      display: none;
    }
    .menu .mobile-menu-head.active .go-back {
      display: block;
    }
    .menu .mobile-menu-head .current-menu-title {
      font-size: 15px;
      font-weight: 500;
      color: #000000;
    }
    .menu .mobile-menu-head .mobile-menu-close {
      height: 50px;
      width: 50px;
      border-left: 1px solid rgba(0, 0, 0, 0.1);
      cursor: pointer;
      line-height: 50px;
      text-align: center;
      color: #000000;
      font-size: 25px;
    }
    .menu .menu-main {
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
    }
    .menu > ul > li .sub-menu.mega-menu,
    .menu > ul > li .sub-menu {
      visibility: visible;
      opacity: 1;
      position: absolute;
      box-shadow: none;
      margin: 0;
      padding: 15px;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding-top: 65px;
      max-width: none;
      min-width: auto;
      display: none;
      transform: translateX(0%);
      overflow-y: auto;
    }
    .menu > ul > li .sub-menu.active {
      display: block;
    }
    @keyframes slideLeft {
      0% {
        opacity: 0;
        transform: translateX(100%);
      }
      100% {
        opacity: 1;
        transform: translateX(0%);
      }
    }
    @keyframes slideRight {
      0% {
        opacity: 1;
        transform: translateX(0%);
      }
      100% {
        opacity: 0;
        transform: translateX(100%);
      }
    }
    .menu > ul > li .sub-menu.mega-menu-column-4 > .list-item img {
      margin-top: 0;
    }
    .menu
      > ul
      > li
      .sub-menu.mega-menu-column-4
      > .list-item.text-center
      .title {
      margin-bottom: 20px;
    }
    .menu
      > ul
      > li
      .sub-menu.mega-menu-column-4
      > .list-item.text-center:last-child
      .title {
      margin-bottom: 0px;
    }
    .menu > ul > li .sub-menu.mega-menu-column-4 > .list-item {
      flex: 0 0 100%;
      padding: 0px;
    }
    .menu > ul > li .sub-menu > ul > li > a,
    .menu > ul > li .sub-menu.mega-menu > .list-item > ul > li > a {
      display: block;
    }
    .menu > ul > li .sub-menu.mega-menu > .list-item > ul {
      margin-bottom: 15px;
    }
    .menu-overlay {
      position: fixed;
      background-color: rgba(0, 0, 0, 0.5);
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1098;
      visibility: hidden;
      opacity: 0;
      transition: all 0.5s ease;
    }
    .menu-overlay.active {
      visibility: visible;
      opacity: 1;
    }
  }
`;
export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
