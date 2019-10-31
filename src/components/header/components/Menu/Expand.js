// general
import PropTypes from "prop-types";
import React from "react";
// icons
import { FaAngleDown } from "react-icons/fa/";

const Expand = props => {
  const { onClick } = props;

  return (
    <React.Fragment>
      <button className="more" to="#" onClick={onClick} aria-label="expand">
        <FaAngleDown size={30} />
      </button>

      {/* --- STYLES --- */}
      <style jsx>{`
        .more {
          cursor: pointer;
        }

        @below desktop {
          .more {
            background: white;
            border: 1px solid black;
            border-radius: 10px 10px 0 0;
            border-bottom: none;
            position: absolute;
            left: 50%;
            top: -35px;
            width: 60px;
            height: 36px;
            overflow: hidden;
            z-index: 1;
            transform: translateX(-50%);

            &:focus {
              outline: none;

              :global(svg) {
                fill: black;
              }
            }

            :global(svg) {
              transition: all 0.5s;
              transform: rotateZ(180deg);
              fill: black;
            }

            :global(.open) & :global(svg) {
              transform: rotateZ(0deg);
            }
          }
        }

        @from-width desktop {
          .more {
            flex-shrink: 0;
            flex-grow: 0;
            width: 44px;
            height: 38px;
            background: transparent;
            margin-left: 10px;
            border-radius: 20px;
            border: 1px solid black;
            display: flex;
            transition: background-color 200ms;
            justify-content: center;
            align-items: center;
            padding: 0;
            z-index: 1;

            &:focus,
            &:hover {
              outline: none;
            }

            :global(svg) {
              transition: all 200ms;
            }

            :global(.homepage) & {
              border: 1px solid transparent;
              background-color: color(white alpha(-90%));

              &:hover {
                background-color: color(white alpha(-60%));
              }
            }

            :global(.open) & {
              background-color: color(white alpha(-10%));
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;

              &:hover {
                background-color: color(white alpha(-10%));
              }

              :global(svg) {
                transform: rotate(180deg);
              }
            }

            :global(.fixed) & {
              border: 1px solid black;
              height: 30px;
            }
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Expand.propTypes = {
  onClick: PropTypes.func
};

export default Expand;