import { mount } from "@vue/test-utils";
import Tasks from "../../src/components/Home/Tasks";

describe("Tasks.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Tasks, {});
  });

  test("component is rendered", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("percentage to contain 60%", () => {
    expect(wrapper.text()).toContain("60");
  });
});
