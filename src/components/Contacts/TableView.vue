<template>
  <div class="q-pa-md">
    <q-markup-table>
      <thead>
        <tr v-if="selectedCount" class="q-mt-lg">
          <div class="row selected-count flex">
            <span class="box-count q-mr-sm q-mt-md">{{ selectedCount }}</span>
            <span class="q-mr-sm q-mt-md"> {{ selectedCount }} selected</span>
            <q-icon name="delete" class="q-mt-md"></q-icon>
          </div>
        </tr>

        <tr v-else>
          <th
            v-for="header in columnsHeaders"
            :key="header.name"
            :class="header.cssClass"
            class="table-head"
          >
            {{ header.name }}
          </th>
        </tr>
      </thead>
      <tbody style="border-top: 3px solid red">
        <tr
          v-for="info in tableData"
          :key="info.name"
          @click="selectContact(info.name)"
          class="table-row"
          style="cursor:pointer;"
        >
          <td class="text-left indiv-name">
            <q-checkbox class="checkbox" size="xs" v-model="info.selected" />
            <q-avatar size="md">
              <img
                src="https://cdn.quasar.dev/img/avatar.png"
                width="100%"
                height="100%"
                :alt="info.name"
              />
            </q-avatar>
            {{ info.name }}
          </td>
          <td class="text-right indiv-mail">{{ info.email }}</td>
          <td class="text-right indiv-company">{{ info.companyName }}</td>
          <td class="text-right indiv-role">{{ info.role }}</td>
          <td class="text-right indiv-forecast">{{ info.forecast }}</td>
          <td class="text-right indiv-activity">{{ info.recentActivity }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
export default {
  name: "TableView",
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
        },
        {
          name: "Nicci Troiani",
          email: "nicci.troiani@gmail.com",
          companyName: "Slack",
          role: "Manager",
          forecast: "75 %",
          recentActivity: "14 Minutes ago",
          selected: false
        },
        {
          name: "George Fields",
          email: "george.fields@gmail.com",
          companyName: "Clockify",
          role: "CEO",
          forecast: "10 %",
          recentActivity: "6 Hours ago",
          selected: false
        },
        {
          name: "Rebecca Moore",
          email: "rebecca.moore@gmail.com",
          companyName: "Upwork",
          role: "Manager",
          forecast: "25 %",
          recentActivity: "Dec 14, 2018",
          selected: false
        },
        {
          name: "Jane Doe",
          email: "jane.doe@gmail.com",
          companyName: "Trello",
          role: "Engineer",
          forecast: "30 %",
          recentActivity: "Dec 12, 2018",
          selected: false
        },
        {
          name: "Jones Dermot",
          email: "dermot.jones@gmail.com",
          companyName: "Slack",
          role: "Developer",
          forecast: "40 %",
          recentActivity: "Dec 11, 2018",
          selected: false
        },
        {
          name: "Martin Merces",
          email: "martin.merces@gmail.com",
          companyName: "Google",
          role: "Manager",
          forecast: "60 %",
          recentActivity: "Dec 9, 2018",
          selected: false
        },
        {
          name: "Franz Ferdinand",
          email: "franz.ferdiand@gmail.com",
          companyName: "Facebook",
          role: "Manager",
          forecast: "100 %",
          recentActivity: "Dec 6, 2018",
          selected: false
        },
        {
          name: "John Smith",
          email: "john.smith@gmail.com",
          companyName: "Skype",
          role: "CEO",
          forecast: "75 %",
          recentActivity: "Nov 30, 2018",
          selected: false
        },
        {
          name: "Judith Williams",
          email: "judith.williams@gmail.com",
          companyName: "Google",
          role: "Designer",
          forecast: "45 %",
          recentActivity: "Nov 26, 2018",
          selected: false
        }
      ]
    };
  },
  methods: {
    selectContact(individualName) {
      // change status of checkbox on click
      let selectedContact = this.tableData.find(
        individual => individual.name === individualName
      );

      const selectedContactIndex = this.selectedData.findIndex(
        contact => contact.name === individualName
      );

      if (selectedContactIndex > -1) {
        //  change status of previously selected item to false
        selectedContact.selected = false;
        //  remove the clicked selected contact from the array of those selected
        this.selectedData.splice(selectedContactIndex, 1);
        // frees up the memory and assigns undefined or null
        // delete this.selectedData[selectedContactIndex];
      } else {
        this.selectedData.push(selectedContact);
        selectedContact.selected = true;
      }
      // update selected count
      this.selectedCount = this.selectedData.length;
    }
  }
};
</script>

<style scoped>
td {
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
}
.checkbox {
  border-radius: 4px;
  /*border: solid 2px #d5d5d5;*/
}
.table-head {
  width: 232px;
  height: 20px;
  margin: 0 54px 0 24px;
  opacity: 0.5;
  /*font-family: Poppins;*/
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.13px;
  text-align: left;
  color: #334d6e;
}
.indiv-name {
  width: 226px;
  height: 23px;
  margin: 1px 24px 0 12px;
  /*font-family: Poppins;*/
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.15px;
  text-align: left;
  color: #323c47;
}
.indiv-mail {
  width: 210px;
  height: 20px;
  margin: 2px 24px;
  /*font-family: Poppins;*/
  font-size: 13px;
  letter-spacing: 0.13px;
  text-align: left;
  color: #707683;
}
.indiv-company {
  width: 120px;
  height: 20px;
  margin: 2px 24px;
  /*font-family: Poppins;*/
  font-size: 13px;
  letter-spacing: 0.13px;
  text-align: left;
  color: #707683;
}
.indiv-role {
  width: 120px;
  height: 20px;
  margin: 2px 24px;
  /*font-family: Poppins;*/
  font-size: 13px;
  letter-spacing: 0.13px;
  text-align: left;
  color: #707683;
}

.indiv-forecast {
  width: 60px;
  height: 20px;
  margin: 2px 24px;
  /* font-family: Poppins; */
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.13px;
  text-align: left;
  color: #707683;
}

.indiv-activity {
  width: 130px;
  height: 20px;
  margin: 2px 0 2px 24px;
  /* font-family: Poppins; */
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.13px;
  text-align: right;
  color: #707683;
}
.selected-count {
  width: 100%;
  height: 20px;
  margin: 0 16px 0 24px;
  /* font-family: Poppins; */
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.13px;
  text-align: left;
  color: #334d6e;
}

.box-count {
  width: 16px;
  height: 16px;
  /* margin: 2px 24px 2px 0; */
  /* font-family: Poppins; */
  font-size: 9px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.09px;
  text-align: center;
  color: #ffffff;
  background: #334d6e;
}
.table-row {
  height: 64px;
  margin: 1px 0 0;
  padding: 20px 24px;
}
/*tr :hover {*/
/*  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);*/
/*}*/
</style>
