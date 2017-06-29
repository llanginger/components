import * as React from "react";
import styled from "styled-components";

export class NavBar extends React.Component<any, any> {
    render() {
        return (
            <nav className="pt-navbar pt-dark">
                <div className="pt-navbar-group pt-align-left">
                    <div className="pt-navbar-heading">Kmpnntz</div>
                </div>
                <div className="pt-navbar-group pt-align-right">
                    <button className="pt-button pt-minimal pt-icon-user" />
                </div>
            </nav>
        );
    }
}
