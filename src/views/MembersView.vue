<template>
  <main>
    <section v-if="!isLoaded">
      <button @click="loadMembersData" :disabled="loading">
        <span>Load Members</span>
      </button>
    </section>

    <members-list v-else :members="members" />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MembersService, { Member } from "@/services/members";
import MembersList from "@/components/members/MembersList.vue";

@Component({
  components: {
    MembersList,
  },
})
export default class MembersView extends Vue {
  private members: Member[] = [];
  private loading: boolean = false;
  private isLoaded: boolean = false;

  private async loadMembersData() {
    try {
      this.loading = true;
      this.members = await MembersService.loadMembers();
      this.isLoaded = true;
    } catch (error) {
      console.error("Error loading members:", error);
    } finally {
      this.loading = false;
    }
  }
}
</script>
