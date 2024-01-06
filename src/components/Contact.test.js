import Contact from "./Contact";
import {render} from '@testing-library/react'

test("Should load contact us componet", () =>{
    render(<Contact/>);
    const heading =  screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})