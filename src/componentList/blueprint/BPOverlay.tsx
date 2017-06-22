// import * as React from "react";
// import classNames from "classnames";

// import {
//     Button,
//     Classes,
//     IBackdropProps,
//     Intent,
//     IOverlayableProps,
//     Overlay,
//     Switch
// } from "@blueprintjs/core";

// const OVERLAY_EXAMPLE_CLASS = "docs-overlay-example-transition";

// interface OEState {
//     isOpen: boolean;
// }

// class OverlayExample extends React.Component<any, OEState> {
//     constructor(props) {
//         super(props);

//         this.state = {
//             isOpen: false
//         };

//         this._handleOpen = this._handleOpen.bind(this);
//         this._handleClose = this._handleClose.bind(this);
//     }

//     _handleOpen = () => this.setState({ isOpen: true });
//     _handleClose = () => this.setState({ isOpen: false });

//     render() {
//         const classes = classNames(
//             Classes.CARD,
//             Classes.ELEVATION_4,
//             OVERLAY_EXAMPLE_CLASS,
//             this.props.themeName
//         );

//         return (
//             <div>
//                 <button className="pt-button" onClick={this._handleOpen}>
//                     Show overlay
//                 </button>
//                 <Overlay
//                     onClose={this._handleClose}
//                     autoFocus={true}
//                     canEscapeKeyClose={true}
//                     canOutsideClickClose={true}
//                     enforceFocus={true}
//                     hasBackdrop={true}
//                     isOpen={this.state.isOpen}
//                 >
//                     <div className={classes}>
//                         <h3>I'm an Overlay!</h3>
//                         <p>
//                             This is a simple container with some inline styles
//                             to position it on the screen.
//                             Its CSS transitions are customized for this example
//                             only to demonstrate how
//                             easily custom transitions can be implemented.
//                         </p>
//                         <p>
//                             Click the right button below to transfer focus to
//                             the "Show overlay" trigger
//                             button outside of this overlay. If persistent focus
//                             is enabled, focus will
//                             be constrained to the overlay. Use the
//                             {" "}<code>tab</code> key to move to the
//                             next focusable element to illustrate this effect.
//                         </p>
//                         <br />
//                         <Button
//                             intent={Intent.DANGER}
//                             onClick={this._handleClose}
//                         >
//                             Close
//                         </Button>
//                     </div>
//                 </Overlay>
//             </div>
//         );
//     }
// }

// export const OverlayBundle = {
//     childNode: <OverlayExample />,
//     componentName: "Overlay (Broken atm!)"
// };
