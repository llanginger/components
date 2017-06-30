import * as React from "react";
import { TagCloud } from "react-tagcloud";

const data = [
    { value: "JavaScript", count: 38 },
    { value: "React", count: 30 },
    { value: "Nodejs", count: 28 },
    { value: "Express.js", count: 25 },
    { value: "HTML5", count: 33 },
    { value: "MongoDB", count: 18 },
    { value: "CSS3", count: 20 }
];

const options = {
    luminosity: "light",
    hue: "blue"
};

const SimpleCloud: any = (props: any) =>
    <TagCloud
        minSize={props.minSize}
        maxSize={props.maxSize}
        tags={props.tags}
        colorOptions={props.colorOptions}
        onClick={tag => alert(`'${tag.value}' was selected!`)}
    />;

SimpleCloud.defaultProps = {
    minSize: 12,
    maxSize: 35,
    tags: data,
    colorOptions: options
};

export const SimpleCloudBundle = {
    childNode: <SimpleCloud />,
    componentName: "Tag Cloud"
};
