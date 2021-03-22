import { shallowMount, mount } from "@vue/test-utils";

import Deals from "@/components/Home/Deals";

describe("Deals.vue", () => {
  test("navbar", () => {
    expect(true).toBe(true);
  });

  test("card contains text Deals", () => {
    const wrapper = shallowMount(Deals, {});
    expect(wrapper.text()).toContain("Deals");
  });
});
