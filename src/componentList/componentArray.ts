import * as React from "react";
import { Button, Switch, Slider, RangeSlider } from "@blueprintjs/core";
import { MenuBundle } from "./blueprint/BPMenu";
import { ButtonBundle } from "./blueprint/BPButton";
import { SliderBundle } from "./blueprint/BPSlider";
import { DialogBundle } from "./blueprint/BPDialog";
import { InputGroupBundle } from "./blueprint/BPInputGroup";
import { SpinnerBundle } from "./blueprint/BPSpinner";
import { ProgressBundle } from "./blueprint/BPProgress";
import { ReactVistTestBundle } from "./reactVis/ReactVisTest";
import { ReactVisTreeBundle } from "./reactVis/ReactVisTree";
import { SimpleCloudBundle } from "./TagCloud";

// const CombinedBPSlider = { componentName: 'Button',
//   docs: ['', ''],  childNode: BPSlider }
// const CombinedBPSwitch = { componentName: 'Button',
//   docs: ['', ''],  childNode: BPSwitch }

export const componentBundleArray = [
    ReactVistTestBundle,
    MenuBundle,
    ButtonBundle,
    SliderBundle,
    DialogBundle,
    InputGroupBundle,
    SpinnerBundle,
    ProgressBundle,
    ReactVisTreeBundle,
    SimpleCloudBundle
];
