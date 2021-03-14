<template>
  <q-card class="my-card" @click="showOptions()">
    <q-card-section>
      <div class="row flex justify-between">
        <div class="task-title">{{ taskDetail.title }}</div>
        <p class="task-type">{{ taskDetail.type }}</p>
      </div>
      <div>
        <p>
          <span class="due-date">Due date: </span>
          <span class="date-detail"> {{ taskDetail.dueDate }}</span>
        </p>
      </div>

      <div class="row flex justify-between">
        <div class="row">
          <q-avatar size="sm" class="q-mr-sm">
            <img
              :src="taskDetail.adressee.image"
              :alt="taskDetail.adressee.name"
              width="100%"
              height="100%"
            />
          </q-avatar>
          <span>{{ taskDetail.adressee.name }}</span>
        </div>
        <div class="row">
          <div v-if="detailsEdit" class="row q-mr-sm q-mt-xs">
            <span class="ellipse orange q-mr-sm"></span>
            <span class="ellipse green q-mr-sm"></span>
            <q-icon name="create"></q-icon>
            <q-icon name="delete"></q-icon>
          </div>

          <q-btn
            size="sm"
            class="task-btn"
            :class="taskBtnClass"
            :label="taskDetail.taskState"
          />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "TaskDetailCard",
  props: {
    taskDetail: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      detailsEdit: false
    };
  },
  methods: {
    showOptions() {
      this.detailsEdit = !this.detailsEdit;
    }
  },
  computed: {
    taskBtnClass() {
      return {
        completed: this.taskDetail.taskState === "Completed",
        ended: this.taskDetail.taskState === "Ended",
        "active-task": this.taskDetail.taskState === "Active"
      };
    }
  }
};
</script>

<style scoped>
.my-card {
  width: 100%;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.08);
  /* margin: 24px; */
  /* padding: 16px; */
}
.task-title {
  width: 400px;
  height: 23px;
  margin: 0 71px 7px 0;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.15px;
  text-align: left;
  color: #323c47;
}

.task-type {
  width: 82px;
  height: 18px;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.12px;
  text-align: right;
  color: #90a0b7;
}
.due-date {
  width: 64px;
  height: 20px;
  margin: 7px 5px 20px 0;
  opacity: 0.5;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.13px;
  text-align: left;
  color: #4c5862;
}
.date-detail {
  width: 222px;
  height: 20px;
  margin: 7px 14px 6px 5px;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.13px;
  text-align: left;
  color: #4c5862;
}
.task-btn {
  width: 84px;
  height: 22px;
  color: #ffffff;
  /* margin: 22px 0 0 71px; */
  /* padding: 3px 8px 5px; */
  border-radius: 4px;
  background-color: #2ed47a;
  text-transform: initial;
}

.completed {
  background-color: #2ed47a;
}
.ended {
  background-color: #f7685b;
}
.active-task {
  background-color: #ffb946;
}

.ellipse {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  /* margin: 27px 8px 5px 159px; */
}

.green {
  border: solid 2px #2ed47a;
}
.orange {
  border: solid 2px #ffb946;
}
</style>
