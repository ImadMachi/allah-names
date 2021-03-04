import React from "react";
import { shallow } from "enzyme";
import NamesList from "./../../components/NamesList";

test("should render without throwing an error", () => {
  const wrapper = shallow(<NamesList />);
  expect(wrapper).toMatchSnapshot();
});

jest.mock("react-redux", () => ({
  useSelector: jest.fn().mockReturnValue([
    {
      name: "الله",
      description:
        "الاسم الذي يدلّ على ذات الله -تعالى- الجامعة لصفات ألوهيّته.",
      id: "N1",
    },
    {
      name: "الرحمن",
      description:
        "الاسم الذي يدلّ على شمول رحمته كافّة خَلقه؛ بأن خلقهم ورزقهم، وهو اسم يختص به الله -تعالى- ولا يجوز أن يُطلَق على أحد غيره.",
      id: "N2",
    },
    {
      name: "الرحيم",
      description:
        "اسم خاصّ برحمة الله -تعالى- بعباده المؤمنين؛ بهدايتهم للإيمان وإثابتهم الثواب الدائم في الآخرة.",
      id: "N3",
    },
  ]),
}));
