import * as React from "react";
import { Button, Switch, Slider, RangeSlider } from "@blueprintjs/core";
import { MenuBundle } from "./componentList/blueprint/BPMenu";
import { ButtonBundle } from "./componentList/blueprint/BPButton";
import { SliderBundle } from "./componentList/blueprint/BPSlider";
import { DialogBundle } from "./componentList/blueprint/BPDialog";
import { InputGroupBundle } from "./componentList/blueprint/BPInputGroup";
import { SpinnerBundle } from "./componentList/blueprint/BPSpinner";
import { ProgressBundle } from "./componentList/blueprint/BPProgress";

// const CombinedBPSlider = { componentName: 'Button',
//   docs: ['', ''],  childNode: BPSlider }
// const CombinedBPSwitch = { componentName: 'Button',
//   docs: ['', ''],  childNode: BPSwitch }

export const componentBundleArray = [
    MenuBundle,
    ButtonBundle,
    SliderBundle,
    DialogBundle,
    InputGroupBundle,
    SpinnerBundle,
    ProgressBundle
];
