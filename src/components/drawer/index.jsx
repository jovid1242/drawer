import React, { useState } from "react";

import "./DrawerStyles.scss";

const Index = ({ placement, children }) => {
  const [state, setState] = useState(false);

  return (
    <>
      <button onClick={() => setState(true)} className="btn">
        click {placement}
      </button>
      <div className="drawer">
        <div onClick={(ev) => ev.stopPropagation()}>
          <div
            className={state ? "drawer-mask active" : "drawer-mask"}
            onClick={() => setState(false)}
          >
            <div
              className={
                state
                  ? `drawer-overly ${placement} active`
                  : `drawer-overly ${placement}`
              }
              onClick={(ev) => ev.stopPropagation()}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
