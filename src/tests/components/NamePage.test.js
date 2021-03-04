import React from "react";
import NamePage from "./../../components/NamePage";
import { shallow } from "enzyme";

jest.mock("react-redux", () => ({
  useSelector: jest.fn().mockReturnValue({
    name: "الله",
    description: "الاسم الذي يدلّ على ذات الله -تعالى- الجامعة لصفات ألوهيّته.",
    id: "N1",
  }),
}));

test("should render without throwing an error", () => {
  const match = {
    path: "/:id",
    url: "/N1",
    isExact: true,
    params: {
      id: "N1",
    },
  };
  const wrapper = shallow(<NamePage match={match} />);
  expect(wrapper).toMatchSnapshot();
});
