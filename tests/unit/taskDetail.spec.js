import { shallowMount, mount } from "@vue/test-utils";
import TaskDetailCard from "../../src/components/Home/TaskDetailCard";

describe("TaskDetailCard.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(TaskDetailCard, {
      propsData: {
        taskDetail: {
          title: "Send benefit review by Sunday",
          type: "Reminder",
          dueDate: "December 23, 2018",
          adressee: {
            image: "https://cdn.quasar.dev/img/avatar.png",
            name: "George Fields"
          },
          taskState: "Completed"
        }
      }
    });
  });
  test("component renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("shows correct prop data", () => {
    expect(wrapper.text()).toContain("Send benefit review by Sunday");
  });

  test("shows edit options when clicked", () => {
    wrapper.setData({ detailsEdit: false });
    expect(wrapper.find(".detailsEdit").exists()).toBe(false);

    // wrapper.setData({ detailsEdit: true });
    // expect(wrapper.find(".detailsEdit").exists()).toBe(true);
  });

  test("shows correct prop data", () => {
    const wrapper = shallowMount(TaskDetailCard, {
      propsData: {
        taskDetail: {
          title: "Send benefit review by Sunday",
          type: "Reminder",
          dueDate: "December 23, 2018",
          adressee: {
            image: "https://cdn.quasar.dev/img/avatar.png",
            name: "George Fields"
          },
          taskState: "Completed"
        }
      }
    });
  });
  test("component renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("shows correct prop data", () => {
    expect(wrapper.text()).toContain("Send benefit review by Sunday");
  });

  test("shows edit options when clicked", () => {
    wrapper.setData({ detailsEdit: false });
    expect(wrapper.find(".detailsEdit").exists()).toBe(false);

    // wrapper.setData({ detailsEdit: true });
    // expect(wrapper.find(".detailsEdit").exists()).toBe(true);
  });
});
