import { mount } from "@vue/test-utils";

import Deals from "@/components/Home/Deals";

describe("Deals.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Deals, {});
  });

  test("Deals component renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("card contains text Deals", () => {
    expect(wrapper.text()).toContain("Deals");
  });
});
