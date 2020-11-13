import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { LoginForm } from "./LoginForm";

configure({ adapter: new Adapter() });

describe("<LoginForm/>", () => {
  it("should have 2 input fields", () => {
    const wrapper = shallow(<LoginForm />);
  });
});
