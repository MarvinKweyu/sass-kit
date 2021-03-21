<template>
  <q-drawer
    v-model="drawer"
    show-if-above
    :mini="!drawer || miniState"
    :width="240"
    :breakpoint="500"
    bordered
    content-class="side-bar"
  >
    <q-scroll-area class="fit">
      <q-list padding class="menu-list">
        <div v-for="navigation in navPoints" :key="navigation.name">
          <q-item
            clickable
            v-if="!navigation.subMenu"
            v-ripple
            @click="navigate(navigation.nav)"
          >
            <q-item-section avatar>
              <q-icon
                :color="navigation.navColor"
                :name="navigation.icon"
                size="15px"
              />
            </q-item-section>
            <q-item-section>{{ navigation.name }}</q-item-section>
          </q-item>

          <q-expansion-item
            style="font-size: 15px"
            v-else
            :icon="navigation.icon"
            :label="navigation.name"
          >
            <q-item-section v-for="item in navigation.subMenu" :key="item.name">
              <p class="flex q-ml-xl">
                <span class="circle-marker" :class="item.iconClass"></span
                ><span>{{ item.name }}</span>
              </p>
            </q-item-section>
          </q-expansion-item>
        </div>
      </q-list>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="#c2cfe0" name="more-horiz" size="15px" />
        </q-item-section>
        <q-item-section>Settings</q-item-section>
      </q-item>

      <div @click="miniState = !miniState" class="toggle-btn absolute-bottom">
        <span class="subtract q-mx-md"></span>
        <span class="toggle-sidebar" :class="{ vanish: miniState }">
          Toggle sidebar</span
        >
      </div>
    </q-scroll-area>

    <div class="absolute-top q-mb-lg q-ml-md" style="height: 60px">
      <div class="sidebar-header" :class="{ vanish: miniState }">
        <p class="saaS-kit">SaaS-Kit</p>
      </div>

      <div v-if="miniState" class="q-mt-md">
        <p class="saaS-kit">Saas</p>
      </div>
      <div class="flex row q-mb-lg">
        <q-avatar size="44px" class="q-mb-sm">
          <img
            :src="userDetail.image"
            :alt="userDetail.name"
            width="100%"
            height="100%"
          />
        </q-avatar>
        <div :class="{ vanish: miniState }">
          <p class="sierra-ferguson">{{ userDetail.name }}</p>
          <p class="sfergusongmailcom">{{ userDetail.email }}</p>
        </div>
      </div>
    </div>
  </q-drawer>
</template>

<script>
export default {
  name: "TheSideBar",
  data() {
    return {
      drawer: false,
      miniState: false,
      userDetail: {
        name: "Sierra Ferguson",
        email: "s.ferguson@gmail.com",
        image: "https://cdn.quasar.dev/img/avatar.png"
      },
      navPoints: [
        {
          name: "Home",
          icon: "window",
          nav: "/",
          navColor: "#c2cfe0"
        },
        {
          name: "Tasks",
          icon: "view_agenda",
          nav: "tasks",
          navColor: "#c2cfe0",
          subMenu: [
            {
              name: "Active",
              iconClass: "active"
            },
            {
              name: "Completed",
              iconClass: "completed"
            },
            {
              name: "Ended",
              iconClass: "ended"
            }
          ]
        },
        {
          name: "Email",
          icon: "mail",
          nav: "email",
          navColor: "#c2cfe0",
          subMenu: [
            {
              name: "Drafts",
              iconClass: "active"
            },
            {
              name: "Scheduled",
              iconClass: "scheduled"
            },
            {
              name: "Sent",
              iconClass: "completed"
            },
            {
              name: "Archived",
              iconClass: "ended"
            }
          ]
        },
        {
          name: "Contacts",
          icon: "perm_identity",
          nav: "contacts",
          navColor: "#c2cfe0"
        },
        {
          name: "Chats",
          icon: "chat_bubble_outline",
          nav: "chats",
          navColor: "#c2cfe0"
        },
        {
          name: "Deals",
          icon: "bluetooth",
          nav: "deals",
          navColor: "#c2cfe0"
        }
      ]
    };
  },
  methods: {
    drawerClick(e) {
      // if in "mini" state and user
      // click on drawer, we switch it to "normal" mode
      if (this.miniState) {
        this.miniState = false;

        // notice we have registered an event with capture flag;
        // we need to stop further propagation as this click is
        // intended for switching drawer to "normal" mode only
        e.stopPropagation();
      }
    },
    navigate(navPath) {
      // go to specified route
      this.$router.push(navPath);
    }
  }
};
</script>

<style scoped>
.side-bar {
  /*margin: 60px 0 60px 60px;*/
  /*padding: 17px 0 22px;*/
  box-shadow: 6px 0 18px 0 rgba(0, 0, 0, 0.06);
}
.toggle-sidebar {
  /* width: 146px; */
  height: 17px;
  /* margin: 0 0 0 14px; */
  /*font-family: Poppins;*/
  font-size: 11px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.11px;
  text-align: left;
  color: #90a0b7;
}
.subtract {
  width: 14px;
  height: 14px;
  /* margin: 1px 14px 2px 0; */
  padding: 2px 8px 2px 4px;
  background-color: #c2cfe0;
}
.toggle-btn {
  cursor: pointer;
  margin-bottom: -60%;
  /*bottom: 3%;*/
}
.saaS-kit {
  /*width: 69px;*/
  height: 26px;
  /* margin: 17px 163px 42px 24px; */
  font-family: OpenSans, Poppins, serif;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #109cf1;
}

.sierra-ferguson {
  width: 146px;
  height: 21px;
  margin: 3px 0 2px 16px;
  /*font-family: Poppins;*/
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #192a3e;
}
.sfergusongmailcom {
  width: 146px;
  height: 17px;
  margin: 2px 0 3px 16px;
  font-size: 11px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.11px;
  text-align: left;
  color: #90a0b7;
}

.circle-marker {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-grow: 0;
  margin: 6px 8px 6px 0;
}

.sub-menu {
  width: 176px;
  height: 20px;
  flex-grow: 0;
  /* margin: 0 0 8px 0px; */
  margin-left: 20%;
}
.active {
  border: solid 2px #ffb946;
}
.completed {
  border: solid 2px #2ed47a;
}
.ended {
  border: solid 2px #f7685b;
}
.scheduled {
  border: solid 2px #885af8;
}
.sidebar-header {
  border-bottom: 1px solid #ebeff2;
  margin-bottom: 12px;
  height: 60px;
}
.vanish {
  display: none;
}
.menu-list {
  margin-top: 50%;
  border-bottom: 1px solid #c2cfe0;
}
</style>
