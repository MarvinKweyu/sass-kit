<template>
  <q-card class="my-card">
    <q-card-section>
      <TheTasksTimeBoard
        :taskAnalysis="taskAnalysis"
        class="q-mb-md time-board"
      />
      <div v-for="task in topTasks" :key="task.name">
        <TaskDetailCard :taskDetail="task" class="q-mb-sm task-card" />
      </div>
      <div class="flex justify-center show-more">Show more</div>
    </q-card-section>
  </q-card>
</template>

<script>
import TaskDetailCard from "@/components/Home/TaskDetailCard";
import TheTasksTimeBoard from "@/components/Home/TheTasksTimeBoard";
export default {
  name: "TheTaskListContainer",
  components: {
    TaskDetailCard,
    TheTasksTimeBoard
  },
  data() {
    return {
      allTasks: [
        {
          title: "Send benefit review by Sunday",
          type: "Reminder",
          dueDate: "December 23, 2018",
          adressee: {
            image: "https://cdn.quasar.dev/img/avatar.png",
            name: "George Fields"
          },
          taskState: "Completed"
        },
        {
          title: "Invite to office meet-up",
          type: "Call",
          dueDate: "December 23, 2018",
          adressee: {
            image: "https://cdn.quasar.dev/img/avatar.png",
            name: "Rebecca Moore"
          },
          taskState: "Ended"
        },
        {
          title: "Office meet-up",
          type: "Event",
          dueDate: "December 23, 2018",
          adressee: {
            image: "https://cdn.quasar.dev/img/avatar.png",
            name: "Lindsey Stroud"
          },
          taskState: "Completed"
        },
        //*  for purpose of the analytics page,the second object has
        // * been duplicated
        {
          title: "Invite to office meet-up2",
          type: "Call",
          dueDate: "December 23, 2018",
          adressee: {
            image: "https://cdn.quasar.dev/img/avatar.png",
            name: "Rebecca Moore"
          },
          taskState: "Completed"
        },
        {
          title: "Invite to office meet-up3",
          type: "Call",
          dueDate: "December 23, 2018",
          adressee: {
            image: "https://cdn.quasar.dev/img/avatar.png",
            name: "Rebecca Moore"
          },
          taskState: "Completed"
        },
        {
          title: "Invite to office meet-up4",
          type: "Call",
          dueDate: "December 23, 2018",
          adressee: {
            image: "https://cdn.quasar.dev/img/avatar.png",
            name: "Rebecca Moore"
          },
          taskState: "Completed"
        },
        {
          title: "Invite to office meet-up7",
          type: "Call",
          dueDate: "December 23, 2018",
          adressee: {
            image: "https://cdn.quasar.dev/img/avatar.png",
            name: "Rebecca Moore"
          },
          taskState: "Completed"
        },
        {
          title: "Invite to office meet-up8",
          type: "Call",
          dueDate: "December 23, 2018",
          adressee: {
            image: "https://cdn.quasar.dev/img/avatar.png",
            name: "Rebecca Moore"
          },
          taskState: "Completed"
        },
        {
          title: "Invite to office meet-up9",
          type: "Call",
          dueDate: "December 23, 2018",
          adressee: {
            image: "https://cdn.quasar.dev/img/avatar.png",
            name: "Rebecca Moore"
          },
          taskState: "Completed"
        },
        {
          title: "Invite to office meet-up10",
          type: "Call",
          dueDate: "December 23, 2018",
          adressee: {
            image: "https://cdn.quasar.dev/img/avatar.png",
            name: "Rebecca Moore"
          },
          taskState: "ended"
        },
        {
          title: "Invite to office meet-up11",
          type: "Call",
          dueDate: "December 23, 2018",
          adressee: {
            image: "https://cdn.quasar.dev/img/avatar.png",
            name: "Rebecca Moore"
          },
          taskState: "Completed"
        },
        {
          title: "Invite to office meet-up12",
          type: "Call",
          dueDate: "December 23, 2018",
          adressee: {
            image: "https://cdn.quasar.dev/img/avatar.png",
            name: "Rebecca Moore"
          },
          taskState: "Completed"
        },
        {
          title: "Invite to office meet-up12",
          type: "Call",
          dueDate: "December 23, 2018",
          adressee: {
            image: "https://cdn.quasar.dev/img/avatar.png",
            name: "Rebecca Moore"
          },
          taskState: "Ended"
        }
      ]
    };
  },
  computed: {
    //  this will parse the overal analytics for task count
    // display correct completed vs total tasks count based on fetch
    taskAnalysis() {
      const completed = this.allTasks.filter(
        task => task.taskState === "Completed"
      );
      return {
        taskTotal: this.allTasks.length,
        tasksCompleted: completed.length
      };
      // return {
      //   taskTotal: 10,
      //   tasksCompleted: 8
      // };
    },
    topTasks() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.allTasks.splice(0, 3);
    }
  }
};
</script>

<style scoped>
.my-card {
  height: 99%;
}
.show-more {
  /* width: 160px; */
  height: 20px;
  /* margin: 15px 87px 0 89px; */
  font-size: 13px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.13px;
  text-align: center;
  color: #109cf1;
}
.task-card {
  cursor: pointer;
}
.time-board {
  margin: 24px 0;
  border-bottom: 1px solid #ebeff2;
}
</style>
