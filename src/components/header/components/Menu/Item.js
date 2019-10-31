// general
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Item = props => {
  const { item: { label, to, icon: Icon } = {}, onClick } = props;

  return (
    <React.Fragment>
      <li className={"hiddenItem" in props ? "hiddenItem" : "item"} key={label}>
        <Link
          to={to}
          className={"hiddenItem" in props ? "inHiddenItem" : ""}
          onClick={onClick}
          data-slug={to}
        >
          {Icon && <Icon />} {label}
        </Link>
      </li>

      {/* --- STYLES --- */}
      <style jsx>{`
        .item,
        .showItem {
          background: transparent;
          transition: all 200ms;
          display: flex;
          align-items: center;

          :global(a) {
            padding: 10px;
            display: flex;
            align-items: center;
          }

          :global(svg) {
            margin: 0 5px 0 0;
            opacity: 0.3;
          }
        }

        :global(.itemList .hideItem) {
          display: none;
        }

        @from-width desktop {
          .item {
            :global(a) {
              color: black;
              padding: 10px;
              transition: all 200ms;
              border-radius: 20px;
            }

            :global(.homepage):not(.fixed) & :global(a) {
              color: white;
            }

            :global(a:hover) {
              color: black;
              background: color(white alpha(-60%));
            }

            :global(svg) {
              transition: all 200ms;
            }

            &:hover :global(svg) {
              fill: black;
              opacity: 1;

              :global(.hero) & :global(svg) {
                fill: green;
              }
            }
          }

          .showItem {
            display: none;
          }

          .hiddenItem {
            text-align: left;
            padding: 5px;

            & :global(a.inHiddenItem) {
              color: black;
              &:hover {
                color: black;
              }
            }
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Item.propTypes = {
  item: PropTypes.object,
  hidden: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.func
};

export default Item;