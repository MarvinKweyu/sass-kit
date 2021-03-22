import { shallowMount } from "@vue/test-utils";
import Tasks from "../../src/components/Home/Tasks";

describe("Tasks.vue", () => {
  test("percentage to contain 60%", () => {
    const wrapper = shallowMount(Tasks, {});
    expect(wrapper.text()).toContain("60");
  });
});
