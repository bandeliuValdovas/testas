import HomePage from "../HomePage";
import {render, screen} from "@testing-library/react";

test ("Testing component renders successfully", ()=>{

render (<HomePage/>);

const title = screen.getByTestId("component-title");

expect(title).toBeInTheDocument();


});