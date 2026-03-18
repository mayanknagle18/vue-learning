<template>
  <div class="lookalike-main">
    <!-- Button to open modal -->
    <button class="custom-btn" @click="isOpen = true">Open Lookalike Modal</button>

    <!-- Modal Overlay -->
    <div v-if="isOpen" class="lookalike-overlay" @click.self="closeModal"></div>

    <!-- Modal Content -->
    <div v-if="isOpen" class="lookalike-wrap">
      <div class="lookalike-header">
        <div class="lookalike-left">
          <h2>Lookalikes</h2>
          <h5>Select a lookalike list for this campaign</h5>
        </div>
        <button class="close-btn" @click="closeModal">
          <img :src="cancelCircleIcon" class="search-icon" />
        </button>
      </div> 
      <div class="lookalike-body">
        <div class="lookalike-body-center">
          <div class="lookalike-inner-body">
            <h3>You don't have any leads.</h3>
            <p>Create a lead list to start running campaigns.</p>
            <div class="lookalike-btn-wrap">
              <v-btn color="primary" @click="createList">Create a List</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cancelCircleIcon from "../../assets/images/icons/cancel-circle.svg";
export default {
  name: "LookalikeModal",
  data() {
    return {
      isOpen: false,
      cancelCircleIcon,
    };
  },
  methods: {
    closeModal() {
      this.isOpen = false;
    },
    createList() {
      alert("Create List clicked!");
      this.closeModal();
    },
  },
};
</script>