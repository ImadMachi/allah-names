import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";

test("should render without throwing an error", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
