import PageNotFound from "../PageNotFound";
import {render, screen} from "@testing-library/react";


test ("Page not found has message", ()=>{

render (<PageNotFound/>);

const message = screen.getByTestId("message");

expect(message).toBeInTheDocument();


});