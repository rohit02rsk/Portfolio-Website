import React, { createContext } from "react";

export const NavContext = createContext();

class NavContextProvider extends React.Component {
  state = {
    activeNav: "#",
  };

  setActiveNav = (nav) => {
    this.setState({ activeNav: nav });
  };

  render() {
    return (
      <NavContext.Provider
        value={{ ...this.state, setActiveNav: this.setActiveNav }}
      >
        {this.props.children}
      </NavContext.Provider>
    );
  }
}

export default NavContextProvider;
