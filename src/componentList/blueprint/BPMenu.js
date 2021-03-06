import React from "react";
import { Menu, MenuItem, MenuDivider } from "@blueprintjs/core";
import { PropTypes } from "prop-types";

class MenuExample extends React.Component {
    render() {
        return (
            <div
                style={{
                    padding: "15px",
                    border: "1px solid rgba(138, 155, 168, 0.2)"
                }}
            >
                <Menu>
                    <MenuItem
                        iconName={this.props.iconName}
                        onClick={this.handleClick}
                        text={this.props.text}
                    />
                    <MenuDivider />
                    <MenuItem text="Settings..." iconName="cog" />
                </Menu>
            </div>
        );
    }

    handleClick(e) {
        console.log("clicked", e.target.textContent);
    }
}

MenuExample.defaultProps = {
    iconName: "new-text-box",
    text: "Menu item"
};

export const MenuBundle = {
    childNode: <MenuExample />,
    componentName: "Menu item"
};
