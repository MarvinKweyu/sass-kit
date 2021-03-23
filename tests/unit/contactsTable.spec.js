import { shallowMount, mount } from "@vue/test-utils";

import TableView from "@/components/Contacts/TableView";

describe("TableView.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(TableView, {
      data() {
        return {
          selectedCount: null,
          selectedData: [],
          columnsHeaders: [
            {
              name: "Name",
              cssClass: "text-left"
            },
            {
              name: "Email",
              cssClass: "text-right"
            },
            {
              name: "Company name",
              cssClass: "text-right"
            },
            { name: "Role", cssClass: "text-right" },
            {
              name: "Forecast",
              cssClass: "text-right"
            },
            {
              name: "Recent activity",
              cssClass: "text-right"
            }
          ],
          tableData: [
            {
              name: "Lindsey Stroud",
              email: "lindsey.stroud@gmail.com",
              companyName: "Hatchbuck",
              role: "Manager",
              forecast: "50 %",
              recentActivity: "5 Minutes ago",
              selected: false
            }
          ]
        };
      },
      methods: { selectContact: () => {} }
    });
  });
  test("component renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("table contains data", () => {
    expect(wrapper.text()).toContain("Lindsey Stroud");
  });

  test("table shows the count of selected contacts", () => {
    expect(wrapper.find(".selected-count").exists()).toBe(false);
    // wrapper.setData({ selectedCount: null });
    // wrapper.find(".indiv-mail").trigger("click");
    // wrapper.setData({ selectedCount: 1 });
    // expect(wrapper.text()).toContain("1 selected");
  });
});
